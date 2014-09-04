<?php 
namespace Core\Hybernate\Products;
/**
 * Products attribute used with Hybernate loader
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
class Product_Attribute extends \Core\Interfaces\HybernateInterface 
{
   /**
    * Returns distinct attributes
    *
    * @param  boolean $returnArray (optional) Return data as \Core\Hybernate\Products\Product_Category or array
    * @return array | \Core\Hybernate\Products\Product_Attribute
    */
	public static final function getDistinct($returnArray = true)
	{
		$Application = \Core\Application::getInstance();
		
		return (array(
			'en' => \Core\Hybernate\Products\Product_Attribute::getMultiInstance(array(
				'lang' => 'en'
			), $returnArray, array(
				'group_by' => 'a.name'
			)),
			
			'fr' => \Core\Hybernate\Products\Product_Attribute::getMultiInstance(array(
				'lang' => 'fr'
			), $returnArray, array(
				'group_by' => 'a.name'
			))
		));
	}
}