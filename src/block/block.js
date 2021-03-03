/**
 * BLOCK: lyrics
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.

import ScriptureVersesBlockEditor from './edit.jsx';
import ScriptureVersesBlockSave from './save.jsx';

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'scripture-verses/bible-verse', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Scripture Verses' ), // Block title.
	icon: 'book', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'bible' ),
        __( 'verses' ),
        __( 'scripture' )
	],
    attributes: {
    },
	edit: ScriptureVersesBlockEditor,
	save: ScriptureVersesBlockSave
} );
