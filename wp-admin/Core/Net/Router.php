<?php
/**
 * Router Administration Class
 *
 * This class controls the Net Routing scope
 *
 * @namespace    Core
 * @package      Net
 * @subpackage   none
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
namespace Core\Net;

/**
 * Router Administration Class
 *
 * This class controls the Net Routing scope
 *
 * @namespace    Core
 * @package      Net
 * @subpackage   none
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
class Router
    extends \Core\Interfaces\Base\ObjectBaseInterface
{
	/**
     * Content type JSON
     *
     * @var object
     */
	 const Content_Type_Json = 'application/json';
	 
	/**
     * Content type HTML
     *
     * @var object
     */
	 const Content_Type_Html = 'text/html';
	 
    /**
     * The controller instance
     *
     * @var object
     */
    protected $_controllerInstance;

    /**
     * Instance params sent by getInstance
     *
     * @var array
     */
    protected $_instanceParams;

    /**
     * Main run MVC Application
     *
     * @access public, final
     * @throws \Exception
     * @return \Core\Net\HttpRequest
     */
    public final function run()
    {
        $this->parseRequestData($this->_instanceParams);
        $this->dispatch();
        $this->render();

        return $this;
    }

    /**
     * Called after get instance.
     *
     * @access protected, final
     * @throws \Exception
     * @param  array $dispatchRequestData The request data to parse
     * @return \Core\Net\Router
     */
    protected final function onGetInstance(array $dispatchRequestData = array())
    {
        $Application = \Core\Application::getInstance();

        $this->_instanceParams = $dispatchRequestData;
        $Application->setRequestDispatcher($this);
    }

    /**
     * Method parses the request data
     *
     * @param  array $dispatchRequestData The request data to parse
     * @access protected
     * @return void
     */
    public final function parseRequestData(array $dispatchRequestData = array())
    {
        $Application    = \Core\Application::getInstance();
        $configs        = $Application->getConfigs();
        $rawRequestData = array_merge($_GET, $dispatchRequestData, $_POST);
        $mvcPath        = trim((empty($rawRequestData['path']) === false) ? $rawRequestData['path'] : $_SERVER['REQUEST_URI'], '/');
        $mvcPath        = str_replace(trim($configs->get('Application.core.server_root'), '/'), '', trim($mvcPath, '/'));
		$mvcUrl         = $mvcPath;

        preg_match_all ("/(?P<params>[^\/\:]*)\:(?P<values>[^\/\:]*)/", $mvcPath, $_dispatchRequestData, PREG_PATTERN_ORDER);

        foreach ($_dispatchRequestData['params'] as $index => $requestKey)
        {
            $rawRequestData[$requestKey] = $_dispatchRequestData['values'][$index];
        }

        // Remove the URL params
        $mvcPath = preg_replace('/\/?([^\/\:]*)\:([^\/\:]*)/ui', '', $mvcPath);
        $mvcPath = trim(preg_replace ('/\/{2,}/', '/', $mvcPath), '/');
        $mvcPath = array_pad(explode('/', empty($mvcPath) === true ? 'index' : $mvcPath), 2, 'index');
        // Clean the requested URL
        $mvcRequestUrl = $mvcPath;
        $mvcRequestUrl = preg_replace('/\/index/ui', '', '/' . preg_replace('/[_]/', '-', implode('/', $mvcRequestUrl)));
        $mvcRequestUrl = preg_replace('/[^\w\d-\/\:]/ui', '-', '/' . $mvcRequestUrl);
        $mvcRequestUrl = preg_replace('/-{2,}/', '-', $mvcRequestUrl);
        $mvcRequestUrl = preg_replace('/\/{2,}/', '/', $mvcRequestUrl);

        unset ($_GET['path']);
        unset ($rawRequestData['path']);

        $controller    = preg_replace('/_{2,}/', '_', preg_replace('/[^\w\d]/ui', '_', array_shift($mvcPath)));
        $rawAction     = array_shift($mvcPath);
        $action        = preg_replace('/_{2,}/', '_', preg_replace('/[^\w\d]/ui', '_', $rawAction));
        $mvcRequestUrl = ($controller === 'index' && $action !== 'index') ? '/index/' . $action : $mvcRequestUrl;


        $this->setRequestData($rawRequestData);
        $this->setMvcRequest(array(
			'mvcUrl'			=> $configs->get('Application.core.base_url') . $mvcUrl,
            'mvcPath'           => $mvcRequestUrl,
            'controller'        => $controller,
            'action'            => $action,
            'rawAction'         => $rawAction,
            'mvcController'        => $configs->get('Application.core.mvc.controller.namespace') .
                                      '\\' . ucwords($controller) . 'Controller',
            'mvcControllerFile'    => $configs->get('Application.core.mvc.application_root') . DIRECTORY_SEPARATOR .
                                   'controller' . DIRECTORY_SEPARATOR . ucwords($controller) . 'Controller.php',
            'mvcAction'         => strtolower($action) . 'Action',
            'mvcView'           => preg_replace('/[\/]{2,}/', '/', $configs->get('Application.core.mvc.application_root') . DIRECTORY_SEPARATOR . 'views' .
                                   DIRECTORY_SEPARATOR .(strtolower($controller) !== 'index' ? strtolower($controller) : '') . DIRECTORY_SEPARATOR .
                                   strtolower($action) . '.' . $configs->get('Application.core.mvc.view_ext'))
        ));
        $this->setLayout($configs->get('Application.core.mvc.layout'));
		$this->setContentType(\Core\Net\Router::Content_Type_Html);
		
		return $this;
    }

    /**
     * Dispatches the MVC request
     *
     * @access public
     * @throws \Exception
     * @return \Core\Applciation
     */
    protected final function dispatch()
    {
        $controllerName = $this->getMvcRequest('controller');
        $controller     = $this->getMvcRequest('mvcController');
        $action         = $this->getMvcRequest('mvcAction');

        /**
         *
         *     Components callbacks URLs are constructed as follows:
         *             http://www.domain.com/callback/{path seperated by -}/{method}/{param}/{param}/
         *
         *             Methods must be protected.
         *             Params passed to the method are:
         *                     1 (array) the parameters set in the request path
         *                     2 (array) the dispatcher request
         */
        if (strtolower($controllerName) === 'callback') {
            $aesCrypto = \Core\Crypt\AesCrypt::getInstance();
            $data      = unserialize($aesCrypto->decrypt(base64_decode($this->getMvcRequest('rawAction'))));

            if (true === empty($data) || false === is_array($data)) {
                $this->pageNotFound();
            }

            $controller = $data['class'];
            $action     = $data['method'];
        }
        else {
            if (false === file_exists($this->getMvcRequest('mvcControllerFile'))) {
                $this->pageNotFound(sprintf('Controller [%s] does not exists', $controller));
            }

            require_once ($this->getMvcRequest('mvcControllerFile'));
        }

        $this->setViewParams(array());
        $this->_controllerInstance = new $controller();

        if (false === method_exists($this->_controllerInstance, $action)) {
			if (true === method_exists($this->_controllerInstance, 'catchAllAction')) {
				$action = 'catchAllAction';
			} else {
				$this->pageNotFound(sprintf('Action [%s] not implemented in [%s]', $action, $controller));	
			}
        }

        $this->_controllerInstance->_dataRegistry = $this->_dataRegistry;
		
		if (true === method_exists($this->_controllerInstance, 'preDispatch')) {
			call_user_func_array(array($this->_controllerInstance, 'preDispatch'), array($this->getRequestData()));	
		}
		
        call_user_func_array(array($this->_controllerInstance, $action), array($this->getRequestData()));
		
		if (true === method_exists($this->_controllerInstance, 'postDispatch')) {
			call_user_func_array(array($this->_controllerInstance, 'postDispatch'), array($this->getRequestData()));	
		}
		
        $this->_dataRegistry = $this->_controllerInstance->get();
        
		return $this;
    }

  /**
    * Renders the view
    *
    * @return void
    */
    protected final function render()
    {
        $strLayoutContent = null;
        $viewFile         = $this->_controllerInstance->getMvcRequest('mvcView');
        $controller       = $this->_controllerInstance->getMvcRequest('controller');
        $Application      = \Core\Application::getInstance();

        if ($controller === 'callback') exit();

        if (empty($viewFile) === false) {
            $strLayoutContent = $this->loadFileAsset($viewFile, sprintf('View file [%s] does not exists', $viewFile));
        }

        $layout = $this->_controllerInstance->getMvcRequest('mvcLayout');
        if (false === empty($layout)) {
            $strLayoutContent = str_replace($Application->getConfigs()->get('Application.core.mvc.layout.token'),
                                $strLayoutContent,
                                $this->loadFileAsset($this->_controllerInstance->getMvcRequest('mvcLayout'),
                                    sprintf('Layout file [%s] does not exists', $this->_controllerInstance->getMvcRequest('mvcLayout'))));
        }
		
		if (false === headers_sent()) {
			header ('Content-Type: ' . $this->getContentType());	
		}
		
        echo $strLayoutContent;
        exit();
    }

  /**
    * Renders a partial
    *
    * @param string $partialPath The partial path (ex: test::header will render mvc.core/partials/test/header.php)
    * @param array  $partialData (Optional) Partial data
    * @return void
    */
    protected final function renderPartial($partialPath, array $partialData = array())
    {
        $partialDispatcher = new \Core\Net\Mvc\PartialDispatcher();
        return $partialDispatcher->execute($partialPath, $partialData);
    }

   /**
    * Loads a file and returns the parsed file data
    *
    * @param string $file             The file to load
    * @param string $errorMessage     (Optional) The error message to throw if the file isnt found
    * @throws \Exception
    * @return void
    */
    protected final function loadFileAsset($file, $errorMessage = false)
    {
        $fileReturn = null;
        if (false === empty($file)) {
            @ob_flush();
            @ob_start();
            if (false === @include $file)
                 $this->pageNotFound(false === $errorMessage ? sprintf('Asset file [%s] not found', $file) : $errorMessage);

            $fileReturn = ob_get_clean();
        }

        return $fileReturn;
    }

   /**
    * Sets a layout
    *
    * @param string $layoutFile (Optional) The layout file starting from the MVC root
    * @return void
    */
    protected final function setLayout($layoutFile = false)
    {
        if (false === empty($layoutFile)) {
            $Application = \Core\Application::getInstance();
            $configs     = $Application->getConfigs();
            $this->addMvcRequest('mvcLayout', $configs->get('Application.core.mvc.application_root') .
                          DIRECTORY_SEPARATOR . 'layout' . DIRECTORY_SEPARATOR  . $layoutFile);
        } else {
            $this->addMvcRequest('mvcLayout', false);
        }
    }

  /**
    * Sets the view file
    *
    * @param string $viewPath - The view to render starting from MVC.core (Ex: test/index will render mvc.core/test/index/php)
    * @return void
    */
    protected function setView($viewPath = false)
    {
        if (false === empty($viewPath)) {
            $configs  = \Core\Application::getInstance()->getConfigs();
            $viewPath = preg_replace('/[\/]{2,}/', '/',
                        $configs->get('Application.core.mvc.application_root') . DIRECTORY_SEPARATOR . 'views' .
                        DIRECTORY_SEPARATOR . $viewPath . '.' . $configs->get('Application.core.mvc.view_ext'));
        }

       $this->addMvcRequest('mvcView', $viewPath);
    }
	
   /**
    * Disables view and layout
    *
    * @param string $viewPath - The view to render starting from MVC.core (Ex: test/index will render mvc.core/test/index/php)
    * @return void
    */
    protected function disableRender()
    {
       $this->addMvcRequest('mvcLayout', false);
	   $this->addMvcRequest('mvcView', false);
    }

    /**
     * This method creates a callback URL used to callback core components objects
     *
     * @throws  \Exception
     * @example $this->createCallbackUrl($this, __FUNCTION__, array('param-1', 'param-2'))
     * @access  protected, static, final
     * @param   object $objCallbackTaget  The target object / Or object class path (path::to::class::{classname})
     * @param   string $strMethodCallback The callback method
     * @param   array  $arrParams         The additional parameters [optional]
     * @return  string
     */
    public static final function callback($objCallbackTaget, $strMethodCallback, array $arrParams = array())
    {
        $Application      = \Core\Application::getInstance();
        return $Application->getConfigs()->get('Application.core.base_url')
                          . 'callback/' . self::callbackToken($objCallbackTaget, $strMethodCallback, $arrParams);
    }
	
	/**
     * This method creates a callback token used to callback core components objects
     *
     * @throws  \Exception
     * @example $this->createCallbackUrl($this, __FUNCTION__, array('param-1', 'param-2'))
     * @access  protected, static, final
     * @param   object $objCallbackTaget  The target object / Or object class path (path::to::class::{classname})
     * @param   string $strMethodCallback The callback method
     * @param   array  $arrParams         The additional parameters [optional]
     * @return  string
     */
    public static final function callbackToken($objCallbackTaget, $strMethodCallback, array $arrParams = array())
    {
		$callbackToken    = null;
		$Application      = \Core\Application::getInstance();
        $objCallbackTaget = (true === is_object($objCallbackTaget) ? get_class($objCallbackTaget) : $objCallbackTaget);

        if (false === method_exists($objCallbackTaget, $strMethodCallback)) {
            \Core\Exception\Exception::report(sprintf(
                'Callback method [%s::%s()] does not exists', $objCallbackTaget, $strMethodCallback
            ));
        }

        // Build the callback URL
        $aesCrypto      = \Core\Crypt\AesCrypt::getInstance();
        $callbackToken  = serialize(array(
            'class'     => $objCallbackTaget,
            'method'    => $strMethodCallback,
            'params'    => $arrParams
        ));

        $callbackToken  = base64_encode($aesCrypto->encrypt($callbackToken));
		
		return $callbackToken;
	}

   /**
     * Throws a 404 error
     *
     * @access public
     * @throws \Exception
     * @param  string $errorReport (Optional) If not empty, it will report an error
     * @return \Core\Applciation
     */
    protected final function pageNotFound($errorReport = null)
    {
        $Application = \Core\Application::getInstance();

        if (false === headers_sent()) {
            header('HTTP/1.0 404 Not Found');
        }

        require_once ($Application->getConfigs()->get('Application.core.mvc.application_root') .
                      DIRECTORY_SEPARATOR . 'system' . DIRECTORY_SEPARATOR . '404.php');

        if (empty($errorReport) === false) {
            \Core\Exception\Exception::report($errorReport);
        }

        exit();
    }

    /**
     * Returns the current controller instance
     *
     * @return \Core\Net\Router
     */
    protected final function getControllerInstance()
    {
        return (empty($this->_controllerInstance) === false ? $this->_controllerInstance : $this);
    }
}