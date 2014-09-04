<?php
/**
 * Index Controller
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

class ManageController
    extends \Core\Net\HttpRequest
{
   /**
    * Admin index action
    *
    * @return void
    */
   public final function indexAction(array $requestDispatchData)
   {
        $this->setView(false);
        $this->setLayout(false);
   }

   /**
    * Loads products in json format
    *
    * @return void
    */
    protected final function productAction(array $requestDispatchData)
    {
        $this->setLayout('blank.php');

        $product    = \Core\Hybernate\Products\Product::getInstance((int) $this->getRequestParam('id'));
        $modalTitle = ($product->getId() > 0) ? sprintf('Editing: [%s] - %s', $product->getProductKey(), $product->getDescription('en')->getTitle()) : 'New Product';
        $this->setViewData('product', $product);
        $this->setViewData('title', $modalTitle);
        $this->setViewData('formSaveUrl', $this->callback($this, 'save', array()));
        $this->setViewData('distinctAttributes', \Core\Hybernate\Products\Product_Attribute::getDistinct());
        $this->setViewData('parentCategories', \Core\Hybernate\Products\Product_Category::getMultiInstance(array('isParent' => 1), true));
        $this->setViewData('categoryTree', \Core\Hybernate\Products\Product_Category::getCategoryTree());
		$this->setViewData('manualTypes', \Core\Hybernate\Products\Product_Manual_Type::getMultiInstance(array(), true));
		$this->setViewData('allProductManuals', \Core\Hybernate\Products\Product_Manual::getManualsByProduct($product, false));
    }
	
   /**
    * Page designed to add a product
    *
    * @return void
    */
    protected final function manage_productAction(array $requestDispatchData)
    {
        $product    = \Core\Hybernate\Products\Product::getInstance((int) $this->getRequestParam('id'));
        $modalTitle = ($product->getId() > 0) ? sprintf('Editing: [%s] - %s', $product->getProductKey(), $product->getDescription('en')->getTitle()) : 'New Product';
        $this->setViewData('product', $product);
        $this->setViewData('title', $modalTitle);
        $this->setViewData('formSaveUrl', $this->callback($this, 'save', array()));
        $this->setViewData('distinctAttributes', \Core\Hybernate\Products\Product_Attribute::getDistinct());
        $this->setViewData('parentCategories', \Core\Hybernate\Products\Product_Category::getMultiInstance(array('isParent' => 1), true));
        $this->setViewData('categoryTree', \Core\Hybernate\Products\Product_Category::getCategoryTree());
		$this->setViewData('manualTypes', \Core\Hybernate\Products\Product_Manual_Type::getMultiInstance(array(), true));
		$this->setViewData('allProductManuals', \Core\Hybernate\Products\Product_Manual::getManualsByProduct($product, false));
    }
	
   /**
    * New product manual action
    *
    * @return void
    */
    protected final function new_manualAction(array $requestDispatchData)
    {
        $this->setLayout('blank.php');

        $product    = \Core\Hybernate\Products\Product::getInstance((int) $this->getRequestParam('id'));
        $this->setViewData('product', $product);
		$this->setViewData('manualTypes', \Core\Hybernate\Products\Product_Manual_Type::getMultiInstance(array(), true));
    }
	
  /**
    * Saves the product
    *
    * @return void
    */
    protected final function save(array $requestDispatchData)
    {
        $configs     = \Core\Application::getInstance()->getConfigs();
        $productData = $this->getRequestParam();
        $return      = array('error' => false, 'message' => false, 'errorField' => false, 'id' => 0);
        $required    = array(
            'productKey' => 'Please enter a valid product key.',
            'title_en'   => 'Please enter a english title.',
            'title_fr'   => 'Please enter a french title.',
            'desc_en'    => 'Please enter a english description.',
            'desc_fr'    => 'Please enter a french description.'
        );

        foreach ($required as $requestKey => $errorMessage) {
            $requestVal = $this->getRequestParam($requestKey);
            if (true === empty($requestVal)) {
                $return = array('error' => true, 'message' => $required[$requestKey], 'errorField' => $requestKey);
                break;
            }
        }

        // Validate the product key
        if (preg_match('/[^A-Za-z0-9-]/', $this->getRequestParam('productKey')) === 1) {
            $return = array('error' => true, 'message' => $required['productKey'] . ' - Only letters, numbers and dashes (-)', 'errorField' => 'productKey');
        }

        if (false === $return['error']) {
            // save product here
            $product = \Core\Hybernate\Products\Product::getInstance((int) $productData['productId']);

            // validate the new product's productKey
            $productKeyValidate = \Core\Hybernate\Products\Product::getInstance(array(
                'productKey' => $this->getRequestParam('productKey')
            ));

            if (($productKeyValidate->getid() > 0) && ($product->getId() <> $productKeyValidate->getid())) {
                $return = array('error' => true, 'message' => 'Product Key: [' . $this->getRequestParam('productKey') .
                    '] is already associated to a product.', 'errorField' => 'productKey');
            }
        }

        // Validate the product images
        if (false === $return['error']) {
            // save product here
            if ((false === ((bool) $product->getMainImage()->getId() > 0)) && (true === empty($productData['attachments']))) {
                $return = array('error' => true, 'message' => 'Please provide at lease one image.', 'errorField' => null);
            }
        }

        if (false === $return['error']) {
            if (false === $product->getDateCreated()) {
                $product->setDateCreated(date('Y-m-d H:is'));
            }

            $product->setActiveStatus((int) @$productData['activeStatus']);
            $product->setProductKey(strtoupper($productData['productKey']))->save();
            $product->setUrlProductKey(preg_replace('/[^a-zA-Z0-9]/', '', strtoupper($productData['productKey'])))->save();
            $product->getDescription('en')->setProductId((int) $product->getId());
            $product->getDescription('en')->setTitle(stripslashes($productData['title_en']));
	    $product->getDescription('en')->setSearchTitle(preg_replace('/[^\da-z\s\.\-\n]/i', '', strip_tags(stripslashes($productData['title_en']))));
            $product->getDescription('en')->setSearchText(preg_replace('/[^\da-z\s\.\-\n]/i', '', strip_tags(stripslashes($productData['desc_en']))));
            $product->getDescription('en')->setDescription(stripslashes($productData['desc_en']))->save();
            $product->getDescription('fr')->setProductId((int) $product->getId());
            $product->getDescription('fr')->setTitle(stripslashes($productData['title_fr']));
	    $product->getDescription('fr')->setSearchTitle(preg_replace('/[^\da-z\s\.\-\n]/i', '', strip_tags(stripslashes($productData['title_fr']))));
            $product->getDescription('fr')->setSearchText(preg_replace('/[^\da-z\s\.\-\n]/i', '', strip_tags(stripslashes($productData['desc_fr']))));
            $product->getDescription('fr')->setDescription(stripslashes($productData['desc_fr']))->save();

            /*
            $product->setActiveStatus((int) @$productData['activeStatus']);
            $product->setProductKey(strtoupper($productData['productKey']))->save();
            $product->setUrlProductKey(preg_replace('/[^a-zA-Z0-9]/', '', strtoupper($productData['productKey'])))->save();
            $product->getDescription('en')->setProductId((int) $product->getId());
            $product->getDescription('en')->setTitle(stripslashes($productData['title_en']));
            $product->getDescription('en')->setSearchTitle(strip_tags(stripslashes($productData['title_en'])));
            $product->getDescription('en')->setSearchText(strip_tags(stripslashes($productData['desc_en'])));
            $product->getDescription('en')->setDescription(stripslashes($productData['desc_en']))->save();
            $product->getDescription('fr')->setProductId((int) $product->getId());
            $product->getDescription('fr')->setTitle(stripslashes($productData['title_fr']));
            $product->getDescription('fr')->setSearchTitle(strip_tags(stripslashes($productData['title_fr'])));
            $product->getDescription('fr')->setSearchText(strip_tags(stripslashes($productData['desc_fr'])));
            $product->getDescription('fr')->setDescription(stripslashes($productData['desc_fr']))->save();
           */

/*
            $product->getDescription('en')->setProductId((int) $product->getId());
            $product->getDescription('en')->setTitle(stripslashes($productData['title_en']));
            $product->getDescription('en')->setDescription(stripslashes($productData['desc_en']))->save();
            $product->getDescription('fr')->setProductId((int) $product->getId());
            $product->getDescription('fr')->setTitle(stripslashes($productData['title_fr']));
            $product->getDescription('fr')->setDescription(stripslashes($productData['desc_fr']))->save();
*/
            // Create the images..
            if (false === empty($productData['attachments'])) {
                foreach($productData['attachments'] as $strFileName => $imgPath) {
                    $objItemImage = \Core\Hybernate\Products\Product_Image::createPosition0Image(
                        $configs->get('Application.server.document_root') . DIRECTORY_SEPARATOR . $imgPath,
                        (int) $product->getId());

                    if ($objItemImage->getId() > 0) {
                        \Core\Hybernate\Products\Product_Image::createItemImagePositions($objItemImage->getId());
                    }
                }
            }
			
			// Create the manuals..
			if (false === empty($productData['manuals'])) {
                foreach($productData['manuals'] as $manual) {
					if (false === \Core\Hybernate\Products\Product_Manual::createProductManual($product, $manual)) {
						$return['error'][] = sprintf('Product manual [%s] could not be saved.', $manual['name']);	
					}
                }
            }

            // Create the attributes:
            if (false === empty($productData['attributes'])) {
                $product->deleteAttributes();

                foreach ($productData['attributes'] as $lang => $productAttributes) {
                    foreach ($productAttributes as $index => $productAttribute) {
                        if (empty($productAttribute['name']) === false) {
                            $attribute = \Core\Hybernate\Products\Product_Attribute::getInstance();
                            $attribute->setProductId($product->getId());
                            $attribute->setLang($lang);
                            $attribute->setName($productAttribute['name']);
                            $attribute->setDescription($productAttribute['value']);
                            $attribute->setIndex($index);
                            $attribute->save();
                        }
                    }
                }
            }

            // Create the category links
			if (empty($productData['categories']) === false) {
				\Core\Hybernate\Products\Product_Category_Link::clearCategoryLinks($product);
				foreach ($productData['categories'] as $categoryId) {
					$categoryLink = \Core\Hybernate\Products\Product_Category_Link::getInstance();
					$categoryLink->setProductId((int) $product->getId());
					$categoryLink->setCategoryId((int) $categoryId);
					$categoryLink->save();
				}
			}
			
			// Reset the object..
			$product->reload();
			
            $return['message']       = 'Product saved successfully.';
            $return['id']            = (int) $product->getId();
            $return['attributeList'] = \Core\Hybernate\Products\Product_Attribute::getDistinct();
            $return['product']          = array(
                'id'                => (int) $product->getId(),
                'status'            => ((bool) $product->getActiveStatus() ? 'Active' : 'Disabled'),
                'mainImage'         => $product->getMainImage()->getImagePath(2),
                'views'             => $product->getViews(),
                'date_created'      => date('Y-m-d', strtotime($product->getDateCreated())),
                'desc_en'           => $product->getDescription('en')->getDescription(),
                'desc_fr'           => $product->getDescription('fr')->getDescription(),
                'title_en'          => $product->getDescription('en')->getTitle(),
                'title_fr'          => $product->getDescription('fr')->getTitle(),
                'productKey'        => $product->getProductKey()
            );

        }

        echo json_encode($return);
    }

   /**
    * Sets a product image to main
    *
    * @return void
    */
    protected final function setProductImageToMain(array $requestDispatchData)
    {
        $productImageId = (int) $this->getRequestParam('imageId');
        echo json_encode(array('success' => \Core\Hybernate\Products\Product_Image::setImageToMain($productImageId)));
    }
}
