<?php
/*
 Template Name: Contact us
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

			
			<div id="main" class="m-all cf" role="main">
						

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
							
							<h1 class="archive-title h1" itemprop="headline"><?php the_title(); ?></h1>
							

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								
								
								<section class="entry-content cf d-1of4 contact-sidebar" itemprop="articleBody" >
								
								<div >
								<h3 class="h2">Head Office</h3>
								<p>700 rue Meloche<br>
								Dorval, Québec<br>
								H9P 2Y4</p>

								<p>Tel.: (514) 636-5464<br>
								Fax: (514) 636-5474</p>
								</div>
								
								<div >
								<h3>Tools & Accessories</h3>
								<p>Fax (514) 636-5484</p>
								<h3>Parts</h3>
								<p>Fax (514) 636-5554</p>
								</div>
								
								
								<div>
								<h3>Ontario Office</h3>
								<p>Tel: (905) 738-3622<br>
								Fax: (905) 738-2490</p>
								</div>
								
								
								<div >
								<h3>General Inquiries</h3>
								<a href="mailto:info@kingcanada.com" class="red-btn">info@kingcanada.com</a>
								<h3>Sales & Marketing</h3>
								<a href="mailto:tfuller@kingcanada.com" class="red-btn">tfuller@kingcanada.com</a>
								</div>
								</section>
							
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.717528596215!2d-73.72788100000002!3d45.455348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9162e139bbad1%3A0x326043de9633af8!2sKing+Canada!5e0!3m2!1sen!2sca!4v1409066709115" width="843" height="800" frameborder="0" style="border:0px; padding-right:0px;" class="d-3of4" ></iframe>
								

							</article>

							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry cf">
										<header class="article-header">
											<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
										<section class="entry-content">
											<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the page.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						</div>

						

				</div>

			</div>

<?php get_footer(); ?>
