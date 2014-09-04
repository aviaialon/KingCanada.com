<?php
namespace Core\Hybernate\Products;
/**
 * Products category link used with Hybernate loader
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
class Product_Category_Link extends \Core\Interfaces\HybernateInterface
{
    /**
     * This method will clear all the category links by product
     *
     * @param  \Core\Hybernate\Products\Product $product The product
     * @return void
     */
     public static final function clearCategoryLinks(\Core\Hybernate\Products\Product $product)
     {
         if ($product->getId() > 0) {
             $product->_dataAccessInterface->execute('
                     DELETE FROM product_category_link
                     WHERE  productId = :productId
                 ', array('productId' => (int) $product->getId())
             );
         }
     }
}
