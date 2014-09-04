<?php 
namespace Core\Hybernate\Products;
/**
 * Products image management used with Hybernate loader
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
class Product_Image extends \Core\Interfaces\HybernateInterface 
{
	/**
	 * This method is executed before delete
	 *
	 * @param array $arguments (optional) The delete arguments
	 * @return void
	 */
	protected final function onBeforeDelete(array $arguments = array())
	{
		$configs 			   = \Core\Application::getInstance()->getConfigs();
		$productImagePositions = \Core\Hybernate\Products\Product_Image_Position::getMultiInstance(array(
			'active' => 1
		), true);
		
		$productImagePositions[] = 0;
		
		foreach ($productImagePositions as $index => $productImageRow)
		{
			if (true === file_exists($this->getServerImagePath($productImageRow['id']))) {
				unlink ($this->getServerImagePath($productImageRow['id']));	
			}
		}
	}
	
	/**
	 * This method copies a temp image to position 0
	 *
	 * @param string $strImagePath (optional) The image position (default is 0 - original image)
	 * @return \Core\Hybernate\Products\Product_Image
	 */
	public static function createPosition0Image($strImagePath = null, $intProductId = null) 
	{
		$configs 	 = \Core\Application::getInstance()->getConfigs();
		$objImage    = \Core\Hybernate\Products\Product_Image::getInstance();
		$blnContinue = (
			((bool) (false === is_null($strImagePath))) &&
			(true === file_exists($strImagePath))
		); 
		
		if (true === $blnContinue) {
			$objImage->setProductId((int) $intProductId);
			$objImage->setOriginalFileName(preg_replace('/[\\' . DIRECTORY_SEPARATOR . ']{2,}/', DIRECTORY_SEPARATOR, $strImagePath));
			$objImage->setImageExtension(pathinfo($strImagePath, PATHINFO_EXTENSION));
			$objImage->setActive(1);	
			$objImage->save();
			
			if ($objImage->getId() && \Core\Hybernate\Products\Product_Image_Position::validateImagePostionDirectory(0)) {
				$newImageServerPath = $configs->get('Application.server.document_root') . 
									  \Core\Hybernate\Products\Product_Image_Position::getImagePositionDirecotryPath(0) . DIRECTORY_SEPARATOR .  
									  $objImage->getId() . "." . pathinfo($strImagePath, PATHINFO_EXTENSION);
									  
				copy($strImagePath, $newImageServerPath);
				@chmod($newImageServerPath, 0777);
			}
		}
		return ($objImage);
	}
	
	/**
	 * This method returns the WEB image path according to a position
	 
	 * @param integer $intImagePosition (Optional) The image position (default is 0 - original image)
	 * @return string The image path
	 */
	public function getImagePath($intImagePosition = null) 
	{
		$configs      = \Core\Application::getInstance()->getConfigs();
		$blnContinue  = ((bool) $this->getId() > 0);
		$strImagePath = false; // TODO: Set the default image path here.
		
		if (
			($blnContinue)	&&
			($this->getImageExtension())
		) {
			$strImagePath = \Core\Hybernate\Products\Product_Image_Position::getImagePositionWebDirecotryPath($intImagePosition) .
							'/' . $this->getId() . "." . $this->getImageExtension();									
		}
		
		return ($strImagePath);
	}
	
	/**
	 * This method returns the SERVER image path according to a position
	 
	 * @param integer $intImagePosition (Optional) The image position (default is 0 - original image)
	 * @return string The image path
	 */
	public function getServerImagePath($intImagePosition = null) 
	{
		$configs      = \Core\Application::getInstance()->getConfigs();
		$blnContinue  = ((bool) $this->getId() > 0);
		$strImagePath = false; // TODO: Set the default image path here.
		
		if (
			(true === $blnContinue)	&&
			($this->getImageExtension())
		) {
			$strImagePath = \Core\Hybernate\Products\Product_Image_Position::getImagePositionDirecotryPath($intImagePosition) .
							DIRECTORY_SEPARATOR . $this->getId() . "." . $this->getImageExtension();	
		}
		
		return ($strImagePath);
	}
	
	/**
	 * This method creates the item images from either a specified image position or all
	 *
	 * @param integer $intOriginalImageId 	(Optional) The original image id (position 0)
	 * @param integer $intImagePosition		(Optional) The image position ID (not required);
	 * @return Boolean
	 */
	public static function createItemImagePositions ($intOriginalImageId = null, $intImagePosition = null) 
	{
		$configs    	   = \Core\Application::getInstance()->getConfigs();
		$arrImagePositions = array();
		$blnReturn         = true;
		$arrFilter         = array('active' => 1);
		$strOriginalImage  = null;
		$blnReturn         = true; 
		
		if (true === $blnReturn) 
		{
			// 1. Get the image position array
			if (false === empty($intImagePosition)) {
				$arrFilter['id'] = (int) $intImagePosition;
			}
			
			$arrImagePositions = \Core\Hybernate\Products\Product_Image_Position::getMultiInstance($arrFilter, true);
			$blnReturn = (
				(false === empty($arrImagePositions)) &&
				((int) $intOriginalImageId)
			);
		}
		
		// 2. Get the original image object
		if ($blnReturn) {
			$objOriginalImage = \Core\Hybernate\Products\Product_Image::getInstance($intOriginalImageId);
			$strOriginalImage = $objOriginalImage->getImagePath(); // No image position defined to return the default.
		
			$blnReturn = (
				(true === ((bool) $objOriginalImage->getId())) &&
				(false === empty($strOriginalImage)) &&
				(true === file_exists($configs->get('Application.server.document_root') . $strOriginalImage))
			);
		}
		
		// 3. Process that image according to position array
		if ($blnReturn) {
			foreach($arrImagePositions as $intIndex => $arrRow) {
				$blnReturn = (
					((int) $arrRow['id']) &&
					((int) $arrRow['width']) &&
					((int) $arrRow['height']) &&
					(strlen($objOriginalImage->getImageExtension())) &&
					(true === \Core\Hybernate\Products\Product_Image_Position::validateImagePostionDirectory($arrRow['id']))
				);
				
				if ($blnReturn) {
					// Next iterate through the image position array and create the image instances
					$objNewItemImagePosition = \Core\Io\Image\Image::getInstance(
						$strOriginalImage,
						\Core\Hybernate\Products\Product_Image_Position::getImagePositionDirecotryPath($arrRow['id']) . DIRECTORY_SEPARATOR .  
						$objOriginalImage->getId() . "." . $objOriginalImage->getImageExtension()
					);
					
					$objNewItemImagePosition->setQuality(100);
					$objNewItemImagePosition->setPreserveAspectRatio(false);
					$blnReturn = $objNewItemImagePosition->resize(
						(int) $arrRow['width'], 
						(int) $arrRow['height'],
						\Core\Io\Image\Image::RESIZE_TYPE_NOT_BOX
					);
				}
			}
		}
		
		return ($blnReturn);
	}
	
	/**
	 * This method sets an image to main!
	 *
	 * @param integer $imageId The image id
	 * @return boolean
	 */
	 public static final function setImageToMain($imageId = null)
	 {
		if  (empty($imageId) === true) return false;
		
		$productImage = \Core\Hybernate\Products\Product_Image::getInstance((int) $imageId);
		
		if (((int) $productImage->getProductId()) > 0) {
			$productImage->_dataAccessInterface->execute(sprintf('UPDATE %s SET main = 0 WHERE productId = :productId', 
				$productImage->_objectInterfaceType), array('productId' => (int) $productImage->getProductId()));	

			$productImage->setMain(1);
			$productImage->save();
			
			return true;
		}
		
		return false;
	 }
}