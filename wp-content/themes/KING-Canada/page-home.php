<?php
/*
 Template Name: Home Page
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
?>

<?php get_header(); ?>

<style>.breadcrumb-box{display:none;}</style>

			
					
                    <div id="mobileSlider">
						<?php putRevSlider("mobile","homepage") ?>
					</div>
							
						<div id="main" class="m-all t-2of3 d-7of7 cf" role="main" style="position:relative;">
							
							<div class="banner">	
							<?php putRevSlider("Top-Home","homepage") ?>
							<?php putRevSlider("Product-thumbs","homepage") ?>
							</div>
							
							<div id="prodSlide_bg"></div>
							
							<div id="catalog-CTA" >
							<a href="#" target="_blank">
							<img src="<?php echo get_template_directory_uri(); ?>/library/images/catalogueCTA.jpg"/>
							<h3>Download our <br>2014 Catalogue</h3>
							</a>
							<a href="#" class="red-btn">See all new products</a>
							</div>
							
						</div>

					
				
					
			<div class="homeboxes">
					<div id="homeParts" class="one3rd homebox">
					
					<h1>Search products & parts</h1>
					<p>Search for the products and parts you need and find out where they can be purchased.</p>
					<form>
					<?php get_search_form(); ?>
					<a href="" class="tinybluelink" id="AdvancedSearch">Advanced search</a>
					
					<span id="AdvancedSearch-hidden" >
					<select class="turnintodropdown_demo2">
						<option>Select a product category</option>
						<option>Automotive</option>
						<option>Compressors and Air Tools</option>
						<option>Material Handling</option>
						<option>Metalworking</option>
						<option>Outdoor Power Equipment</option>
						<option>Power Tools</option>
						<option>Woodworking</option>
						<option>Specialty Tools</option>
						<option>New Products</option>
						<option>Parts Ordering</option>
					</select>
					<span>
					
							
					</form>
					
					</div>
					
					
					<div id="homeDealer" class="one3rd homebox">
					
					<h1>Dealer Locator</h1>
					<form>
					<select class="turnintodropdown_demo2">
						<option>Select a product category</option>
						<option>Automotive</option>
						<option>Compressors and Air Tools</option>
						<option>Material Handling</option>
						<option>Metalworking</option>
						<option>Outdoor Power Equipment</option>
						<option>Power Tools</option>
						<option>Woodworking</option>
						<option>Specialty Tools</option>
						<option>New Products</option>
						<option>Parts Ordering</option>
					</select>
					<input type="text" placeholder="Enter postal code or city" class="field"></input>
					<input type="submit" id="dealersubmit" value="Search">
					</form>
					
					</div>
					
					
					<div id="homeSignup" class="one3rd homebox last3rd">
					
					<h1>Newsletter Signup</h1>
					<p>Sign up for our newsletter and receive a free gift.</p>
					<form class="">
					<input type="text" class="field"></input>
					<input type="submit" id="signupsubmit" value="Sign up">
					</form>
					
					</div>
				</div>	
				<div style="clear:both;"></div>
					

				</div><!-- end main -->

			</div>

			

<?php get_footer(); ?>
