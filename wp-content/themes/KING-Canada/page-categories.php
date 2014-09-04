<?php
/*
 Template Name: category page
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
\Core\Application::bootstrapResource('\Core\Util\Pagination\Pagination');
\Core\Application::bootstrapResource('\Core\Net\Url');

$category   = \Core\Hybernate\Products\Product_Category::getInstance((int) $_GET['cid']);
$pagination = \Core\Hybernate\Products\Product::searchByCategoryId((int) $_GET['cid']);
$results    = $pagination->getPageData(); 

?>
<?php get_header(); ?>

			
				
				<div class="prodRel">
		<h1>Products in "<?php echo \Core\Application::translate($category->getName_En(), $category->getName_Fr());?>"</h1>		
                <?php if (empty($results)=== false) { ?>
					<?php foreach ($results as $product) { ?>
                    <?php $imageUrl=\ Core\Hybernate\Products\Product_Image_Position::getImagePositionWebDirecotryPath(17) . '/' . $product[ 'mainImage']; ?>
                    <div class="relatedBox d-1of4">
                        <a href="<?php echo \Core\Hybernate\Products\Product::getStaticProductUrl($product['id'], $product['title']);?>">
                                        <img src="<?php echo $imageUrl; ?>">
										
								
                                    <p class="keyDisplay">Model: <?php echo $product['productKey']; ?></p>
									<p><?php echo $product['title']; ?></p></a>
                    </div>
                    <?php } ?>
                    <div style="clear:both;"></div>
                    <ul>
                    <?php foreach($pagination->getPaginationLinks() as $paginationLink) { ?>
                        <li><a href="<?php echo $paginationLink['href'] . '&page_id=120&q=' . $_GET['q'];?>" class="<?php echo $paginationLink['class']; ?>">
                            <?php echo $paginationLink['text']; ?></a></li>
                    <?php } ?>
                    </ul>
                <?php } else { ?>
                    <p>No results found.</p>
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
