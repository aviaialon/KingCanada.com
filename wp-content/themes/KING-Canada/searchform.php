<?php /* esc_url( home_url( '/' )) */ ?>
<form role="search" method="get" id="searchform" class="searchform" action="<?php echo esc_url(get_permalink(120)); ?>">
	<div>
		<label class="screen-reader-text" for="s"><?php _x( 'Search for:', 'label' ); ?></label>
        <input type="hidden" name="page_id" value="120" />
		<input type="text" value="<?php echo @$_GET['q']; ?>" name="q" id="s" placeholder="Search <?php echo(get_bloginfo('name')); ?>" />
		<input type="submit" id="searchsubmit" value="<?php esc_attr_x( 'Search', 'submit button' ); ?>" />
	</div>
</form>