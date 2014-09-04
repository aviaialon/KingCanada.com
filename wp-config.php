<?php
#error_reporting(E_ALL); ini_set('display_errors', 1);
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'king');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'merlin5780');

/** MySQL hostname */
define('DB_HOST', '192.168.2.15');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!nr%k+OZgMu-{b.[23!pguCcMj0xK=;~ilI-_B8UA+A)BR210tETW{G12xV4Jy~S');
define('SECURE_AUTH_KEY',  '%-~r{|h@j.ZM*9+@:)R9k>Ur3-ok6-|eA>pbo=(l|G2z@;/X<s;gOFw_*^f]rnai');
define('LOGGED_IN_KEY',    'iQ2Ezhsu5r: /Kv[M8sCqpmZ^m FRVe)3W:^2dapg/l-9q0}l-{C+Prv:,6k+gq+');
define('NONCE_KEY',        'V8ai>qlr4O]SCx,i-3f}K6g81I_!=`rCA-Y{<oq+Y)[|d5:zU[C^]k!%<u:Bxl:#');
define('AUTH_SALT',        'Pwm{hBA=O,{0=vI&F<c&*<T}8LDoqoao2`jdzVJjV2@eclZM:j3t4Fi=jv31,K*]');
define('SECURE_AUTH_SALT', 'A6>2+80v32`Bc+O-0rR~HWg.&ZjBQ>jM]14[a[G$Ol,l81B^yu{OYf=izw=;*;aK');
define('LOGGED_IN_SALT',   '04v)y>&k+gWwE~fx8`dC(!bVDs}{S j@:xcqy+}g#%;MWAD(gQPK7K}pD}DY=T|i');
define('NONCE_SALT',       'A+w73JEsU=+Z>73A;*1cTa;wG#F!2Ws%QxUoAGgKT7cv-+)v@N}%|}YfpJ<+&)Eo');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_8euzxu_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

