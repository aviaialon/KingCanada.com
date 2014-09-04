<?php
/*
 Template Name: DEMO product page
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
<?php
	\Core\Application::bootstrapResource('\Core\Net\Router');
	\Core\Application::bootstrapResource('\Core\Crypt\AesCrypt');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Description');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Image');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Image_Position');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Attribute');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Category');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Category_Parent');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Manual');
	\Core\Application::bootstrapResource('\Core\Hybernate\Products\Product_Manual_Type');
	\Core\Application::bootstrapResource('\Core\King\Products\Product_Wishlist');
	$lang    = \Core\Application::translate('en', 'fr');
	$product = \Core\Hybernate\Products\Product::getInstance(array(
		'id' 			=> (int) $_GET['id'],
		'activeStatus' 	=> 1
	));
	$accessories     = $product->getRelatedProductByCategory(10);
	$manuals         = $product->getProductManuals($lang);
	$attributes      = $product->getAttributes($lang);
	$relatedProducts = $product->getRelatedProducts(array('excludeProductId' => $accessories));
	
	if (false === ($product->getId() > 0) && false === headers_sent()) {
		header("HTTP/1.0 404 Not Found - Archive Empty");
		require TEMPLATEPATH.'/404.php';
		exit;	
	}
	
	$product->addView();
?>
<?php get_header(); ?>

		

				
				<div class="prodFull">
				
				<h1><?php echo $product->getDescription($lang)->getTitle(); ?></h1>
				<div class="d-1of4 prodFull_sidebar">
				
                <div class="prodFull_sidebar_top">
                    <p><?php echo $product->getDescription($lang)->getTitle(); ?></p>
                    <?php if (true === $product->isInWishList()) { ?>
                        <a class="red-btn wishListAction" href="<?php echo $product->getWishListRemoveUrl(); ?>">Remove from wish list</a>
                    <?php } else { ?>
                        <a class="red-btn wishListAction" href="<?php echo $product->getWishListAddUrl(); ?>">Add to wish list</a>
                    <?php } ?>
				</div>
                
                
				<div class="prodFull_sidebar_grid">
				<a class="d-1of2 dealer-locator" href="#"><span class="icon-location"></span><br>Dealer Locator</a>
                <?php if (empty($manuals[2]['manuals'][0]) === false) { ?>
					<a class="d-1of2 last service-manual" href="<?php echo $manuals[2]['manuals'][0]['webPath']; ?>" target="_blank"><span class="icon-service"></span><br>Service manual</a>
				<?php } ?>
				<a class="d-1of2 print-spec-sheet" href="#"><span class="icon-print"></span><br>Print spec sheet</a>
                <?php if (empty($manuals[1]['manuals'][0]) === false) { ?>
					<a class="d-1of2 last icon-manual" href="<?php echo $manuals[1]['manuals'][0]['webPath']; ?>" target="_blank"><span class="icon-manual"></span><br>Instruction manual</a>
				<?php } ?>
				<a class="d-1of2 facebook" href="#"><span class="icon-fbook"></span><br>Share on facebook</a>
				<a class="d-1of2 last email" href="#"><span class="icon-mail"></span><br>Share by <br>email</a>
				
				</div><!-- end prodFull_sidebar_grid -->
				
				
				</div><!-- end prodFull_sidebar -->
				
				
				<div class="d-3of4 last prodFull_content">
				
				<ul class="bxslider">
                	<?php if ($product->getMainImage()->getId()) { ?>
                		<li><img src="<?php echo $product->getMainImage()->getImagePath(18) ?>" /></li>
                    <?php } ?>
                    <?php foreach ($product->getImages() as $image) { ?>
                    	<?php if ((int) $image->getId() <> (int) $product->getMainImage()->getId()) { ?>
                        	<li><img src="<?php echo $image->getImagePath(18); ?>" /></li>
                    	<?php } ?>    
                    <?php } ?>
				</ul>
				
				<div id="bx-pager">
                    <?php if ($product->getMainImage()->getId()) { ?>
                    	<a data-slide-index="0" href=""><img src="<?php echo $product->getMainImage()->getImagePath(19); ?>" /></a>
                    <?php } ?>
                    <?php $incounter = 1; foreach ($product->getImages() as $image) { ?>
                    	<?php if ((int) $image->getId() <> (int) $product->getMainImage()->getId()) { ?>
                        	<a data-slide-index="<?php echo $incounter; ?>" href="">
                            	<img src="<?php echo $image->getImagePath(19); ?>" /></a>
                        	<?php $incounter++; ?>
                    	<?php } ?>    
                    <?php } ?>
				</div>
				
				<div class="prodFull_Content_text">
				<h2>Product description</h2>
				<p><?php echo $product->getDescription($lang)->getDescription(); ?></p>
				</div>
				
				
				<?php if (empty($attributes) === false) { ?>
				<div class="prodFull_content_specs ">
                    <ul>
                        <?php foreach ($attributes as $attribute) { ?>
                            <li><span class="specs_title"><?php echo $attribute->getName(); ?></span> <?php echo $attribute->getDescription(); ?></li>
                        <?php } ?>
                    </ul>
				</div>
                <?php } ?>
				</div><!-- end prodFull_content -->
				</div> <!-- end prodFull -->
				<div style="clear:both;"></div><br>
				
				
				<div class="prodRel">
				
				<?php if (empty($accessories) === false) { ?>
                	<h1>Accesories</h1>
                    <?php foreach ($accessories as $accessory) {  ?>
						<?php $imageUrl = \Core\Hybernate\Products\Product_Image_Position::getImagePositionWebDirecotryPath(17) . '/' .
										$accessory['mainImage']; ?>
                        <div class="relatedBox d-1of4">
                            <a href="<?php echo \Core\Hybernate\Products\Product::getStaticProductUrl($accessory['id'], $accessory['title_' . $lang]);?>">
                            	<img src="<?php echo $imageUrl; ?>">
                            <p><?php echo $accessory['title_' . $lang]; ?></p>
							</a>
                        </div> 
                	<?php } ?>
                		<div style="clear:both;"></div><br>
						<a href = "#" class="red-btn">Load More</a>	
				<?php } ?>
				
				
				
				
				<?php if (empty($relatedProducts) === false) { ?>
                	<h1>Related Products</h1>
                    <?php foreach ($relatedProducts as $product) {  ?>
						<?php $imageUrl = \Core\Hybernate\Products\Product_Image_Position::getImagePositionWebDirecotryPath(17) . '/' .
										$product['mainImage']; ?>
                        <div class="relatedBox d-1of4">
                            <a href="<?php echo \Core\Hybernate\Products\Product::getStaticProductUrl($product['id'], $product['title_' . $lang]);?>">
                            	<img src="<?php echo $imageUrl; ?>">
                            <p><?php echo $product['title_' . $lang]; ?></p></a>
                        </div> 
                	<?php } ?>
                		<div style="clear:both;"></div><br>
				<a href = "#"  class="red-btn">Load More</a>
				<?php } ?>
				
				</div><!--end prodRel-->

			</div>
<br><br>

<?php get_footer(); ?>
