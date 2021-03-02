/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks, InspectorControls, PlainText } = wp.blockEditor;
const { ExternalLink, PanelBody, TextControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

class ScriptureVersesBlockEditor extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { artist, title, showTitle, externalLink } = attributes;
        return(
            <div>
                <div className={ className }>
                    <InnerBlocks
                        allowedBlocks={ [ 'core/paragraph', 'core/heading' ] }
                        templateLock={ false }
                        template={ [
                        ] }
                    />
                </div>
            </div>
        );
    }
}

export default ScriptureVersesBlockEditor;
