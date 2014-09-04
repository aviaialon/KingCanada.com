			<footer class="footer" role="contentinfo">

				<div id="inner-footer" class="wrap cf">

				
					<div class="d-1of6">
					<h1>Products</h1>
					<?php wp_nav_menu( array('menu' => 'Products' )); ?>
					</div>
					<div class="d-1of6">
					<h1>Resources</h1>
					<?php wp_nav_menu( array('menu' => 'Resources' )); ?>
					<h1>Service centers</h1>
					</div>
					<div class="d-1of6">
					<h1>Where to buy</h1>
					<?php wp_nav_menu( array('menu' => 'Where to buy' )); ?>
					</div>
					<div class="d-1of6">
					<h1>Company</h1>
					<h1>News & Events</h1>
					</div>
					<div class="d-1of6">
					<h1>Head Office</h1>
					<p>700 rue Meloche<br>
					Dorval, Québec<br>
					H9P 2Y4</p>
					<h1>Email us</h1>
					</div>
					<div class="d-1of6 last-col facebook">
					<a href="" class=""><img src="<?php echo get_template_directory_uri(); ?>/library/images/facebook.png" /></a>
					</div>
					

					
<div style="clear:both;">
<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.</p>

</div>

					

				</div>

			</footer>

		</div>
		
		
<script type="text/javascript" src="//use.typekit.net/yan2lpr.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>


		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
