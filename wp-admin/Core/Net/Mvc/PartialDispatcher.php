<?php
/**
 * HttpRequest Administration Class
 *
 * This class controls the Net HttpRequest scope
 *
 * @namespace    Core
 * @package      Net
 * @subpackage   Mvc
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
namespace Core\Net\Mvc;

/**
 * HttpRequest Administration Class
 *
 * This class controls the Net HttpRequest scope
 *
 * @namespace    Core
 * @package      Net
 * @subpackage   Mvc
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
class PartialDispatcher
    extends \Core\Net\HttpRequest
{	
   /**
    * Renders a partial
    *
	* @param string $partialPath The partial path (ex: test::header will render mvc.core/partials/test/header.php)
    * @param array  $partialData (Optional) Partial data
    * @return void
    */
    protected final function execute($partialPath, array $partialData = array())
    {
		$Application = \Core\Application::getInstance();
        $configs     = $Application->getConfigs();
		$partialRoot = $configs->get('Application.core.mvc.application_root') .
                       DIRECTORY_SEPARATOR . 'partial' . DIRECTORY_SEPARATOR . 
					   str_replace('::', '/', $partialPath) . '.php';

		$this->setPartialData($partialData);
        //echo $this->loadFileAsset($partialRoot, sprintf('Partial [%s] not found', $partialRoot));	
		if (false === @include $partialRoot)
                 $this->pageNotFound(sprintf('Partial [%s] not found', $partialRoot));
    }
}