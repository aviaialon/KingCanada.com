<?php
/*
 Template Name: manuals page
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


\Core\Application::bootstrapResource('Core\Crypt\AesCrypt');
\Core\Application::bootstrapResource('\Core\Net\Router');
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

$pagination = \Core\Hybernate\Products\Product::search($_GET['q'], true);
$results    = $pagination->getPageData(); 
?>
<?php get_header(); ?>

				
                <div class="prodRel">
                
                    <h1>Manuals</h1>
                    <?php if (empty($results)=== false) { ?>
                        <?php foreach ($results as $product) { ?>
                            
							<?php $imageUrl=\ Core\Hybernate\Products\Product_Image_Position::getImagePositionWebDirecotryPath(1) . '/' . $product[ 'mainImage']; ?>
                            <div class="manualsBox d-1of4">
                                <a href="<?php echo \Core\Hybernate\Products\Product::getStaticProductUrl($product['id'], $product['title']);?>">
                                	<img src="<?php echo $imageUrl; ?>">
                                <p><?php echo $product['title']; ?></p></a>
                                
                                <div class="prodFull_sidebar_grid">
                                    <?php if (empty($product['instructionManualWebPath']) === false) { ?>
                                        <a class="d-1of2 last" href="<?php echo $product['instructionManualWebPath']; ?>" target="_blank">
                                            <span class="icon-manual"></span><br>Instruction manual</a>
                                    <?php } ?>
                                    
                                    <?php if (empty($product['serviceManualWebPath']) === false) { ?>
                                        <a class="d-1of2 last" href="<?php echo $product['serviceManualWebPath']; ?>" target="_blank">
                                            <span class="icon-service"></span><br>Service manual</a>
                                    <?php } ?>
                                </div>
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
                    <br>
        
        
                </div>
                
              

			</div>
<br><br>

<div id="signup">
<div class="wrap cf rightfloat">
<h2>Sign up for our newsletter and get a gift <span class="icon-svg16"></span></h2><input type="text" placeholder="Your email address"></input><input type="submit"></input>
</div>
</div>

<?php get_footer(); ?>
