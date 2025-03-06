<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'srv59563_slodkiraj' );

/** Database username */
define( 'DB_USER', 'srv59563_slodkiraj' );

/** Database password */
define( 'DB_PASSWORD', 'Slodki1Raj2Chojnice3' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '665}EMH)}vP!G58{8|f5O}p54BnP^sr 9=I^^zZQ+s/mpTqn&sj`9nO|U6H=oWC8' );
define( 'SECURE_AUTH_KEY',  '@vmTQwldI;S7huzSV:ko~9MssJ$5#BglFvPDp @h]kWRt+{J9*0uR 5NjleTzP|S' );
define( 'LOGGED_IN_KEY',    'eAD:Lplx(bOo-0+F8~Il_yy|x@#U#?00.HbF<}b+D+4Rm}R9y(DMdMd%*FLV5x z' );
define( 'NONCE_KEY',        '8Qpf|&x#q3qHH6fPr&CAi>+l!yw0cBvaC8;39T@~U06uN9`.{M5#lE4.k7L/+g+h' );
define( 'AUTH_SALT',        'vJ<7l$UignCSrc=r,zV3clBkIMF8E:W.d,hzd$pI?,!Mtb^#0}D3NiW#,0|tb-tZ' );
define( 'SECURE_AUTH_SALT', ':]h1KxPOQlT7m/,bP3UAn0Y#(F@&xMV=w=PLLT[C ]ac`zDX8_.77% .X/um;Dux' );
define( 'LOGGED_IN_SALT',   ':UP1+JSNhe}XO9!p5}0nuO8rWV/2?lbIS<&pXAsNBcBgI IM^8^Z_0^aDbCfcNc3' );
define( 'NONCE_SALT',       'MGZd9+p,fK [,8p8wv3hDOxP|/0!!.zp*~jk0Tb%[(#-G_ZfISB!Dg81t0}# n7o' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'sr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
