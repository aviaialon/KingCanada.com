<?php 
namespace Core\Hybernate\Products;
/**
 * Products image position management used with Hybernate loader
 *
 * @package    Core
 * @subpackage Interfaces
 * @file       Core/Interfaces/Base/HybernateBaseInterface.php
 * @desc       Used interface for ORM implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
class Product_Image_Position extends \Core\Interfaces\HybernateInterface 
{
	/**
	 * This method makes sure a directory exists for an image position, if it
	 * doesnt exists, it attempts to create it.
	 *
	 * @param integer $intImagePosition (Optional) The image position
	 * @return boolean
	 */
	public static final function validateImagePostionDirectory($intImagePosition = NULL) 
	{
		$Application = \Core\Application::getInstance();
		$imgPosDir   = $Application->getConfigs()->get('Application.server.document_root') . 
					   $Application->getConfigs()->get('Application.core.mvc.product_imagePath') 
		             . DIRECTORY_SEPARATOR . $intImagePosition;
					 
		$blnContinue = is_dir($imgPosDir);	
		
		if (false === $blnContinue) {
			$blnContinue = @mkdir($imgPosDir, 0777);	
		}
		
		return $blnContinue;
	}
	
	/**
	 * This method returns the direcotry path for a position.
	 * if the $intImagePosition param is null, it will return the 
	 * original direcotry image path
	 *
	 * @param integer $intImagePosition (Optional) The image position
	 * @return string
	 */
	public static function getImagePositionDirecotryPath($intImagePosition = null) 
	{
		$Application = \Core\Application::getInstance();
		return $Application->getConfigs()->get('Application.core.mvc.product_imagePath') 
		             . DIRECTORY_SEPARATOR . (int) $intImagePosition;	
	}
	
	/**
	 * This method returns the WEB direcotry path for a position.
	 * if the $intImagePosition param is null, it will return the 
	 * original direcotry image path
	 *
	 * @param integer $intImagePosition (Optional) The image position
	 * @return string
	 */
	public static final function getImagePositionWebDirecotryPath($intImagePosition = null) 
	{
		$configs = \Core\Application::getInstance()->getConfigs();
		return  str_replace('//', '/', str_replace(array($configs->get('Application.server.document_root'), DIRECTORY_SEPARATOR), array('', '/'), 
				$configs->get('Application.core.mvc.product_imagePath') 
		        . DIRECTORY_SEPARATOR . (int) $intImagePosition));
	}
}