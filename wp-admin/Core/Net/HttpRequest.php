<?php
/**
 * HttpRequest Administration Class
 *
 * This class controls the Net HttpRequest scope
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
 * HttpRequest Administration Class
 *
 * This class controls the Net HttpRequest scope
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
class HttpRequest
    extends \Core\Net\Router
{
   /**
    * Sets a view data
    *
    * @param string $dataKey
    * @param mixed  $dataValue
    * @return void
    */
    protected final function setViewData($dataKey, $dataValue = null)
    {
        $this->addViewParams($dataKey, $dataValue);
    }

  /**
    * Gets a view data
    *
    * @param string $dataKey
    * @return mixed
    */
    protected final function getViewData($dataKey = null)
    {
        return $this->getViewParams($dataKey);
    }

  /**
    * Gets the view file
    *
    * @param string $viewPath
    * @return void
    */
    protected final function getView()
    {
        return $this->getMvcRequest('mvcView');
    }

    /**
     * Returns request data
     *
     * @param  string $requestDataKey (Optional) The request data key
     * @return mixed | false
     */
    public function getRequestParam($requestDataKey = null)
    {
        return $this->getRequestData($requestDataKey);
    }

  /**
    * Gets the layout used
    *
    * @return string
    */
    protected final function getLayout()
    {
        return $this->getViewParams('mvcLayout');
    }

   /**
    * Creates a route
    *
    * @return string
    */
    protected final function route($controller = null, $action = null, array $params = array())
    {
        $Application    = \Core\Application::getInstance();
        $controllerName = (empty($controller) === false) ? $controller : 'index';
        $actionName     = (empty($controller) === false) ? $action : 'index';
        $route          = rtrim($Application->getConfigs()->get('Application.core.base_url'), '/')
                          . '/' . $controllerName . '/' . $actionName;

        foreach ($params as $paramKey => $paramValue) {
            $paramValue = (true === is_object($paramValue)) ? serialize($paramValue) : $paramValue;
            $route     .= '/' . $paramKey . ':' . $paramValue;
        }

        return $route;
    }
}