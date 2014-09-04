<?php
namespace Core\Hybernate\Products;
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
class Product extends \Core\Interfaces\HybernateInterface
{
   /**
    * Product description
    *
    * @var array <\Core\Hybernate\Products\Product_Description> Exclude fields see \Core\Interfaces\Base\ObjectBaseInterface
    */
    protected $_excludeFields = array(
		'description', 'images', 'mainimage', 'attributes', 
		'categories', 'groupedcategories', 'productmanuals',
		'wishlistaddurl', 'wishlistremoveurl'
	);

   /**
    * called after instantiation
    *
    * @param  array $instanceParams (Optional) Instance params
    * @return void
    */
    protected final function onGetInstance(array $instanceParams = array())
    {
        $mainImages = array();

        if ($this->getId() > 0) {
            // Set the description
            $this->setDescription(array());
            $productDescription = \Core\Hybernate\Products\Product_Description::getMultiInstance(array(
                'productId' => (int) $this->getId()
            ));

            foreach ($productDescription as $productDescription) {
                $this->addDescription($productDescription->getLang(), $productDescription);
            }

            // Set the Attributes
            $productAttributes = array('en' => array(), 'fr' => array());
            $attributes = \Core\Hybernate\Products\Product_Attribute::getMultiInstance(array(
                'productId' => (int) $this->getId()
            ));
			
            foreach ($attributes as $attribute) {
                $productAttributes[$attribute->getLang()][(int) $attribute->getIndex()] = $attribute;
            }
			ksort($productAttributes['en']);
			ksort($productAttributes['fr']);
			
            $this->setAttributes($productAttributes);

            // Set the images
            $this->setImages(\Core\Hybernate\Products\Product_Image::getMultiInstance(array(
                'productId' => (int) $this->getId()
            )));

            $mainImages = \Core\Hybernate\Products\Product_Image::getMultiInstance(array(
                'productId' => (int) $this->getId(),
                'main'        => 1
            ));

            // Set the Categories
            $this->setCategories(\Core\Hybernate\Products\Product_Category::getCategoriesByProduct($this, true));
			$this->setGroupedCategories(\Core\Hybernate\Products\Product_Category::groupCategories($this, true));
			
			// Set the Manuals
			$this->setProductManuals(\Core\Hybernate\Products\Product_Manual::getManualsByProduct($this, true));
			
			// Set the Wishlist URLS
			$this->setWishListAddUrl(\Core\King\Products\Product_Wishlist::getAddUrl((int) $this->getId()));
			$this->setWishListRemoveUrl(\Core\King\Products\Product_Wishlist::getRemoveUrl((int) $this->getId()));

        } else {
            $this->setDescription(array(
                'en' => \Core\Hybernate\Products\Product_Description::getInstance()->setLang('en'),
                'fr' => \Core\Hybernate\Products\Product_Description::getInstance()->setLang('fr')
            ));
        }

        $this->setMainImage(empty($mainImages) === false ?
            $mainImages[0] : (empty($this->_dataRegistry['images'][0]) === false ?
                $this->_dataRegistry['images'][0] : \Core\Hybernate\Products\Product_Image::getInstance()));
    }
	
  /**
    * Reloads the product object
    *
    * @return \Core\Hybernate\Products\Product
    */
    public final function reload()
    {
        $this->onGetInstance();

        return $this;
    }

   /**
    * Adds a view
    *
    * @return \Core\Hybernate\Products\Product
    */
    public final function addView()
    {
        $this->setViews(((int) $this->getViews()) +1)->save();

        return $this;
    }

  /**
    * Deletes all attributes
    *
    * @return \Core\Hybernate\Products\Product
    */
    public final function deleteAttributes()
    {
        $this->_dataAccessInterface->deleteRecord('product_attribute', array(
            'productId' => (int) $this->getId()
        ));

        return $this;
    }
	
   /**
    * Returns related products by category
    *
    * @param  integer | array 	$categoryId  The categoryId (or array of IDs) to search from
    * @param  array   			$options     (Optional) Limit of results to return
    * @param  boolean 			$returnArray (optional) Return data as \Core\Hybernate\Products\Product or array
    * @return array | \Core\Hybernate\Products\Product
    */	
	public final function getRelatedProductByCategory($categoryId, array $options = array())
    {
		$_queryOptions = array_merge(array(
			'limit' 			=> 4,
			'excludeProductId'	=> (int) $this->getId(),
			'excludeCategories' => array()
		), $options);
		
		return \Core\Database\Driver\Pdo::getInstance()->setFetchType(\PDO::FETCH_ASSOC)->getAll(
		 	'SELECT     	SQL_CACHE a.*,  '.
			'				c1.title as title_en, '.
			'				c1.description as desc_en, '.
			'				c2.title as title_fr, '.
			'				c2.description as desc_fr, '.
			'				IFNULL(GROUP_CONCAT(DISTINCT CONCAT(pi.id, ".", pi.imageExtension) SEPARATOR "|"), "0.jpg") as images, '.
			'				IFNULL(CONCAT(pi2.id, ".", pi2.imageExtension), IFNULL(CONCAT(pi.id, ".", pi.imageExtension),  '.
			'					IFNULL(CONCAT(MAX(pi.id), ".", pi.imageExtension), "0.jpg"))) as mainImage '.

			'FROM       	product a '.
			'INNER JOIN 	product_category_link b '.
			'ON        		b.productId = a.id '.
			'AND       		b.categoryId ' . 
			((true === is_array($categoryId) && false === empty($categoryId)) ? ('IN (' . implode(',', $categoryId) . ')') : ('= ' . (int) $categoryId)) . ' ' .
			(false === empty($_queryOptions['excludeCategories']) ? ' AND b.categoryId NOT IN (' . 
				(true === is_array($_queryOptions['excludeCategories']) ? implode(',', $_queryOptions['excludeCategories']) : 
					(int) $_queryOptions['excludeCategories']) . ') ' : '') . ' ' .
			
			'LEFT JOIN 		product_description c1 '.
			'ON        		c1.productId = a.id ' .
			'AND       		c1.lang = "en" '.
			
			'LEFT JOIN 		product_description c2 '.
			'ON        		c1.productId = a.id ' .
			'AND       		c1.lang = "fr" '.
			
			'LEFT JOIN 		product_image as pi '.
			'ON 		  	pi.productId = a.id  '.
			'AND       		pi.active = 1  '.
			'AND       		pi.id IS NOT NULL '.
			
			'LEFT JOIN 		product_image as pi2 '.
			'ON 			pi2.productId = a.id  '.
			'AND 			pi2.active=1  '.
			'AND 			pi2.`main` = 1  '.
			'AND 			pi2.id IS NOT NULL '.
			
			'WHERE     		b.productId NOT IN (' . (
				true === is_array($_queryOptions['excludeProductId']) ? 
					implode(',', $_queryOptions['excludeProductId']) : (int) $_queryOptions['excludeProductId']) . ') ' .
			'AND     		a.activeStatus = 1 ' .
			'GROUP BY  		a.id '.
			'ORDER BY  		a.views DESC, RAND() '.
			'LIMIT ' . (int) $_queryOptions['limit'] . '; '
		 , array());
	}
	
	
  /**
    * @depreciated
    * Returns product associated by the same category
    *
    * @param  array   $options     (Optional) Limit of results to return
    * @param  boolean $returnArray (optional) Return data as \Core\Hybernate\Products\Product or array
    * @return array | \Core\Hybernate\Products\Product
    */	
	public final function getRelatedProducts(array $options = array())
    {
		$categoryIds = array();
		$categories  = $this->getCategories();
		$options     = array_merge(array(
			'excludeProductId'	=> array(),
			'excludeCategories' => array()
		), $options);
		
		if (empty($categories) === false) {
			foreach ($this->getCategories() as $category) {
				if (((true === is_array($options['excludeCategories'])) && 
					(false === in_array($category['subCatId'], $options['excludeCategories']))) ||
					(true === empty($options['excludeCategories'])))  {
					$categoryIds[] = (int) $category['subCatId'];
				} else if ((int) $options['excludeCategories'] <> (int) $category['subCatId']) {
					$categoryIds[] = (int) $category['subCatId'];
				}
			}	
		}
		
		if (empty($options['excludeProductId']) === false) {
			if (true === is_array($options['excludeProductId']) 
				&& false === empty($options['excludeProductId'])) {
				
				$arrayExclude = array();
				foreach ($options['excludeProductId'] as $exclude) {
					$arrayExclude[]	= (int) $exclude['id'];
				}
				$arrayExclude[]	= (int) $this->getId();
				$options['excludeProductId'] = $arrayExclude;
						
			} else if ((int) $options['excludeProductId'] <> (int) $this->getId()) {
				$excludeId = (int) $options['excludeProductId'];
				$options['excludeProductId'] = array($options['excludeProductId'], (int) $this->getId());
			}
		}
		
		return $this->getRelatedProductByCategory($categoryIds, $options);
	}
	
	
   /**
    * Returns a product listings
    *
    * @param  array   $filter         (Optional) Filters to apply
    * @return void
    */
    public static final function getProductListings (array $filters = array())
    {
        $dataInterface               = \Core\Database\Driver\Pdo::getInstance();
        $Application                 = \Core\Application::getInstance();
        $bindings                    = array('lang' => 'en');
        $viewParams                  = array();
        $viewParams['columns']       = array('a.*',  'b.title', 'b.description');
        $viewParams['filter']        = array('a.id >' => '0');
        $viewParams['left_join']     = array(
            'product_description b' => 'ON b.productId = a.id AND b.lang = :lang AND b.id IS NOT NULL'
        );
        $viewParams['right_join']      = array();
        $viewParams['inner_join']      = array();
        $viewParams['group_by']        = 'a.id';
        $viewParams['order_by']        = 'a.id DESC';

        // Merge defaults with requested
        $viewParams = array_merge($viewParams, $filters);

        // Images
        $viewParams['columns'][] = 'IFNULL(GROUP_CONCAT(DISTINCT CONCAT(pi.id, ".", pi.imageExtension) SEPARATOR "|"), "0.jpg") as images';
        $viewParams['left_join']['product_image as pi'] = 'ON pi.productId = a.id AND pi.active=1 AND pi.id IS NOT NULL';


        $viewParams['columns'][] = 'IFNULL(CONCAT(pi2.id, ".", pi2.imageExtension), IFNULL(CONCAT(pi.id, ".", pi.imageExtension), "0.jpg")) as mainImage';
        $viewParams['left_join']['product_image as pi2'] = 'ON pi2.productId = a.id AND pi2.active=1 AND pi2.`main` = 1 AND pi2.id IS NOT NULL';

        // Filters
        $whereClaus = null;
        if (empty($viewParams['filter']) === false) {
            foreach ($viewParams['filter'] as $filter => $filterKey) {
                $bindKeyParamName = 'param_' . mt_rand();
                $bindings[$bindKeyParamName] = $filterKey;
                $whereClaus .= 'AND ' . $filter . ' :' . $bindKeyParamName;
            }
        }

        // Build the query
        $pdoListing  = 'SELECT ' . implode(', ', $viewParams['columns']) . ' '
                     . ' FROM product a '
                     // Add inner join
                     . implode(' ', array_map(function ($v, $k) { return sprintf(" INNER JOIN %s %s ", $k, $v); }, $viewParams['inner_join'], array_keys($viewParams['inner_join'])))
                     // Add left join
                     . implode(' ', array_map(function ($v, $k) { return sprintf(" LEFT JOIN %s %s ", $k, $v); }, $viewParams['left_join'], array_keys($viewParams['left_join'])))
                     // Add right join
                     . implode(' ', array_map(function ($v, $k) { return sprintf(" RIGHT JOIN %s %s ", $k, $v); }, $viewParams['right_join'], array_keys($viewParams['right_join'])))
                     // Add WHERE
                     . 'WHERE 1=1 ' . $whereClaus . ' '
                     // Group by
                     . 'GROUP BY ' . $viewParams['group_by'] . ' '
                     // Order by
                     . 'ORDER BY ' . $viewParams['order_by'];

        return $dataInterface->setFetchType(\PDO::FETCH_ASSOC)->getAll($pdoListing, $bindings);
    }
	
   /**
    * Returns a product URL
    *
    * @param  integer $productId  Product Id
    * @param  string  $title      Product title
    * @return string
    */
    public static final function getStaticProductUrl($productId, $title)
    {
		$baseProductUrl = \Core\Application::getInstance()->getConfigs()->get('Application.core.mvc.product_urlPath');
		$title 			= preg_replace('/[^A-Za-z0-9]/', '-', $title);
		$title 			= str_replace('--', '-', $title);
		$baseProductUrl = preg_replace(array('/:title:/', '/:productId:/'), array($title, $productId), $baseProductUrl);
		
		return str_replace('--', '-', $baseProductUrl);
	}

   /**
    * Returns a product main image URL
    *
    * @param  integer $productId  Product Id
    * @return string
    */
    public static final function getMainImageUrlFromId($productId)
    {
		$mainImage     = null;
		$mainImageData = \Core\Database\Driver\Pdo::getInstance()->setFetchType(\PDO::FETCH_ASSOC)->getAll(
			'SELECT     	IFNULL(CONCAT(pi2.id, ".", pi2.imageExtension), IFNULL(CONCAT(pi.id, ".", pi.imageExtension),   '.
			'					IFNULL(CONCAT(MAX(pi.id), ".", pi.imageExtension), "0.jpg"))) as mainImage  '.

			'FROM       	product a  '.
			
			'LEFT JOIN 		product_image as pi  '.
			'ON 		  	pi.productId = a.id   '.
			'AND       		pi.active = 1   '.
			'AND       		pi.id IS NOT NULL  '.
			
			'LEFT JOIN 		product_image as pi2  '.
			'ON 			pi2.productId = a.id   '.
			'AND 			pi2.active=1   '.
			'AND 			pi2.`main` = 1   '.
			'AND 			pi2.id IS NOT NULL  '.

			'WHERE     		a.id = :producId '.
			'GROUP BY  		a.id; '
		, array('producId' => (int) $productId));
		
		if (empty($mainImageData) === false) {
			$mainImageData = array_shift($mainImageData);
			$mainImage	   = $mainImageData['mainImage'];
		}
		
		return $mainImage;
	}	
	
  /**
    * Returns true if a product is already in the wishlist
    *
    * @return boolean
    */
    public final function isInWishList()
    {
		return ((bool) \Core\King\Products\Product_Wishlist::getInstance()->get((int) $this->getId()));
    }

    /**
     * Method used to search by category
     *
     * @param  integer | array $categoryId The category id
     * @return array | \Core\Util\Pagination\Pagination
     */
    public static final function searchByCategoryId($categoryId = null)
    {
		$objPagination = \Core\Util\Pagination\Pagination::getInstance();
		$configs       = \Core\Application::getInstance()->getConfigs();
		$lang          = \Core\Application::getInstance()->translate('en', 'fr');
		$countStmt     = 'SELECT SQL_CACHE COUNT(DISTINCT a.id) as recordCount ';
		$baseStmt      = 'FROM       		product a '.
						 'INNER JOIN 		product_category_link b '.
						 'ON        		b.productId = a.id '.
						 'AND       		b.categoryId ' . 
						 ((true === is_array($categoryId) && false === empty($categoryId)) ? ('IN (' . implode(',', $categoryId) . ')') : ('= ' . (int) $categoryId)) . ' ' .
						
						 'INNER JOIN     	product_description d  '.
						 'ON             	d.productId = a.id   '.
						 'AND            	d.lang = "' . $lang .  '"   '.
						
						 'LEFT JOIN 		product_description c1 '.
						 'ON        		c1.productId = a.id ' .
						 'AND       		c1.lang = "en" '.
						
						 'LEFT JOIN 		product_description c2 '.
						 'ON        		c1.productId = a.id ' .
						 'AND       		c1.lang = "fr" '.
						
						 'LEFT JOIN 		product_image as pi '.
						 'ON 		  		pi.productId = a.id  '.
						 'AND       		pi.active = 1  '.
						 'AND       		pi.id IS NOT NULL '.
						
						 'LEFT JOIN 		product_image as pi2 '.
						 'ON 				pi2.productId = a.id  '.
						 'AND 				pi2.active=1  '.
						 'AND 				pi2.`main` = 1  '.
						 'AND 				pi2.id IS NOT NULL '.
						
						 'WHERE     		a.activeStatus = 1 ' .
						 'GROUP BY  		a.id ';
		
		$preparedStmt  = 'SELECT     	SQL_CACHE  a.*,  '.
						 '				d.title as title, ' .
                    	 '              d.description as description, ' .
						 '				IFNULL(GROUP_CONCAT(DISTINCT CONCAT(pi.id, ".", pi.imageExtension) SEPARATOR "|"), "0.jpg") as images, '.
						 '				IFNULL(CONCAT(pi2.id, ".", pi2.imageExtension), IFNULL(CONCAT(pi.id, ".", pi.imageExtension),  '.
						 '					IFNULL(CONCAT(MAX(pi.id), ".", pi.imageExtension), "0.jpg"))) as mainImage ';

		$searchQuery = $preparedStmt . $baseStmt;
		$countQuery  = $countStmt . $baseStmt;

		// Begin pagination
		$objPagination = \Core\Util\Pagination\Pagination::getInstance();
		$objPagination->setItemsTotal((int) \Core\Database\Driver\Pdo::getInstance()
					  ->setFetchType(\PDO::FETCH_ASSOC)->getCell($countQuery, array('lang' => $lang)));
		
		$objPagination->setDefaultItemsPerPage(10);
		$objPagination->setIsFriendlyUrl(false);
		$objPagination->setBaseUrl($configs->get('Application.core.mvc.base_server_path'));
		$objPagination->setPaginationVariables();
		$objPagination->setPageData(\Core\Database\Driver\Pdo::getInstance()->setFetchType(\PDO::FETCH_ASSOC)
					  ->getAll($searchQuery . ' LIMIT ' . $objPagination->getSqlLimit(), array('lang' => $lang)));
					 
		return $objPagination;			 
	}
	
	/**
     * Method used to search for products
     *
     * @param  string  $term 		 The search term
     * @param  boolean $blnHasManual Return products that have manuals
     * @return array | \Core\Util\Pagination\Pagination
     */
    public static final function search($term = null, $blnHasManual = false)
    {
		$objPagination = \Core\Util\Pagination\Pagination::getInstance();
		$configs       = \Core\Application::getInstance()->getConfigs();
		$results       = array();
		$term          = (empty($term) === false ? implode('* ', explode(' ', preg_replace('/[^\da-z\s\.\-\n\_]/i', '', $term))) . '*' : $term);
		$lang          = \Core\Application::getInstance()->translate('en', 'fr');
        $singleProduct = \Core\Hybernate\Products\Product::getInstance(array(
            'urlProductKey' => preg_replace('/[^\da-z]/i', '', $term)
        ));
		
        if ($singleProduct->getId() > 0) {
            //if (false === headers_sent()) {
                header ('Location: ' . \Core\Hybernate\Products\Product::getStaticProductUrl(
                    $singleProduct->getId(), $singleProduct->getDescription($lang)->getTitle()));
            /*} else {
                $results = $singleProduct->get();
            }*/
        }

        if (empty($results) === true) {
			$filter       = ' 1=1 ';
			$baseStmt     = 'FROM           product a  '.

							'INNER JOIN     product_description b  '.
							'ON             b.productId = a.id   '.
							'AND            b.lang = "' . $lang .  '"   '.
		
							'LEFT JOIN      product_image as pi  '.
							'ON             pi.productId = a.id   '.
							'AND            pi.active = 1   '.
							'AND            pi.id IS NOT NULL  '.
		
							'LEFT JOIN      product_manual as c1  '.
							'ON             c1.productId = a.id   '.
							'AND            c1.activeStatus = 1   '.
							'AND            c1.manualTypeId = 1   '.
							'AND            c1.lang = "' . $lang . '" '.
							'AND            c1.id IS NOT NULL  '.
							
							'LEFT JOIN      product_manual as c2  '.
							'ON             c2.productId = a.id   '.
							'AND            c2.activeStatus = 1   '.
							'AND            c2.manualTypeId = 2   '.
							'AND            c2.lang = "' . $lang . '" '.
							'AND            c2.id IS NOT NULL  '.
		
							'LEFT JOIN      product_image as pi2  '.
							'ON             pi2.productId = a.id   '.
							'AND            pi2.active=1   '.
							'AND            pi2.`main` = 1   '.
							'AND            pi2.id IS NOT NULL  '.
							'WHERE          %s ' .
							'AND            b.lang = :lang ' . 
							(true === $blnHasManual ? 'AND (c1.productId IS NOT NULL OR c2.productId IS NOT NULL)' : '');
							
			$countStmt    = 'SELECT SQL_CACHE COUNT(DISTINCT a.id) as recordCount ';
			$preparedStmt = 'SELECT SQL_CACHE a.*, ' .
                    '            b.title as title, ' .
                    '            b.description as description, ' .
                    '            c1.webPath as instructionManualWebPath, ' .
                    '            c1.filePath as instructionManualFilePath, ' .
                    '            c2.webPath as serviceManualWebPath, ' .
                    '            c2.filePath as serviceManualFilePath, ' .
                    '            IFNULL(CONCAT(pi2.id, ".", pi2.imageExtension), IFNULL(CONCAT(pi.id, ".", pi.imageExtension),   '.
                    '                IFNULL(CONCAT(MAX(pi.id), ".", pi.imageExtension), "0.jpg"))) as mainImage, ' .
					'			 MATCH (b.searchTitle, b.searchText) AGAINST (\'' . $term . '\' IN BOOLEAN MODE) as score ';

                    
			
			if (empty($term) === false) {
				//$filter = ' (MATCH (b.searchTitle, b.searchText) AGAINST (\'' . $term . '\' IN BOOLEAN MODE)) ';
				$filter = ' ((MATCH (b.searchTitle, b.searchText) AGAINST (\'' . $term . '\' IN BOOLEAN MODE)) OR ';
				
						  
				foreach (explode(' ', preg_replace('/[\*]/', '', $term)) as $keyTerm) {
					$filter .= ' (b.description LIKE \'%' . $keyTerm . '%\') OR';
					$filter .= ' (b.title LIKE \'%' . $keyTerm . '%\') OR';
				}
				
				$filter = rtrim($filter, 'OR') . ')';
			}

			$searchQuery = sprintf($preparedStmt . $baseStmt . 'GROUP BY a.id ', $filter);
			$countQuery  = sprintf($countStmt . $baseStmt, $filter);


			// Begin pagination
			$objPagination = \Core\Util\Pagination\Pagination::getInstance();
			$objPagination->setItemsTotal((int) \Core\Database\Driver\Pdo::getInstance()
				          ->setFetchType(\PDO::FETCH_ASSOC)->getCell($countQuery, array('lang' => $lang)));
			
			$objPagination->setDefaultItemsPerPage(10);
			$objPagination->setIsFriendlyUrl(false);
			$objPagination->setBaseUrl($configs->get('Application.core.mvc.base_server_path'));
			$objPagination->setPaginationVariables();
			$objPagination->setPageData(\Core\Database\Driver\Pdo::getInstance()->setFetchType(\PDO::FETCH_ASSOC)
						 ->getAll($searchQuery . ' LIMIT ' . $objPagination->getSqlLimit(), array('lang' => $lang)));
        } 

        return $objPagination;
    }
}

