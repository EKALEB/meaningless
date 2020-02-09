var React = require('react');

function PopupSamble(WrappedComponent, popupdata) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                width: popupdata.width,
                height: popupdata.height,
                left: popupdata.posX,
                top: popupdata.posY,
                isShown: popupdata.isShown,
                isPop: popupdata.isPop,
            }
            this.handleClick = this.handleClick.bind(this);
        }
        componentDidMount() {
        }

        handleClick() {
            this.setState({
                isShown: false
            });
        }

        render() {
            if (!this.state.isShown) {
                return null;
            }
            if (!this.state.isPop) {
                return <WrappedComponent {...this.props} />
            }
            console.log("PopupSamble props:", this.props);
            return (
                <div>
                    <div className="background_window" onClick={this.handleClick} />
                    <div id="context_menu" style={{position:"fixed", width: this.state.width, height: this.state.height, left: this.state.left, top: this.state.top}}>
                        <WrappedComponent {...this.props} />
                    </div>
                </div>
            )
        }
    }
}

export default PopupSamble;