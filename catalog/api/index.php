<?php
require_once '../../wp-admin/Core/Application.php';

$allowedCalls = array(
	'Core\King\Products\Product_Wishlist::remove',
	'Core\King\Products\Product_Wishlist::add',
	'Core\Hybernate\ServiceCenters\Service_Center::search'
);

if (empty($_GET['path']) === true) exit;
preg_match('/(?P<mask>.*[^\/])/', $_GET['path'], $matched);
if (empty($matched['mask']) === true) die ('403 Forbidden');

\Core\Application::bootstrapResource('\Core\Crypt\AesCrypt');
$aesCrypto = \Core\Crypt\AesCrypt::getInstance();
$data      = @unserialize($aesCrypto->decrypt(base64_decode($matched['mask'])));

if (true === empty($data) || false === is_array($data)) {
	die ('403 Forbidden');	
}

$apiImplicitCall = $data['class'] . '::' . $data['method'];

if (false === in_array($apiImplicitCall, $allowedCalls)) {
	die ('403 Forbidden');	
}

\Core\Application::bootstrapResource('\\' . $data['class']);
$targetObject = call_user_func_array(array($data['class'], 'getInstance'), array());
if (false === headers_sent()) {
	header('Content-Type: application/json');	
}

$response = array(
	'success' 	=> call_user_func_array(array($targetObject, $data['method']), $data['params']), 
	'action' 	=> $data['method']
);

if (strcmp($data['class'], 'Core\King\Products\Product_Wishlist') === 0 && empty($data['params']['id']) === false) { 
	$wishList = \Core\King\Products\Product_Wishlist::getInstance();
	$response['rmvUrl']   = $wishList->getRemoveUrl((int) $data['params']['id']);
	$response['addUrl']   = $wishList->getAddUrl((int) $data['params']['id']);
	$response['isInList'] = (bool) $wishList->get((int) $data['params']['id']);
} else if (strcmp($data['class'], 'Core\Hybernate\ServiceCenters\Service_Center') === 0) {
	$resultsOutput			= sprintf(\Core\Application::translate('Sorry, no results found for %s, Try a new search or zooming out of the map to expand your search', 
										'Désolés, aucun résultat pour %s, essayer une nouvelle recherche ou élargir la carte pour aggrandire votre recherche'), $_GET['location']);
	$serviceCenters 		= $response['success'];
	$response['success']	= (false === empty($serviceCenters));
	$response['results']	= '<ul id="results" class="listings-container list-unstyled clearfix">%s</ul>';
	
	if (true === $response['success']) {
		$resultsOutput = '';
		foreach ($serviceCenters as $serviceCenter) {
			$resultsOutput .= '<li class="search-result">
                    <div data-lat="' . $serviceCenter['lat'] . '"
                           data-lng="' . $serviceCenter['lng'] . '"
                           data-name="' . $serviceCenter['name'] . '(' . $serviceCenter['serviceType'] . ')"
                           data-url=""
                           data-id="' . $serviceCenter['id'] . '" 
                           class="listing">
                      		<span class="icon-location"></span>
                            <p class="h3">' . $serviceCenter['name'] . '</p>
                            <p>' . $serviceCenter['address'] . (empty($serviceCenter['distance_from_centerpoint']) === false ? 
								'(apprx. ' . number_format($serviceCenter['distance_from_centerpoint'], 0) . ' km away)' : '') . '</p>' .
							(empty($serviceCenter['tel']) === false ? '<p>Tel: ' . $serviceCenter['tel'] . '</p>': '') . 
							(empty($serviceCenter['cell']) === false ? '<p>Cell: ' . $serviceCenter['cell'] . '</p>' : '') . 
							(empty($serviceCenter['fax']) === false ? '<p>Fax: ' . $serviceCenter['fax'] . '</p>' : '') . 
							(empty($serviceCenter['email']) === false ? '<a href="mailto:' . $serviceCenter['email'] . '">' . $serviceCenter['email'] . '</a>' : '') . 
                    '</div>
                  </li>';
		}
	}
	
	$centerPoint 					   = $targetObject->getCenterPoint();
	$response['results']               = sprintf($response['results'], $resultsOutput);
	$response['visible_results_count'] = count($serviceCenters);
	$response['center_lat']            = $centerPoint['lat'];
	$response['center_lng']            = $centerPoint['lng'];
	$response['page']                  = 1;
	$response['location']              = $_GET['location'];
}

echo json_encode($response);