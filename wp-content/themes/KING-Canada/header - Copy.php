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

	</head>

	<body <?php body_class(); ?>>

		<div id="container">

			<header class="header" role="banner">

				<div id="inner-header" class="wrap cf">

					<?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
					<p id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow" alt="<?php bloginfo('name'); ?>"></a></p>

					<?php // if you'd like to use the site description you can un-comment it below ?>
					<?php // bloginfo('description'); ?>
					
					<div id="searchArea">
					
					<div class="sleft">
					<a href="#">Wishlist (0)</a>
					<a href="#">Dealer Login</a>
					</div>
					<div class="sright">
					<?php get_search_form(); ?>
					<a href="#" id="searchsubmit"></a>
					</div>
					</div>
					
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

<div id="productsMenu" class="submenuFull ">
				
		<div class="submenuHeader wrap cf">
			<h1>Products</h1>
			<a href="#" class="red-btn">Wishlist (#)</a>
		</div>
		
		<div class="blackbg">
		<div class="submenuBody wrap cf">
		
		<div class="d-1of3 selectMe">
				<select class="turnintodropdown_demo2">
					<option value="option1">Select from products</option>
					<option value="option2">Automotive</option>
					<option value="option3">Compressors and Air Tools</option>
					<option value="option4">Material Handling</option>
					<option value="option5">Metalworking</option>
					<option value="option6">Outdoor Power Equipment</option>
					<option value="option7">Power Tools</option>
					<option value="option8">Woodworking</option>
					<option value="option9">Specialty Tools</option>
					<option value="option10">New Products</option>
					<option value="option11">Parts Ordering</option>
				</select>
		</div>	
		
		
		<div class="d-2of3">	
			<div id="option1" class="submenugroup split-list">
				<h3>Select a categroy from the dropdown</h3>
			</div>	
			<div id="option2" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Automotive' )); ?>
			</div>
			<div id="option3" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Compressors' )); ?>
			</div>
			<div id="option4" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Material Handling' )); ?>
			</div>
			<div id="option5" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Metalworking' )); ?>
			</div>
			<div id="option6" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Outdoor Equipment' )); ?>
			</div>
			<div id="option7" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Power Tools' )); ?>
			</div>
			<div id="option8" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Woodworking' )); ?>
			</div>
			<div id="option9" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Specialty Tools' )); ?>
			</div>
			<div id="option10" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'New Products' )); ?>
			</div>
			<div id="option11" class="submenugroup split-list">
				<?php wp_nav_menu( array('menu' => 'Parts' )); ?>
			</div>
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
			<h3>Search service manuals and instruction manuals by product name or number:</h3><?php get_search_form(); ?>
			
			<div id="manualsList">
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
			
		<div id="manualsToggle" class="manualsMenu">expand Full product menu <span class="icon-menu"></span></div>
				
		</div> <!--end submenuBody-->
		</div>	<!--end blackbg-->	
</div><!--end manualsMenu-->