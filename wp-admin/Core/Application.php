<?php
/**
 * Application Administration Class
 *
 * This class controls the Application scope
 *
 * @namespace    Core
 * @package      Core
 * @subpackage   none
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
namespace Core;

class_exists('\Core\Interfaces\Base\ObjectBaseInterface') |
    require_once (realpath(dirname(__FILE__)) . '/Interfaces/Base/ObjectBaseInterface.php');

class_exists('\Core\Interfaces\Base\AbstractSingletonInterface') |
    require_once (realpath(dirname(__FILE__)) . '/Interfaces/Base/AbstractSingletonInterface.php');

/**
 * Begin Application Class
 *
 * @author admin
 */
class Application
    extends \Core\Interfaces\Base\AbstractSingletonInterface
{	
	/**
     * Flag set to prevent autoload
     *
     * @var boolean
     */
	private static $_disableAutoload = false;
	
    /**
     * Setup loader thats called after getInstance
     *
     * @param  array $configs (Optional) The array of config files to parse
     * @return void
     */
    public final function onGetInstance(array $configs = array())
    {
        $this->setConfigList(array_merge(array(dirname(__FILE__) . '/configs.ini'), $configs));
		$this->bootstrap($configs);
    }
	
	/**
     * Sets the autoload flag to false
     *
     * @return void
     */
    public static final function disableAutoload()
    {
        \Core\Application::$_disableAutoload = true;
    }
	
	/**
     * loads a static resource
     *
     * @access public
     * @param  string $resourceClass resource class namespace
     * @throws \Exception
     * @return \Core\Interfaces\Base\ObjectBaseInterface
     */
    public static final function bootstrapResource($resourceClass)
    {
		if (false === class_exists('\Core\Interfaces\Base\HybernateBaseInterface')) {
			\Core\Application::autoload('\Core\Interfaces\Base\ObjectBaseInterface');
			\Core\Application::autoload('\Core\Interfaces\Base\HybernateBaseInterface');
			\Core\Application::autoload('\Core\Interfaces\HybernateInterface');
			\Core\Application::autoload('\Core\Database\DriverInterface');
			\Core\Application::autoload('\Core\Database\Driver\QueryWriter\AQueryWriter');
			\Core\Application::autoload('\Core\Database\Driver\Pdo');
			\Core\Application::autoload('\Core\Config\Configurations');
		}
		
		\Core\Application::autoload($resourceClass);
	}

    /**
     * Bootstrap MVC resources
     *
     * @access public
     * @param  array $configs (Optional) The array of config files to parse
     * @throws \Exception
     * @return \Core\Applciation
     */
    protected final function bootstrap(array $configs)
    {
		@session_start();	
		if (false === \Core\Application::$_disableAutoload) {
			error_reporting(E_ALL);
			spl_autoload_register(array($this, 'autoload'));
		}
		
		// get the configs
        $this->setConfigs(\Core\Config\Configurations::getInstance());
		$this->getConfigs()->set('Application.server.document_root', $_SERVER['DOCUMENT_ROOT']);
		$this->getConfigs()->set('Application.core.core_path', preg_replace('/(\/[^\/.]+\/[\.]{2}\/)/', '/', realpath(dirname(__FILE__))));
        $this->getConfigs()->set('Application.core.document_root', preg_replace('/(\/[^\/.]+\/[\.]{2}\/)/', '/', str_replace('//', '/', $_SERVER['DOCUMENT_ROOT'] .  
			(true === isset($_SERVER['BASE']) ? $_SERVER['BASE'] : dirname($_SERVER['SCRIPT_NAME'])))));
        $this->getConfigs()->set('Application.core.server_root',
                preg_replace('/(\/[^\/.]+\/[\.]{2}\/)/', '/', str_replace('//', '/', str_replace($_SERVER['DOCUMENT_ROOT'], '/', 
					$this->getConfigs()->get('Application.core.document_root')))));
        $this->getConfigs()->set('Application.core.base_url',
                'http' . (((true === isset($_SERVER['HTTPS'])) && $_SERVER['HTTPS'] == 'on') ? 's' : '') . '://' . preg_replace('/\/{2}/', '/', $_SERVER['HTTP_HOST'] .
                (true === isset($_SERVER['BASE']) ? $_SERVER['BASE'] : $this->getConfigs()->get('Application.core.server_root'))));
		$this->getConfigs()->set('Application.core.mvc.application_root', 
				preg_replace('/(\/[^\/.]+\/[\.]{2}\/)/', '/', preg_replace('/[\/]{2,}/', '/', $this->getConfigs()->get('Application.server.document_root') . 
				$this->getConfigs()->get('Application.core.mvc.application_path'))));	
		
		ini_set('display_errors', (int) $this->getConfigs()->get('Application.core.exception.display'));
		
        return $this;
    }
	
	/**
     * Gets the database
     *
     * @access public
     * @throws \Exception
     * @return \Core\Database\Driver\Pdo
     */
    public final function getDatabase()
    {
        return \Core\Database\Driver\Pdo::getInstance()->connect();
    }
	
    /**
     * Autoload function
     *
     * @access public
     * @param  string $className The class name trying to be loaded
     * @throws \Exception
     * @return void
     */
    public static final function autoload($className)
    {
		require_once self::getIncludePath($className);
    }

    /**
     * Gets file include path from namespace
     *
     * @access public
     * @param  string $className The class name trying to be loaded
     * @throws \Exception
     * @return string
     */
    public static final function getIncludePath($className)
    {
        $namespace = str_replace("\\", "/", $className);
        return realpath(dirname(__FILE__)) . '/../' . $namespace . ".php";
    }
	
	/**
     * Translate according to the lang
     *
     * @access public
     * @param  string $entext The english text
     * @param  string $frtext The French text
     * @throws \Exception
     * @return string
     */
	 public static final function translate($entext = null, $frtext = null)
	 {
		 $translatedText = (empty($_GET['lang']) === false && $_GET['lang'] === 'fr' ? $frtext : $entext);
		 // TODO: Finish implementation of translation
		 
		 return $translatedText; 
	 }
}