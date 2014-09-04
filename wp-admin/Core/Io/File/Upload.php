<?php
/**
 * File Upload Administration Class
 *
 * This class controls the IO File Upload scope
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
namespace Core\Io\File;

/**
 * File Upload Administration Class
 *
 * This class controls the IO File Upload scope
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
 
 /**
 	EXAMPLE USAGE:
 	$objFileUploader = \Core\Io\File\Upload::getInstance();
	$objFileUploader->setAllowedExtensions(array('gif', 'png', 'jpeg', 'jpg', 'bmp'));
	$objFileUploader->setUploadDirectory('/var/www/static/tmp');
	$objFileUploader->setUploadWebPath('/static/tmp');
	$objFileUploader->setUploadFormInputName('file_upload');
	$objFileUploader->setSizeLimit(10); // in MB
	if (false === $objFileUploader->processImageUpload()) {
		var_dump($objFileUploader->getErrors());	
	} else {
		var_dump($objFileUploader->get());
	}
 */	
class Upload
    extends \Core\Interfaces\Base\ObjectBaseInterface
{	
   /**
	 * Define class constants: Types of upload [XHR | Form]
	 * 
	 * @var String
	 */
	const Upload_File_Type_Xhr = 'xhrFileUploadType';
	
	/**
	 * Define class constants: Types of upload [XHR | Form]
	 * 
	 * @var String
	 */
	const Upload_File_Type_Form = 'formFileUploadType';
	
	/**
	 * Override event callback method used to set defaults
	 * 
	 * @access	protected, final
	 * @param	none
	 * @return	void
	 */
	public final function __construct()
	{
		$this->setErrors(array()); 
	}
	
	/**
	 * This method sets the file upload method
	 * 
	 * @see		[\Core\Io\File\Upload::Upload_File_Type_Xhr || \Core\Io\File\Upload::Upload_File_Type_Form]
	 * @access	protected, final
	 * @param	none
	 * @return	void
	 */	
	protected final function setUploadFileMethod()
	{
		/*
		switch (true)
		{
			case (
				((true  === isset($_GET[$this->getUploadFormInputName()])) || (true  === isset($_REQUEST[$this->getUploadFormInputName()]))) &&
				(false === isset($_FILES[$this->getUploadFormInputName()]))
			) : 
			{
				$this->setImageUploadMethodHandler(\Core\Io\File\Upload::Upload_File_Type_Xhr);
				break;	
			}
			
			case (true === isset($_FILES[$this->getUploadFormInputName()])) : 
			{
				$this->setImageUploadMethodHandler(\Core\Io\File\Upload::Upload_File_Type_Form);
				break;	
			}
		}
		*/
		
		$method = $this->getImageUploadMethodHandler();
		if (false === empty($method)) return;
		
		switch (true)
		{
			case (
				(true  === isset($_REQUEST[$this->getUploadFormInputName()])) &&
				(false === isset($_FILES[$this->getUploadFormInputName()]))
			) : 
			{
				$this->setImageUploadMethodHandler(\Core\Io\File\Upload::Upload_File_Type_Xhr);
				break;	
			}
			
			case (true === isset($_FILES[$this->getUploadFormInputName()])) : 
			{
				$this->setImageUploadMethodHandler(\Core\Io\File\Upload::Upload_File_Type_Form);
				break;	
			}
		}
	}

	/**
	 * This method returns the file name according to the upload type
	 * 
	 * @see		[\Core\Io\File\Upload::Upload_File_Type_Xhr || \Core\Io\File\Upload::Upload_File_Type_Form]
	 * @access	protected, final
	 * @param	none
	 * @return	String | false
	 */	
	protected final function getFileName()
	{
		$strFileName = false;
		
		switch ($this->getImageUploadMethodHandler())
		{
			case (\Core\Io\File\Upload::Upload_File_Type_Xhr) : 
			{
				$strFileName = (
					(true  === isset($_REQUEST[$this->getUploadFormInputName()])) &&
					(false === empty($_REQUEST[$this->getUploadFormInputName()]))
				) ? $_REQUEST[$this->getUploadFormInputName()] : false;
				
				break;	
			}
			
			case (\Core\Io\File\Upload::Upload_File_Type_Form) : 
			{
				$strFileName = (
					(true  === isset($_FILES[$this->getUploadFormInputName()]['name'])) &&
					(false === empty($_FILES[$this->getUploadFormInputName()]['name']))
				) ? $_FILES[$this->getUploadFormInputName()]['name'] : false;
				break;	
			}
		}
		
		return ($strFileName);
	}
	
	/**
	 * This method returns the file size according to the upload type
	 * 
	 * @see		[\Core\Io\File\Upload::Upload_File_Type_Xhr || \Core\Io\File\Upload::Upload_File_Type_Form]
	 * @access	protected, final
	 * @param	none
	 * @return	Integer | false
	 */	
	protected final function getFileSize()
	{
		$intFileSize = 0;
		
		switch ($this->getImageUploadMethodHandler())
		{
			case (\Core\Io\File\Upload::Upload_File_Type_Xhr) : 
			{
				if (false === isset($_SERVER["CONTENT_LENGTH"])) {
					$this->addErrors('Getting content length is not supported.');
				} else {
					$intFileSize = (int) $_SERVER["CONTENT_LENGTH"];
				}
				
				break;	
			}
			
			case (\Core\Io\File\Upload::Upload_File_Type_Form) : 
			{
				$intFileSize = (int) @$_FILES[$this->getUploadFormInputName()]['size'];
				break;	
			}
		}
		
		$this->setUploadFileSize($intFileSize);
		
		return $this->getUploadFileSize();
	}
	
	/**
	 * Resize Image
	 *
	 * Takes the source image and resizes it to the specified width & height or proportionally if crop is off.
	 * 
	 * @access 	protected final
	 * @param 	none
	 * @return 	Boolean
	 */
	protected final function resizeImageToScaleRatio()
	{
		$blnReturn 				= false;
		$strSourceUploadedImage	= $this->getUploadedFilePath();
		$strDestinationFile		= $this->getUploadedFilePath();
		$intResizeWidth			= (int) $this->getResizeWidth();
		$intResizeHeight		= (int) $this->getResizeHeight();
		$arrImageData 			= getimagesize($strSourceUploadedImage);
		$blnReturn				= (false === empty($arrImageData));
		
		if ($blnReturn) 
		{
			switch($arrImageData['mime'])
			{
				case 'image/gif':
					$strImageCreateFunction = 'imagecreatefromgif';
					$strImgExt = ".gif";
				break;
				case 'image/jpeg';
					$strImageCreateFunction = 'imagecreatefromjpeg';
					$strImgExt = ".jpg";
				break;
				case 'image/png':
					$strImageCreateFunction = 'imagecreatefrompng';
					$strImgExt = ".png";
				break;
			}
		
			$resOriginalImg 		= call_user_func($strImageCreateFunction, $strSourceUploadedImage);
			$intImgOldWidth 		= $arrImageData[0];
			$intImgOldHeight 		= $arrImageData[1];
			$intImgNewWidth 		= $intResizeWidth;
			$intImgNewHeight 		= $intResizeHeight;
			$intCurrentRatio 		= round($intImgOldWidth / $intImgOldHeight, 2);
			$intTargetRatio 		= round($intResizeWidth / $intResizeHeight, 2);
			$intTargetRatioAfter 	= round($intResizeHeight / $intResizeWidth, 2);
			$intImgSrcX = 0;
			$intImgSrcY = 0;
		
			/**
			 * Don't crop the image, just resize it proportionally
			 */
			if( $intImgOldWidth > $intImgOldHeight )
			{
				$intScaleRatio = (max($intImgOldWidth, $intImgOldHeight) / max($intResizeWidth, $intResizeHeight));
			}
			else
			{
				$intScaleRatio = (max($intImgOldWidth, $intImgOldHeight) / min($intResizeWidth, $intResizeHeight));
			}
	
			$intImgNewWidth 	= ($intImgOldWidth / $intScaleRatio);
			$intImgNewHeight 	= ($intImgOldHeight / $intScaleRatio);
			$objNewGeneratedImg = imagecreatetruecolor( $intImgNewWidth, $intImgNewHeight );
		
			/**
			 * Where all the real magic happens
			 */
			ImageSaveAlpha($objNewGeneratedImg, true);
			ImageAlphaBlending($objNewGeneratedImg, true);
			ImageFill($objNewGeneratedImg, 0, 0, ImageColorAllocate($objNewGeneratedImg, 255, 255, 255));
			$blnReturn &= imagecopyresampled($objNewGeneratedImg, $resOriginalImg, 0, 0, $intImgSrcX, $intImgSrcY, $intImgNewWidth, $intImgNewHeight, $intImgOldWidth, $intImgOldHeight);
		
			/**
			 * Save it as a JPG File with our $strDestinationFile param.
			 */
			$blnReturn &= imagejpeg($objNewGeneratedImg, $strDestinationFile, 100);
		
			/**
			 * Destroy the evidence and bail out!
			 */
			$blnReturn &= imagedestroy($objNewGeneratedImg);
			$blnReturn &= imagedestroy($resOriginalImg);
		}

		return ((bool) $blnReturn);
	} 
	
	/**
	 * This method writes the uploaded file to disk.
	 * 
	 * @see		[\Core\Io\File\Upload::Upload_File_Type_Xhr || \Core\Io\File\Upload::Upload_File_Type_Form]
	 * @access	protected, final
	 * @param	none
	 * @return	Boolean
	 */	
	protected final function save()
	{
		$blnComplete = false;
		$strFilePath = $this->getUploadedFileName();
		switch ($this->getImageUploadMethodHandler())
		{
			case (\Core\Io\File\Upload::Upload_File_Type_Xhr) : 
			{
				$objInputHandle  = fopen("php://input", "r");
				$objTempFile 	 = tmpfile();
				$intRealFileSize = stream_copy_to_stream($objInputHandle, $objTempFile);
				fclose($objInputHandle);
				if (false === ((bool) ($intRealFileSize <> $this->getFileSize())))
				{            
					$objTarget = fopen($strFilePath, "a+");        
					fseek($objTempFile, 0, SEEK_SET);
					$blnComplete = stream_copy_to_stream($objTempFile, $objTarget);
					fclose($objTarget);
					$blnComplete = true;
				}
				break;	
			}
			
			case (\Core\Io\File\Upload::Upload_File_Type_Form) : 
			{
				$blnComplete = ((bool) move_uploaded_file($_FILES[$this->getUploadFormInputName()]['tmp_name'], $strFilePath));
				break;	
			}
		}
		
		/*			
		if (true === ((bool) $blnComplete))
		{
			// Resize the image according to scale ration of frame
			$this->setResizeWidth((int) $this->getApplication()->getConfig()->getImageFrameWidth());
			$this->setResizeHeight((int) $this->getApplication()->getConfig()->getImageFrameHeight());
			$this->setUploadedFilePath($strFilePath);
			$blnComplete = $this->resizeImageToScaleRatio();
		}	
		*/
		
		if (true === ((bool) $blnComplete)) 
		{
			// Save the image dimensions
			list($intSrcImageWidth, $intSrcImageHeight) = getimagesize($strFilePath);
			$this->setUploadImageHeight($intSrcImageHeight);
			$this->setUploadImageWidth($intSrcImageWidth);
		}	
		
		
		return ((bool) $blnComplete);
	}
	
	/**
	 * This method checks if the php.ini settings upload limit is sufficiant for the current upload
	 * According to the settings defined for upload size limits.
	 * 
	 * @access	protected, final
	 * @param	none
	 * @return	Boolean
	 */	
	 protected final function checkServerSettings()
	 {        
		$intPostSize 	= $this->toBytes(ini_get('post_max_size'));
		$intUploadSize 	= $this->toBytes(ini_get('upload_max_filesize'));        
		$blnResult		= true;
		if (
			($intPostSize < ((int) $this->getSizeLimit())) ||
			($intUploadSize < ((int) $this->getSizeLimit()))
		) {
			$intRequiredSize = max(1, ((int) $this->getSizeLimit()) / 1024 / 1024) . 'M'; 
			$blnResult		 = false;
			$this->addErrors('increase post_max_size and upload_max_filesize to ' . $intRequiredSize);
		}
		
		return ($blnResult);
	}
	
	/**
	 * This method converts a string input to bytes
	 * 
	 * @access	protected, final
	 * @param 	String 	$strTargetString - The target string
	 * @return 	Integer The converted bytes
	 */	
	protected final function toBytes($strTargetString = NULL)
	{
		$strTargetString = trim($strTargetString);
		$chrLastInput 	 = strtolower(substr($strTargetString, strlen($strTargetString) - 1));
		$intReturnVal	 = intval($strTargetString);
		switch($chrLastInput) 
		{
			case 'g': { $intReturnVal *= 1024; }
			case 'm': { $intReturnVal *= 1024; }
			case 'k': { $intReturnVal *= 1024; }   
		}
		return ($intReturnVal);
	}

	/**
	 * Adds an error to the stack
	 * 
	 * @access	protected, final
	 * @param 	string $error  The error to add
	 * @param 	mixed  $return The value returned
	 * @return 	mixed
	 */	
	 protected final function onError ($error, $return = false)
	 {
		$this->addErrors($error);
		return $return;	 
	 }

	/**
	 * This method processes the image upload
	 * 
	 * @access	public, final
	 * @param 	none
	 * @return 	Boolean
	 */	
	public final function processImageUpload()
	{
		// Set the file upload method
		$this->setUploadFileMethod();
		
		// Begin processing context validation
		$blnContinue  = $this->checkServerSettings();

		if (false === (bool) $blnContinue) return $blnContinue;
		$blnContinue &= (true === is_writable($this->getUploadDirectory())) || 
						($this->onError("Server error. Upload directory isn't writable.")); 
						
		//$blnContinue &= (true === is_writable(sys_get_temp_dir())) || 
		//				($this->addErrors("Server temp folder is not writable. [" . sys_get_temp_dir() . "]" ) & false); 		
		
		if (false === (bool) $blnContinue) return $blnContinue;
		$blnContinue &= (true === ((bool) $this->getImageUploadMethodHandler())) || 
						($this->onError("No files were uploaded.")); 
		
		if (false === (bool) $blnContinue) return $blnContinue;
		$blnContinue &= (true === ((bool) ($this->getFileSize() > 0))) || 
						($this->onError("File is empty.")); 				


		if (false === (bool) $blnContinue) return $blnContinue;
		$blnContinue &= (true === ((bool) ((int) $this->getFileSize() < ($this->getSizeLimit() * 1024)))) || 
						($this->onError(sprintf("File is too large: Max file size is %sMB - Current file size is %sMB", 
							$this->getSizeLimit(), ceil($this->getFileSize() / 1024)))); 
							
		
		
		if (true === ((bool) $blnContinue))
		{
			$arrPathInfo 	= pathinfo($this->getFileName());
			$strFileName	= md5(uniqid()) . md5(time()); 				//$arrPathInfo['filename'];
			$strFileExt		= @strtolower($arrPathInfo['extension']);	// hide notices if extension is empty
			if (
				($this->getAllowedExtensions()) &&
				(false === in_array(strtolower($strFileExt), $this->getAllowedExtensions()))
			) {
				$strAllowedExts = implode(', ', $this->getAllowedExtensions());
				return $this->onError("File has an invalid extension, it should be one of " . $strAllowedExts . ".");
			}

			if (true === ((bool) $blnContinue))
			{
				$strFileExt = trim($strFileExt);
				$strNewFileExt = (true === empty($strFileExt)) ? '.jpg' : '.' . $strFileExt;	  
				$this->setFileExtention($strFileExt);
				$this->setUploadedFileName($this->getUploadDirectory() . '/' . $strFileName . $strNewFileExt);  
				$this->setUploadedFileWebPath($this->getUploadWebPath() . '/' . $strFileName . $strNewFileExt);
				$this->setUploadedFilePath($this->getUploadDirectory() . DIRECTORY_SEPARATOR . $strFileName . $strNewFileExt);
				
				// Save the uploaded file
				$blnContinue &= (true === ((bool) $this->save())) || 
								($this->onError("Could not save uploaded file. The upload was cancelled, or server error encountered."));
			}
		}	
		
		return ($blnContinue);
	}
}