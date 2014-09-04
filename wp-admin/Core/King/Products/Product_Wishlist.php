<?php 
namespace Core\King\Products;
/**
 * Products management used with Hybernate loader
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
class Product_Wishlist
    extends \Core\Interfaces\Base\ObjectBaseInterface
{	
  /**
	* session key handler
	*
	* @var string
	*/
	private $_sessionHandler = '__wishlist_items__';
	
  /**
	* called after instantiation
	*
	* @param  array $instanceParams (Optional) Instance params
	* @return void
	*/
	protected final function onGetInstance()
	{
		\Core\Application::bootstrapResource('\Core\Crypt\AesCrypt');
		\Core\Application::bootstrapResource('\Core\Net\Router');
		\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Image_Position');
		\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product');
		
		if (false === $this->hasActiveSession()) {
			session_start();	
		}
	}
	
  /**
	* Checks if an active session
	*
	* @access static
	* @return boolean
	*/
	protected final function hasActiveSession()
	{
		$setting = 'session.use_trans_sid';
		$current = ini_get($setting);
		if (false === $current)
		{
			throw new \Exception(sprintf('Setting %s does not exists.', $setting));
		}
		
		$testate = "mix$current$current";
		$old 	 = @ini_set($setting, $testate);
		$peek 	 = @ini_set($setting, $current);
		$result  = ($peek === $current || $peek === false);
		
		return $result;
	}
	
  /**
	* returns all the items in wishlist
	*
	* @return array
	*/
	public final function getAll()
	{	
		return $_SESSION[$this->_sessionHandler];
	}

  /**
	* returns an item in wishlist
	*
	* @param  integer $productId The productId
	* @return array | false
	*/
	public final function get($productId)
	{	
		$returnItem = false;
		if (empty($_SESSION[$this->_sessionHandler][$productId]) === false) {
			$returnItem = $_SESSION[$this->_sessionHandler][$productId];
		}
		
		return $returnItem;
	}
	
  /**
	* adds a item in wishlist
	*
	* @param  integer $productId The productId
	* @param  string  $title	 The product title
	* @return boolean
	*/
	public final function add($productId)
	{	
		$product = \Core\Hybernate\Products\Product::getInstance($productId);
		$lang    = \Core\Application::translate('en', 'fr');
		$_SESSION[$this->_sessionHandler][$productId] = array(
			'id' 	  => $productId,
			'title'	  => $product->getDescription($lang)->getTitle(),
			'url'	  => \Core\Hybernate\Products\Product::getStaticProductUrl($productId, $product->getDescription($lang)->getTitle()),
			'img'     => \Core\Hybernate\Products\Product::getMainImageUrlFromId($productId)
		); 
		
		return true;
	}
	
  /**
	* adds a item in wishlist
	*
	* @param  integer $productId The productId
	* @param  string  $title	 The product title
	* @return boolean
	*/
	public final function remove($productId)
	{	
		if (empty($_SESSION[$this->_sessionHandler][$productId]) === false) {
			unset ($_SESSION[$this->_sessionHandler][$productId]);
		}
		
		return true;
	}	
	
  /**
	* clears the wishlist
	*
	* @return void
	*/
	public final function clear()
	{	
		$_SESSION[$this->_sessionHandler] = array();
	}	
	
  /**
	* creates a add to wishlist url
	*
	* @return string
	*/
	public static final function getAddUrl($productId)
	{
        return \Core\Application::getInstance()->getConfigs()->get('Application.core.mvc.base_server_path') .
				'/catalog/api/' .
				\Core\Net\Router::callbackToken(__CLASS__, 'add', array('id' => $productId));
	}	
	
  /**
	* creates a remove from wishlist url
	*
	* @return string
	*/
	public static final function getRemoveUrl($productId)
	{	
		return \Core\Application::getInstance()->getConfigs()->get('Application.core.mvc.base_server_path') .
				'/catalog/api/' .
				\Core\Net\Router::callbackToken(__CLASS__, 'remove', array('id' => $productId));
	}		
}