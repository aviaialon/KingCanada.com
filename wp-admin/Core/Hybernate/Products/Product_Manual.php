<?php 
namespace Core\Hybernate\Products;
/**
 * Products manual management used with Hybernate loader
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
class Product_Manual extends \Core\Interfaces\HybernateInterface 
{
	/**
     * This method returns the manuals associated to a product
     *
     * @param  \Core\Hybernate\Products\Product $product       The product
     * @param  boolean                          $getOnlyActive (optional) Return only active manuals
     * @return array
     */
     public static final function getManualsByProduct(\Core\Hybernate\Products\Product $product, $getOnlyActive = true)
     {
		 $productManuals  = array();
		 $filters 		  = array('productId' => $product->getId());
		 
		 // We put this if here because if $getOnlyActive === false, we want to return ALL files (active and disabled)
		 if (true === $getOnlyActive) {
		 	$filters['activeStatus'] = $getOnlyActive;
		 }
		 
		 foreach (\Core\Hybernate\Products\Product_Manual_Type::getMultiInstance(array(), true) as $productManualType) {
			 foreach (array('en', 'fr') as $lang) {
				$productManuals[$lang][$productManualType['id']] = array(
					'manualTypeId'  => $productManualType['id'],
					'name' 			=> $productManualType['name_' . $lang]
				);	 
			 }
		 }
		 
		 foreach (\Core\Hybernate\Products\Product_Manual::getMultiInstance($filters, true) as $productManual) {
			 $productManuals[$productManual['lang']][$productManual['manualTypeId']]['manuals'][] = $productManual;
		 }
		 
		 return $productManuals;
     }
	 
	/**
     * This method sets a product manual as the primary manual
     *
     * @param  \Core\Hybernate\Products\Product_Manual $manual The product manual
     * @return boolean
     */
     public static final function setPrimary(\Core\Hybernate\Products\Product_Manual $manual)
     { 
	 	$product = \Core\Hybernate\Products\Product::getInstance((int) $manual->getproductId());
		
		if ($product->getId() > 0) {
			foreach (\Core\Hybernate\Products\Product_Manual::getMultiInstance(array(
				'productId' 	=> (int) $product->getId(),
				'lang'			=> $manual->getLang(),
				'manualTypeId'  => (int) $manual->getManualTypeId()
			)) as $manualNonActive) {
				$manualNonActive->setActiveStatus(0);
				$manualNonActive->save();	
			}		
		}
		
		$manual->setActiveStatus(1);
		return $manual->save();	
	 }
	 
	/**
     * This method creates a manual for a product
     *
     * @param  \Core\Hybernate\Products\Product $product    The product
     * @param  array                            $manual     The manual data
     * @return boolean
     */
     public static final function createProductManual(\Core\Hybernate\Products\Product $product, array $manual)
     {
		$configs 	= \Core\Application::getInstance()->getConfigs();
		$fileName 	= \pathinfo($manual['manual'], PATHINFO_FILENAME);
		$fileExt  	= \pathinfo($manual['manual'], PATHINFO_EXTENSION);
		
		$serverPath = preg_replace('/(\/[^\/.]+\/[\.]{2}\/)/', '/',
									$configs->get('Application.server.document_root') . 
					  				$configs->get('Application.core.mvc.product_manualPath') . DIRECTORY_SEPARATOR . $fileName . '.' . $fileExt);
		$webPath    = str_replace($configs->get('Application.server.document_root'), '/', 
								  $configs->get('Application.core.mvc.product_manualPath') . DIRECTORY_SEPARATOR . $fileName . '.' . $fileExt);
		$uploadPath = str_replace('//', '/', $configs->get('Application.server.document_root') . DIRECTORY_SEPARATOR . $manual['manual']);						  
		$success    = @copy($uploadPath, $serverPath);
					
		if ($success === true) {
			$productManual = \Core\Hybernate\Products\Product_Manual::getInstance();
			$productManual->setProductId((int) $product->getId());
			$productManual->setManualTypeId((int) $manual['type']);
			$productManual->setFilePath($serverPath);
			$productManual->setWebPath(preg_replace('/(\/[^\/.]+\/[\.]{2}\/)/', '/', $webPath));
			$productManual->setFileExt($fileExt);
			$productManual->setActiveStatus((int) $manual['primary']);
			$productManual->setLang($manual['lang']);
			$productManual->setFileName($fileName);
			$productManual->setName(stripslashes($manual['name']));
			$productManual->setDescription(stripslashes($manual['desc']));
			$productManual->setSize($manual['size']);
			$productManual->save();		
			
			
			if ((int) $manual['primary'] === 1) {
				\Core\Hybernate\Products\Product_Manual::setPrimary($productManual);
			}
		} 
		
		return $success;
    }
}