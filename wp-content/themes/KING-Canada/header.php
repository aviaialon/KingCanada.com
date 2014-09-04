<?php 
	// Load the menu.
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Category_Parent');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Category');
	\Core\Application::bootstrapResource('\Core\King\Products\Product_Wishlist');
	$wishListCount = count(\Core\King\Products\Product_Wishlist::getInstance()->getAll());
	$categoryTree  = \Core\Hybernate\Products\Product_Category::getCategoryTree();
?>
<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // Google Chrome Frame for IE ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title><?php wp_title(''); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		
		



		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>
		
		<!--typekit-->
		<script type="text/javascript" src="//use.typekit.net/yim2ixl.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
        
        <!-- french / english styles -->
		<?php if(ICL_LANGUAGE_CODE=='en'){?>
            <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/style-en.css" type="text/css" media="screen, projection" />
        <?php }else{ ?>
            <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/style-fr.css" type="text/css" media="screen, projection" />
        <?php } ?>  



		<!-- mobile styles-->
		<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/library/css/responsive.css" media="screen" />
	</head>

	<body <?php body_class(); ?>>

		<div id="container">

			<header class="header" role="banner">

				<div id="inner-header" class="wrap cf">

					<?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
					<p id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow" alt="<?php bloginfo('name'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/library/images/main-logo.png"></a></p>
                    	
                    <!-- Mobile menu btn -->     
					<a href="" id="mobile-menu"><img src="<?php echo get_template_directory_uri(); ?>/library/images/mobile-menu.png" /></a>	
                        
					<?php // if you'd like to use the site description you can un-comment it below ?>
					<?php // bloginfo('description'); ?>
					
					<div id="searchArea">
					
					<div class="sleft">
					<a href="/dev/king/?page_id=85">Wishlist (<?php echo $wishListCount; ?>)</a>
					<a href="#">Dealer Login</a>
					
					</div>
					<div class="sright">
					<?php get_search_form(); ?>
					
					</div>
                    
					</div>
					<?php language_selector_flags(); ?>
				</div>
				<div id="navcase" class="wrap cf">
					<nav role="navigation">
						<?php wp_nav_menu(array(
    					'container' => false,                           // remove nav container
    					'container_class' => 'menu cf',                 // class of container (should you choose to use it)
    					'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
    					'menu_class' => 'nav top-nav cf',               // adding custom nav class
    					'theme_location' => 'main-nav',                 // where it's located in the theme
    					'before' => '',                                 // before the menu
						'after' => '',                                  // after the menu
						'link_before' => '',                            // before each link
						'link_after' => '',                             // after each link
						'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => ''                             // fallback function (if there is one)
						)); ?>

					</nav>

				</div>
				
			</header>
			
			
			
<!--products-->
<? /*
<div id="productsMenu" class="submenuFull ">
				
		<div class="submenuHeader wrap cf">
			<h1>Products</h1>
			<a href="/dev/king/?page_id=85" class="red-btn">Wishlist (<?php echo $wishListCount; ?>)</a>
		</div>
		
		<div class="blackbg">
		<div class="submenuBody wrap cf">
		
		<div class="d-1of3 selectMe">
        	<select> <!--class="turnintodropdown_demo2-->
            	<option value="option0" selected>Select from products</option>
            	<?php foreach ($categoryTree as $parentCategoryId => $parentCategory) { ?>
                	<option value="option<?php echo $parentCategoryId; ?>"><?php echo($parentCategory['name_en']); ?></option>
                <?php } ?>
            </select>
		</div>	
		
		
		<div class="d-2of3">	
			<div id="option0" class="submenugroup split-list">
				<h3>Select a categroy from the dropdown</h3>
			</div>	
            <?php foreach ($categoryTree as $parentCategoryId => $parentCategory) { ?>
            	<div id="option<?php echo $parentCategoryId; ?>" class="submenugroup split-list">
                    <ul class="sub-list">
                    	<?php foreach ($parentCategory['children'] as $subCatId => $subCatData) { ?>
                            <li><a href="/dev/king/?scid=<?php echo $subCatId; ?>"><?php echo($subCatData['name_en']); ?></a></li>
                        <?php } ?>
                    </ul>
                </div>
            <?php } ?>
		</div>		
				
		</div> <!--end submenuBody-->
		</div> <!--end blackbg-->
				
</div><!--end productsMenu-->
		
*/ ?>

<div id="productsMenu" class="submenuFull ">
				
		<div class="submenuHeader wrap cf">
			<h1>Products</h1>
			<a href="/dev/king/?page_id=85" class="red-btn">Wishlist (<?php echo $wishListCount; ?>)</a>
		</div>
		
		<div class="blackbg">
		<div class="submenuBody wrap cf">
		
		<div class="d-1of3 selectMe">
		
		<ul id="dd-nav">
		<li data-id="option0" class="dd-parent">Select a product category
		</li>
		</ul>

		
		
		<div id="dd-nav" class="dropcontainer_demo2">
			<ul class="dd-sub-nav">
				<li></li>
				<?php foreach ($categoryTree as $parentCategoryId => $parentCategory) { ?>
                <li><a href="#" data-id="option<?php echo $parentCategoryId; ?>"><?php echo($parentCategory['name_en']); ?></a></li>
                <?php } ?>
			</ul>
		</div>
		
		
		
        	<!--<select class="turnintodropdown_demo2">
            	<option value="option<?php echo $parentCategoryId; ?>" selected>Select from products</option>
            	<?php foreach ($categoryTree as $parentCategoryId => $parentCategory) { ?>
                	<option value="option<?php echo $parentCategoryId; ?>"><?php echo($parentCategory['name_en']); ?></option>
                <?php } ?>
            </select>-->
		</div>	
		
		
		<div id="productSwap" class="d-2of3">

			<div id="option0" class="submenugroup split-list">
				<h3>Select a categroy from the dropdown</h3>
			</div>	
            <?php foreach ($categoryTree as $parentCategoryId => $parentCategory) { ?>
			
            	<div id="option<?php echo $parentCategoryId; ?>" class="submenugroup split-list">
                    <ul class="sub-list ">
					<h3 class="h1"><?php echo($parentCategory['name_en']); ?></h3>
                    	<?php foreach ($parentCategory['children'] as $subCatId => $subCatData) { ?>
                            <li class="d-1of3"><a href="<?php echo add_query_arg(array('cid' => $subCatId), get_permalink(157));?>"><?php echo($subCatData['name_en']); ?></a></li>
                        <?php } ?>
                    </ul>
                </div>
            <?php } ?>
		</div>		
				
		</div> <!--end submenuBody-->
		</div> <!--end blackbg-->
				
</div><!--end productsMenu-->






<!--manuals-->		

<div id="manualsMenu" class="submenuFull">
				
		<div class="submenuHeader wrap cf">
			<h1>Manuals</h1>
		</div>
		<div class="blackbg">	
		<div class="submenuBody wrap cf">
			<h3>Search service manuals and instruction manuals by product name or number:</h3>
			<style>
			.searchManuals {
				width: 257px;
				float: right;
				position: relative;
				top: -45px;
				margin-bottom: -45px;
			}
			#manualsToggle {
				position: absolute;
				background: #3c80c2;
				width: 280px;
				left: 50%;
				margin-left: 230px;
				bottom: -40px;
				height: 40px;
				cursor: pointer;
				padding-left: 30px;
				color: white;
				font-family: "nimbus-sans-condensed", "HelveticaNeue", Helvetica, Arial, sans-serif;
				text-transform: uppercase;
				font-size: 20px;
				line-height: 40px;
			}
			</style>
			<div class="searchManuals"><?php include( TEMPLATEPATH . '/searchform_manuals.php' ); #get_search_form(); ?></div>
			
				
		</div> <!--end submenuBody-->
		</div>	<!--end blackbg-->	
		
		<div id="manualsToggle" class="manualsMenu">View Full product menu &nbsp;&nbsp;<span class="icon-menu"></span></div>
		
		<div class="clear"></div>
			<div id="manualsList">
			<div class="submenuBody wrap cf">
				<?php wp_nav_menu( array('menu' => 'Automotive' )); ?>
				<?php wp_nav_menu( array('menu' => 'Compressors' )); ?>
				<?php wp_nav_menu( array('menu' => 'Material Handling' )); ?>
				<?php wp_nav_menu( array('menu' => 'Metalworking' )); ?>
				<?php wp_nav_menu( array('menu' => 'Outdoor Equipment' )); ?>
				<?php wp_nav_menu( array('menu' => 'Power Tools' )); ?>
				<?php wp_nav_menu( array('menu' => 'Woodworking' )); ?>
				<?php wp_nav_menu( array('menu' => 'Specialty Tools' )); ?>
				<?php wp_nav_menu( array('menu' => 'New Products' )); ?>
				<?php wp_nav_menu( array('menu' => 'Parts' )); ?>
			</div>
			</div>
		
		
		
</div><!--end manualsMenu-->


	<div id="content">

		<div id="inner-content" class="wrap cf">

	
	
	<div class="breadcrumb-box">
	<?php the_breadcrumb(); ?>
	<hr>
	</div>
	
