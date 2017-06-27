import React from "react";
import { connect } from "react-redux";


class Overlay extends React.Component {

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }


    render() {
        return(
            <div className="overlay" onClick={this._handleClick}></div>
        );
    }


    _handleClick() {
        this.props.closePopup();
    }

}


export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        closePopup: () => dispatch({ type: "HIDDEN_POPUP", data: false })
    })
)(Overlay);
