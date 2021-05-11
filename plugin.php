<?php
/**
 * Plugin Name: Scripture Verses Block
 * Plugin URI:
 * Description: Very simple plugin to add Scripture verses to your WordPress posts and pages.
 * Author: Noah Rahm
 * Author URI:
 * Version: 1.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SCRIPTURE_VERSES_BLOCK_VERSION', '1.0' );

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';
