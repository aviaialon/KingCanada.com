<?php
/**
 * Exception Administration Class
 *
 * This class controls the Net Routing scope
 *
 * @namespace    Core
 * @package      Exception
 * @subpackage   none
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
namespace Core\Exception;

/**
 * Exception Administration Class
 *
 * This class controls the Net Routing scope
 *
 * @namespace    Core
 * @package      Exception
 * @subpackage   none
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
class Exception
    extends \Exception
{
    /**
     * Throws an exception
     *
     * @access public
     * @param  string $exception The exception text
     * @throws \Exception
     * @return void
     */
    public static final function raise($exceptionText)
    {
        \Core\Exception\Exception::handle($exceptionText, __FUNCTION__);
    }

    /**
     * logs an exception
     *
     * @access public
     * @param  string $exception The exception text
     * @throws \Exception
     * @return boolean
     */
    public static final function log($exceptionText)
    {
        \Core\Exception\Exception::handle($exceptionText, __FUNCTION__);
    }

    /**
     * Reports an exception
     *
     * @access public
     * @param  string $exception The exception text
     * @throws \Exception
     * @return boolean
     */
     public static final function report($exceptionText)
     {
         $Application = \Core\Application::getInstance();
         $method      = 'log';

         if ((bool) $Application->getConfigs()->get('Application.core.exception.display') === true) {
             ini_set('html_errors', 1);
             $method = 'raise';
         }

         call_user_func_array(array(__CLASS__ , $method), array($exceptionText));
     }

    /**
     * Stores an exception
     *
     * @access protected
     * @param  string $exception The exception text
     * @param  string $errorType The error handling type raise | log
     * @throws \Exception
     * @return void
     */
     protected static final function handle($exceptionText, $errorType)
     {
         $Application = \Core\Application::getInstance();
         if ((bool) $Application->getConfigs()->get('Application.core.exception.save') === true) {
             $exceptionHandler = \Core\Hybernate\Exception\Exception::getInstance();
             $exceptionHandler->setTitle($exceptionText);
             $exceptionHandler->setTimeDate(date('Y-m-d H:i:s', time()));
             $exceptionHandler->setRequest_Uri($_SERVER['REQUEST_URI']);
             $exceptionHandler->setBacktrace(print_r(debug_backtrace(), true));
             $exceptionHandler->addBacktrace(str_repeat(PHP_EOL, 5));
             $exceptionHandler->addBacktrace(print_r($_SERVER, true));
             $exceptionHandler->save();
         }

         switch ($errorType) {
            case 'raise' :
                throw new \Exception($exceptionText);
                break;

            default :
                error_log(print_r($exceptionText, true));
                break;
         }
     }
}