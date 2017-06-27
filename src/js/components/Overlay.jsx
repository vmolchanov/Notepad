import React from "react";
import { connect } from "react-redux";

import { HIDDEN_POPUP } from "../../reducers";


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
        this.props.closeAddNotePopup();
    }

}


export default connect(
    state => ({}),
    dispatch => ({
        closeAddNotePopup: () => dispatch({ type: HIDDEN_POPUP })
    })
)(Overlay);
