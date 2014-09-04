<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define('WP_USE_THEMES', true);

require_once(realpath(dirname(__FILE__)) . '/wp-admin/Core/Application.php');
\Core\Application::disableAutoload();
\Core\Application::bootstrapResource('\Core\Config\Configurations');
$Application = \Core\Application::getInstance(array(
	$_SERVER['DOCUMENT_ROOT'] . getenv('BASE') . '/wp-admin/admin/mvc/config/config.ini'
));

/** Loads the WordPress Environment and Template */
require( dirname( __FILE__ ) . '/wp-blog-header.php' );
