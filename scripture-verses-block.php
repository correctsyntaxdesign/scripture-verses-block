<?php
/**
 * Plugin Name:       Scripture Verses Block
 * Description:       Simple plugin providing a Gutenburg block to add Scripture verses to your WordPress posts and pages
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.3
 * Author:            Noah Rahm
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bible-verse
 *
 * @package           scripture-verses-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function scripture_verses_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'scripture_verses_block_init' );
