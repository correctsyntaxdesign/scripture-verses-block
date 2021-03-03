/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

class ScriptureVersesBlockEditor extends Component {
    render() {
        const { className } = this.props;
        return(
            <div>
                <div className={ className }>
                    <InnerBlocks
                        allowedBlocks={ [ 'core/paragraph'] }
                        templateLock={ false }
                    />
                </div>
            </div>
        );
    }
}

export default ScriptureVersesBlockEditor;
