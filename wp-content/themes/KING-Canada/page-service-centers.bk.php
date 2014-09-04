<?php
/*
 Template Name: Service Centers
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/

\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Category_Parent');
\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Category');
\Core\Application::bootstrapResource('\Core\Debug\Dump');
$categoryTree  = array_reverse(\Core\Hybernate\Products\Product_Category::getMultiInstance(array('isParent' => 1), true));
$bootstrapData = array (
  'filters' => NULL,
  'pagination_footer' => '
            <div class="results-footer">
              <div class="page-divider"> </div>
              <div class="pagination-buttons-container">
                <div class="results_count">
                  <h4> 1 &ndash; 0 of 0 Listings </h4>
                </div>
                <div class="pagination">
                    <ul class="list-unstyled"></ul>
                </div>
              </div>
              <div class="breadcrumbs" itemprop="breadcrumb">
                  
               </div>
            </div>
        ',
  'visible_results_count' => 0,
  'results_count_string' => '0 Rentals &middot; Montreal, QC, Canada',
  'center_lat' => 45.5601451,
  'center_lng' => -73.71208315,
  'meta_description' => '0 Listings in Montreal, QC, Canada',
  'pagination_mode' => 'classic',
  'page' => 1,
  'location' => 
  array (
    'location' => 'Montreal, QC, Canada',
  ),
  'geo' => 
  array (
  ),
);
?>

<?php get_header(); ?>


                        <div id="main" class="m-all cf" role="main">

<h1>Service Centers</h1>


<p class="h3">Select a category</p>









<?php /*---------------------------------------- BEGIN TEST ----------------------------------------*/ ?>
<style>
    .dealerLocator ul {overflow: auto}
</style>
<div class="dealerLocator tabs">
	<div class="filters">
		<?php $isFirst = true; ?>
        <?php foreach ($categoryTree as $categoryId => $category) { ?>
            <div class="tab">
                <input type="radio" id="tab-service-center-<?php echo $category['id']; ?>" name="categoryId" class="category-id" 
                    value="<?php echo $category['id']; ?>" <?php echo (true === $isFirst) ? 'checked' : '';?>>
                <label for="tab-service-center-<?php echo $category['id']; ?>" class="categorySelector">
					<?php echo \Core\Application::translate($category['name_en'], $category['name_fr']); ?></label>
            </div>
        <?php $isFirst = false; ?>
        <?php } ?>
    </div>    
    <div class="map-search" data-bootstrap-data="<?php echo htmlentities(str_replace(array('\r', '\t', '\n'), '', json_encode($bootstrapData))); ?>">
        
        <div class="tabcontent outer-listings-container ___sidebar">
            <div class="search-results">
                <ul class="location_holder">
                    <li class="location-search">
                    	<input type="hidden" name="lat" id="lat" value="" />
                    	<input type="hidden" name="lng" id="lng" value="" />
                        <input type="text" class="field map_filter_location" placeholder="zip code" name="location" value="" id="map_filter_location" autocomplete="off" />
                        <input type="submit" data-bind="#map_filter_location" id="dealersubmit" class="__location" value="Search">
                        <div style="clear:both"></div>
                    </li>
                </ul>
                <div class="outer-listings-container">
                    <ul class="d-2of7 listings-container"></ul>
                </div>
            </div>
            <div class="maparea d-5of7">

                <div class="map">
                    <div class="map-canvas"></div>
                    <div class="map-refresh-controls">
                        <a class="map-manual-refresh btn btn-primary hide">Redo Search Here</a>
                        <div class="panel map-auto-refresh hide">
                            <label class="checkbox">
                                <input class="map-auto-refresh-checkbox" type="checkbox" checked="checked">Search when I move the map
                            </label>
                        </div>
                    </div>
                </div>

            </div>
            
            
        </div>
    </div>

</div>


<!--<div class="dealerLocator tabs">

    <div class="tab">
        <input type="radio" id="tab-2" name="tab-group-1">
        <label for="tab-2">Compressors and air tools</label>

        <div class="map-search" data-bootstrap-data="<?php echo htmlentities(str_replace(array('\r', '\t', '\n'), '', json_encode($bootstrapData))); ?>">
        	
            
            <div class="tabcontent outer-listings-container ___sidebar">
				<div class="search-results">
                	<ul class="location_holder">
                    	<li class="location-search">
                            <input type="text" class="field" placeholder="zip code" name="location" value="" id="map_filter_location" autocomplete="off" />
                            <input type="submit" data-bind="#map_filter_location" id="dealersubmit" class="__location" value="Search">
                            <div style="clear:both"></div>
                        </li>
                    </ul>
                	<div class="outer-listings-container">
            			<ul class="d-2of7 listings-container"></ul>
                	</div>
    			</div>
                <div class="maparea d-5of7">

                    <div class="map">
                        <div class="map-canvas"></div>
                        <div class="map-refresh-controls">
                            <a class="map-manual-refresh btn btn-primary hide">Redo Search Here</a>
                            <div class="panel map-auto-refresh hide">
                                <label class="checkbox">
                                    <input class="map-auto-refresh-checkbox" type="checkbox" checked="checked">Search when I move the map
                                </label>
                            </div>
                        </div>
                    </div>
    
                </div>
                
                
            </div>
            
            
        </div>
    </div>


</div>-->

<!--<![endif]-->
<script>
    var googleMapsUrl = '//maps.googleapis.com/maps/api/js?language=en-CA&sensor=false&v=3.13&libraries=places';
    var userAttributeCookies = {
        flags_name: 'flags',
        roles_name: 'roles',
        flags: {},
        roles: {}
    };
</script>
<link href="/wp-content/themes/KING-Canada/library/js/map/core/map_search.css" media="screen" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?language=en-CA&sensor=false&v=3.13&libraries=places"></script>
<script type="text/javascript" src="/wp-content/themes/KING-Canada/library/js/map/core/jq.core.amber.js"></script>
<script type="text/javascript" src="/wp-content/themes/KING-Canada/library/js/map/core/map-search.js"></script>
<script type="text/javascript" src="/wp-content/themes/KING-Canada/library/js/map/core/mp.direction.api.js"></script>
<script>
    jQuery(document).ready(function($) {
        require('map_search/MapSearchPage').attachTo('.map-search');
        $('.search-button').trigger('click');
    });

</script>


<?php /*---------------------------------------- END TEST ------------------------------------------*/ ?>






































                        </div>



                </div>

            </div>

<?php get_footer(); ?>

