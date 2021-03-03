/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

class ScriptureVersesBlockSave extends Component {
    render() {
        return (
            <div className="is-saved">
                <InnerBlocks.Content />
            </div>
        );
    }
}

export default ScriptureVersesBlockSave;
