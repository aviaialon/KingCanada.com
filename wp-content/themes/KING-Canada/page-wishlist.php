<?php
/*
 Template Name: Wishlist page
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


\Core\Application::bootstrapResource('\Core\King\Products\Product_Wishlist');
$wishList = \Core\King\Products\Product_Wishlist::getInstance()->getAll();
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">
				
				<div class="prodRel">
				
				
				
				
				<h1>Wishlist</h1>
				
				<div id="wishlist-links">
				<a href=""><span class="icon-print"></span> Print</a>
				<a href=""><span class="icon-mail"></span> Email</a>
				</div>
				
				<?php if (empty($wishList) === false) { ?>
                	<?php foreach ($wishList as $wishlistItem) { ?>
                    	<?php $imageUrl = \Core\Hybernate\Products\Product_Image_Position::getImagePositionWebDirecotryPath(17) . '/' .
										$wishlistItem['img']; ?>
                        <div class="relatedBox d-1of4 wishListItem">
                            <a href="<?php echo \Core\King\Products\Product_Wishlist::getRemoveUrl($wishlistItem['id']); ?>" class="wishListAction closeWL"><span class="icon-ex"></span></a>
                            <a href="<?php echo $wishlistItem['url']; ?>">
                            	<img src="<?php echo $imageUrl; ?>">
                            	<p><?php echo $wishlistItem['title']; ?></p>
                            </a>
                        </div>
                    <?php } ?>
                <?php } else { ?>
                	<p>No items in your wishlist</p>
                <?php } ?>
				
				<div style="clear:both;"></div><br>
				
				</div><!--end prodRel-->

			</div>
<br><br>

<div id="signup">
<div class="wrap cf rightfloat">
<h2>Sign up for our newsletter and get a gift <span class="icon-svg16"></span></h2><input type="text" placeholder="Your email address"></input><input type="submit"></input>
</div>
</div>

<?php get_footer(); ?>
