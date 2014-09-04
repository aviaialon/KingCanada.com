<?php
/**
 * Vendor - Image handler
 * Requires PHP 5 >= 5.3.0
 *
 * @package    Core
 * @subpackage Vendor
 * @file       Core/Vendor/Zebra/Zebra_Image.php
 * @desc       Used interface for image implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */

namespace Core\Io\Image;

/**
 * VendorL Image handler
 *
 * @package    Core
 * @subpackage Vendpr
 * @file       Core/Vendor/Zebra/Zebra_Image.php
 * @desc       Used interface for image implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
class Image extends \Core\Vendor\Zebra\Zebra_Image 
{
	/**
	 * Class Constants
	 */
	 
	// Error Codes 
	const ERROR_SOURCE_FILE_NOT_FOUND 		= 1; 	
	const ERROR_SOURCE_FILE_NOT_READABLE 	= 2; 	
	const ERROR_CANT_WRITE_TARGET_FILE 		= 3; 	
	const ERROR_UNSUPPORTED_SOURCE_FORMAT 	= 4; 	
	const ERROR_UNSUPPORTED_TARGET_FORMAT 	= 5; 	
	const ERROR_UNSUPPORTED_GDLIB_VERSION 	= 6; 	
	const ERROR_GDLIB_NOT_FOUND 			= 7; 		
	
	// Resize Codes 
	const RESIZE_TYPE_BOX			= 0;
	const RESIZE_TYPE_NOT_BOX		= 1;
	const RESIZE_IMAGE_CROP_TOPLEFT	= 2;
	const RESIZE_IMAGE_CROP_CENTER	= 3;
	
	// Class Vars
	protected $objParent 	= NULL;
	
	/**
	 * Class instance initiator
	 *
	 * @return \Core\Io\Image
	 */
	public static final function getInstance ($strSourceImage = null, $strTargetImage = null) 
	{
		return (new \Core\Io\Image\Image($strSourceImage, $strTargetImage));	 
	}
	
	/**
	 * Class constructor.
	 *
	 * @return \Core\Io\Image
	 */
	public function __construct($strSourceImage = null, $strTargetImage = null) 
	{
		$this->configs     = \Core\Application::getInstance()->getConfigs();
		$this->objParent   = new parent();	
		
		// Default Configurations
		$this->objParent->preserve_aspect_ratio 	= false;
		$this->objParent->enlarge_smaller_images 	= true;
		$this->objParent->preserve_time 			= true;
		$this->objParent->chmod_value 				= 0755;
		$this->objParent->error 					= 0;
		$this->objParent->jpeg_quality 				= 100;
		$this->objParent->target_path				= "";
		
		if (! is_null($strSourceImage)) {
			$this->setImageSourcePath($strSourceImage);
		}
		
		if (! is_null($strTargetImage)) {
			$this->setImageOutputPath($strTargetImage);
		}
	}
	
	/**
	 * Setters
	 */
	 
	 // Sets the in source path (the original image)
	 public function setImageSourcePath($strSource = NULL) 
	 {
		$this->objParent->source_path = $this->configs->get('Application.server.document_root') . 
			str_replace($this->configs->get('Application.server.document_root'), "", $strSource);	 
	 }
	 
	 // Sets the outsource image path (the saved image)
	 public function setImageOutputPath($strPath = NULL) 
	 {
		$this->objParent->target_path = $this->configs->get('Application.server.document_root') . 
			str_replace($this->configs->get('Application.server.document_root'), "", $strPath);
	 }
	 
	 // Sets the image quality
	 public function setQuality($intQuality = 75) 
	 {
		$this->objParent->jpeg_quality = (int) $intQuality;
	 }
	 
	 // Sets wether or not to preverve aspect ratio
	 public final function setPreserveAspectRatio($blnPreserve = true) 
	 {
		$this->objParent->preserve_aspect_ratio	 = (bool) $blnPreserve;
	 }
	 /**
	  * Getters
	  */
	 public function getTargetImagePath() 
	 {
		$strNewImagePath = str_replace($this->configs->get('Application.server.document_root'), "/" , $this->objParent->target_path);
		$strNewImagePath = str_replace("//", "/" , $strNewImagePath);
		return ($strNewImagePath);	 
	 }
	 
	 public function getImageExtension() 
	 { 
		return (pathinfo($this->objParent->source_path, PATHINFO_EXTENSION));	 
	 }
	 
	 public function getError() 
	 {
		/**
		 *  Possible error codes are:
		 *
		 *  - 1:  source file could not be found
		 *  - 2:  source file is not readable
		 *  - 3:  could not write target file
		 *  - 4:  unsupported source file format
		 *  - 5:  unsupported target file format
		 *  - 6:  GD library version does not support target file format
		 *  - 7:  GD library is not installed!
		 */
		 $strError = false;
		 if ($this->objParent->error) {
			 switch ((int) $this->objParent->error) {
				case self::ERROR_SOURCE_FILE_NOT_FOUND : 		{ $strError="Source file could not be found."; 	break; }
				case self::ERROR_SOURCE_FILE_NOT_READABLE : 	{ $strError="Source file is not readable."; 	break; }
				case self::ERROR_CANT_WRITE_TARGET_FILE : 		{ $strError="Could not write target file."; 	break; }
				case self::ERROR_UNSUPPORTED_SOURCE_FORMAT : 	{ $strError="Unsupported source file format."; 	break; }
				case self::ERROR_UNSUPPORTED_TARGET_FORMAT : 	{ $strError="Unsupported target file format."; 	break; }
				case self::ERROR_UNSUPPORTED_GDLIB_VERSION : 	{ $strError="GD library version does not support target file format."; break; }
				case self::ERROR_GDLIB_NOT_FOUND : 				{ $strError="GD library is not installed!"; 	break; }
				default: {}
			 }
		 }
		 
		 return ($strError);
	 }
	  
	  /**
	   * Do'ers
	   */
	   
	/*	This method resizes an image.
	 * 	Possible resize types are:
	 * -   RESIZE_TYPE_BOX - the image will be scalled so that it will fit
	 *     in a box with the given width and height (both width/height will be
	 *     smaller or equal to the required width/height) and then it will be
	 *     centered both horizontally and vertically. The blank area will be
	 *     filled with the color specified by the <b>bgcolor</b> argument. (the
	 *     blank area will be filled only if the image is not transparent!)
	 *
	 * -   RESIZE_TYPE_NOT_BOX - the image will be scalled so that it
	 *     <i>could</i> fit in a box with the given width and height but will
	 *     not be enclosed in a box with given width and height. The new width/
	 *     height will be both smaller or equal to the required width/height
	 *
	 * -   RESIZE_IMAGE_CROP_TOPLEFT - after the image has been scaled so that
	 *     one if its sides meets the required width/height and the other side
	 *     is not smaller than the required height/width, a region of required
	 *     width and height will be cropped from the top left corner of the
	 *     resulted image.
	 *
	 * -   RESIZE_IMAGE_CROP_CENTER - after the image has been scaled so that
	 *     one if its sides meets the required width/height and the other side
	 *     is not smaller than the required height/width, a region of required
	 *     width and height will be cropped from the center of the
	 *     resulted image.
	*/
	public function resize(
		$intWidth 	= 0,
		$intHeight	= 0,
		$intResizeType = self::RESIZE_TYPE_BOX,
		$strBgColor = 'FFFFFF'
	) {
		return ($this->objParent->resize(
			$intWidth, $intHeight, $intResizeType, $strBgColor							 
		));
	}
	
	/**
	 * This method returns the base64 format of the image
	 */
	 
	 public function base64EncodeImage($strPrefix = false)
	 {
		$strSourcePath = $this->objParent->target_path;
		$strReturn = false;
		if (file_exists($strSourcePath))
		{
			$strImageBinay = fread(fopen($strSourcePath, "r"), filesize($strSourcePath));
			$strReturn = ((bool) $strPrefix ? 'data:image/' . $this->getImageExtension() . ';base64,' : '') . base64_encode($strImageBinay);
		}
		
		return ($strReturn);
	 }
}