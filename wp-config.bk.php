<?php
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
define('AUTH_KEY',         'YzPaQ6a!?_Ec~CuLKU&F!;yAHfIbG"gOEh8|QocMOuNH_;(8FjNZADNr9l11&7`p');
define('SECURE_AUTH_KEY',  '*Pg|dk~$SEVZy"J+S"sMnDMpr!NfD&eEObvK&EN8VpPsQ"IZvhd"u~QzqyGDm")I');
define('LOGGED_IN_KEY',    'u;xB`ii0bDYI8m+F4mqyOd7CWcTWz%3a%0~VE`LUW?S*esS0qlkGDR)aaRTC25YK');
define('NONCE_KEY',        '!73lG&mdewN("6SaazO*mM/wuGG&^hj&4!v#MF0cCL!Yu`2W|PO3&2LOI6&mboj^');
define('AUTH_SALT',        '9*m$Ee!Vk?y1YljZy0*lRNGvd~B1?03U&QUBs6*yl(/D8Z/ZtINLbh++nku#STTK');
define('SECURE_AUTH_SALT', 'yoj3v@0%+Lx#xN!(uoGitlT%@lStn:H&?t!*AAow%2s_4k3;y:#3z;Oz5#bab$ts');
define('LOGGED_IN_SALT',   '(&e!hIi5!~~Le+*XadE$|Y&HeJyz3RER?rpsVq+ds(KM^u^3EN6N0fUU1|LE$xgs');
define('NONCE_SALT',       '*P4FnDYr?j)XF$ySFS0/KRxP#cIj^r?Yzqu2id_lX1PTa:wGnRt_zuLf420n)Q$m');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_8euzxu_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

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
