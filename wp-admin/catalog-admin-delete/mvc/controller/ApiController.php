<?php
/**
 * API Controller
 *
 * @package    Admin
 * @subpackage None
 * @file       Admin/ApiControler.php
 * @desc       Used interface for base objects implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */

namespace admin\mvc\controller;

/**
 * Base controller for admin section
 *
 * @package    Admin
 * @subpackage None
 * @file       Admin/IndexControler.php
 * @desc       Used interface for base objects implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */

class ApiController
    extends \Core\Net\HttpRequest
{

   /**
    * Pre dispatch - called once on every action
    *
    * @return void
    */
    protected final function preDispatch(array $requestDispatchData)
    {
        $this->setContentType(\Core\Net\Router::Content_Type_Json);
        $this->disableRender();
    }

   /**
    * Admin index action
    *
    * @return void
    */
   public final function indexAction(array $requestDispatchData)
   {
   }

   /**
    * Uploads a products image in json format
    *
    * @return void
    */
    protected final function upload_imageAction(array $requestDispatchData)
    {
        $Application     = \Core\Application::getInstance();
        $objFileUploader = \Core\Io\File\Upload::getInstance();
        $objFileUploader->setImageUploadMethodHandler(\Core\Io\File\Upload::Upload_File_Type_Form);
        $objFileUploader->setAllowedExtensions(array('gif', 'png', 'jpeg', 'jpg', 'bmp'));
        $objFileUploader->setUploadDirectory($Application->getConfigs()->get('Application.core.mvc.tmp_dir_path'));

        $objFileUploader->setUploadWebPath('/' . str_replace($Application->getConfigs()->get('Application.server.document_root'),
            '', $Application->getConfigs()->get('Application.core.mvc.tmp_dir_path')));

        $objFileUploader->setUploadFormInputName('file');
        $objFileUploader->setSizeLimit(9820); // in MB
        $errors = $objFileUploader->getErrors();

        echo (json_encode(array(
            'success' => (bool) $objFileUploader->processImageUpload(),
            'errors'  => $objFileUploader->getErrors(),
            'file'      => $objFileUploader->getUploadedFileWebPath(),
            'width'   => $objFileUploader->getUploadImageWidth(),
            'height'  => $objFileUploader->getUploadImageHeight(),
            'size'      => $objFileUploader->getUploadFileSize()
        )));
    }

   /**
    * Uploads a products manual in json format
    *
    * @return void
    */
    protected final function upload_manualAction(array $requestDispatchData)
    {
        $Application     = \Core\Application::getInstance();
        $objFileUploader = \Core\Io\File\Upload::getInstance();
        $objFileUploader->setImageUploadMethodHandler(\Core\Io\File\Upload::Upload_File_Type_Form);
        $objFileUploader->setAllowedExtensions(array('pdf', 'doc', 'docx', 'xls', 'xlsx'));
        $objFileUploader->setUploadDirectory($Application->getConfigs()->get('Application.core.mvc.tmp_dir_path'));

        $objFileUploader->setUploadWebPath('/' . str_replace($Application->getConfigs()->get('Application.server.document_root'),
            '', $Application->getConfigs()->get('Application.core.mvc.tmp_dir_path')));

        $objFileUploader->setUploadFormInputName('file');
        $objFileUploader->setSizeLimit(9820); // in MB
        $errors = $objFileUploader->getErrors();

        echo (json_encode(array(
            'success' => (bool) $objFileUploader->processImageUpload(),
            'errors'  => $objFileUploader->getErrors(),
            'file'    => $objFileUploader->getUploadedFileWebPath(),
            'fileExt' => $objFileUploader->getFileExtention(),
            'size'    => $objFileUploader->getUploadFileSize()
        )));
    }
	
  /**
    * Makes a manual primary
    *
    * @return void
    */
    protected final function make_primaryAction(array $requestDispatchData)
    {
        $manualId = (int) $this->getRequestParam('manualId');
		$manual   = \Core\Hybernate\Products\Product_Manual::getInstance($manualId);

        echo (json_encode(array(
            'success' => \Core\Hybernate\Products\Product_Manual::setPrimary($manual)
        )));
    }	
	
  /**
    * Deletes a manual
    *
    * @return void
    */
    protected final function delete_manualAction(array $requestDispatchData)
    {
        $manualId = (int) $this->getRequestParam('manualId');

        echo (json_encode(array(
            'success' => \Core\Hybernate\Products\Product_Manual::getInstance($manualId)->delete()
        )));
    }	

  /**
    * Sets a product image to main
    *
    * @return void
    */
    protected final function set_image_MainAction(array $requestDispatchData)
    {
        $productImageId = (int) $this->getRequestParam('imageId');
        echo json_encode(array('success' => \Core\Hybernate\Products\Product_Image::setImageToMain($productImageId)));
    }

   /**
    * Deletes a product image to main
    *
    * @return void
    */
    protected final function delete_imageAction(array $requestDispatchData)
    {
        \Core\Hybernate\Products\Product_Image::getInstance((int) $this->getRequestParam('imageId'))->delete();
        echo json_encode(array('success' => true));
    }

   /**
    * Bulk action on products
    *
    * @return void
    */
    protected final function bulkAction(array $requestDispatchData)
    {
        $action     = $this->getRequestParam('action');
        $productIds = $this->getRequestParam('pIds');

        if (empty($productIds) === true) {
            echo json_encode(array('success' => false, 'message' => 'Please select a product.'));
        }

        $productIds = array_map(function ($_id) use ($productIds) {
            return (int) $_id;
        }, $productIds);

        var_dump($productIds); die;

        switch ($action) {
            case 'enable' : {

                break;
            }

            case 'disable' : {

                break;
            }
        }
    }
}
