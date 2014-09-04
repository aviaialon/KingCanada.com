<?php 
namespace Core\Hybernate\ServiceCenters;
/**
 * Service Center used with Hybernate loader
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
class Service_Center extends \Core\Interfaces\HybernateInterface 
{
   /**
    * Exclude save fields
    *
    * @var array <\Core\Hybernate\Products\Product_Description> Exclude fields see \Core\Interfaces\Base\ObjectBaseInterface
    */
    protected $_excludeFields = array('centerpoint');
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
	}

  /**
	* creates a search url
	*
	* @return string
	*/
	public static final function getSearchUrl()
	{	
		return \Core\Application::getInstance()->getConfigs()->get('Application.core.mvc.base_server_path') .
				'/catalog/api/' .
				\Core\Net\Router::callbackToken(__CLASS__, 'search', array());
	}

	/**
	 * This method returns the centermost point of an array of lat/lng
	 *
	 * @access public, static
	 * @params array $arrView - The array used to build the class view <see>SHARED_OBJECT::getObjectClassView()</see>
	 * @return array
	 */
	public static function calculateCenter(array $array_locations) 
	{
		$minlat = false;
		$minlng = false;
		$maxlat = false;
		$maxlng = false;
	
		foreach ($array_locations as $geolocation) {
			 if ($minlat === false) { $minlat = $geolocation['latitude']; } else { $minlat = ($geolocation['latitude'] < $minlat) ? $geolocation['latitude'] : $minlat; }
			 if ($maxlat === false) { $maxlat = $geolocation['latitude']; } else { $maxlat = ($geolocation['latitude'] > $maxlat) ? $geolocation['latitude'] : $maxlat; }
			 if ($minlng === false) { $minlng = $geolocation['longitude']; } else { $minlng = ($geolocation['longitude'] < $minlng) ? $geolocation['longitude'] : $minlng; }
			 if ($maxlng === false) { $maxlng = $geolocation['longitude']; } else { $maxlng = ($geolocation['longitude'] > $maxlng) ? $geolocation['longitude'] : $maxlng; }
		}
	
		// Calculate the center
		$lat = $maxlat - (($maxlat - $minlat) / 2);
		$lng = $maxlng - (($maxlng - $minlng) / 2);
	
		return (array('lat' => $lat, 'lng' => $lng));
	}
	
  /**
	* Searches service center
	*
	* @required decimal $lat 		The search latitude center point
	* @required decimal $lng 		The search longitude center point
	* @required integer $categoryId (Optional) The associated category Id
	* @return array
	*/
	public final function search()
	{
		$requestDispatcher = \Core\Net\Router::getInstance()->parseRequestData();
		$categoryId 	   = (int)   $requestDispatcher->getRequestData('categoryId');
		$fltLatitude 	   = (float) $requestDispatcher->getRequestData('lat');
		$fltLongitude 	   = (float) $requestDispatcher->getRequestData('lng');
		$swLat			   = (float) $requestDispatcher->getRequestData('sw_lat');
		$swLng			   = (float) $requestDispatcher->getRequestData('sw_lng');
		$neLat			   = (float) $requestDispatcher->getRequestData('ne_lat');
		$neLng			   = (float) $requestDispatcher->getRequestData('ne_lng');
		
		if (empty($swLat) === false) {
			$arrCenterPoint = $this->calculateCenter(array(array(
				'latitude'  => $swLat,
				'longitude' => $neLat
			), array(
				'latitude'  => $neLat,
				'longitude' => $neLng
			)));
		} else {
			$arrCenterPoint = array(
				'lat' => $fltLatitude,
				'lng' => $fltLongitude
			);
		}
		
		$arrFilteredRad = array(
			'minLat' => $swLat,
			'minLon' => $swLng,
			'maxLat' => $neLat,
			'maxLon' => $neLng
		);
		
		$this->setCenterPoint($arrCenterPoint);
		$results = \Core\Database\Driver\Pdo::getInstance()->setFetchType(\PDO::FETCH_ASSOC)->getAll(
		 	'SELECT     	SQL_CACHE a.*,  ' .
			'				(((acos(sin((' . $arrCenterPoint['lat'] . ' * pi()/180)) * 
								sin((`a`.`lat` * pi() / 180))+cos((' . $fltLatitude . ' *pi()/180)) * 
								cos((`a`.`lat` *pi()/180)) * cos(((' . $fltLongitude . ' - `a`.`lng`) * 
								pi()/180))))*180/pi())*60*1.1515
							) AS distance_from_centerpoint ' .
			'FROM       	' . $this->_objectInterfaceType . ' a '.
			'INNER JOIN 	' . $this->_objectInterfaceType . '_category b '.
			'ON        		b.serviceCenterId = a.id '.
			'AND       		b.categoryId = ' . (int) $categoryId  . ' ' .
			'WHERE     		a.active = 1 ' .
			'AND 			a.lat IS NOT NULL ' .
			'AND 			a.lng IS NOT NULL ' .
			'AND			(a.lat BETWEEN ' . $arrFilteredRad['minLat'] . ' AND ' . $arrFilteredRad['maxLat'] . ') ' .
			'AND			(a.lng BETWEEN ' . $arrFilteredRad['minLon'] . ' AND ' . $arrFilteredRad['maxLon'] . ') ' .
			'GROUP BY  		a.id ' .
			'ORDER BY  		distance_from_centerpoint ASC, a.id DESC '
		 , array());
		 		 
		 if (empty($results) === true) {
			$results = \Core\Database\Driver\Pdo::getInstance()->setFetchType(\PDO::FETCH_ASSOC)->getAll(
				'SELECT     	SQL_CACHE a.*,  ' .
				'				(((acos(sin((' . $arrCenterPoint['lat'] . ' * pi()/180)) * 
									sin((`a`.`lat` * pi() / 180))+cos((' . $arrCenterPoint['lat'] . ' *pi()/180)) * 
									cos((`a`.`lat` *pi()/180)) * cos(((' . $arrCenterPoint['lng'] . ' - `a`.`lng`) * 
									pi()/180))))*180/pi())*60*1.1515
								) AS distance_from_centerpoint ' .
				'FROM       	' . $this->_objectInterfaceType . ' a '.
				'INNER JOIN 	' . $this->_objectInterfaceType . '_category b '.
				'ON        		b.serviceCenterId = a.id '.
				'AND       		b.categoryId = ' . (int) $categoryId  . ' ' .
				'WHERE     		a.active = 1 ' .
				'AND 			a.lat IS NOT NULL ' .
				'AND 			a.lng IS NOT NULL ' .
				'GROUP BY  		a.id ' .
				'ORDER BY  		distance_from_centerpoint ASC, a.id DESC ' . 
				'LIMIT 25 '
			 , array());	 
		 }
		
		return $results;
	}
}