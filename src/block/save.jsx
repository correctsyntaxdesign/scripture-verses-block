/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;
const { Dashicon } = wp.components;

class ScriptureVersesBlockSave extends Component {
    render() {
        const { attributes } = this.props;
        const { artist, title, showTitle, externalLink } = attributes;
        return (
            <div className="is-saved">
                <InnerBlocks.Content />
            </div>
        );
    }
}

export default ScriptureVersesBlockSave;
