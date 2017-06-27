import React from "react";
import { connect } from "react-redux";

import { SHOW_NOTE_POPUP } from "../../reducers";


class Note extends React.Component {

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }


    render() {
        return(
            <div className="note" onClick={this._handleClick}>
                <div className="note__content">
                    <h3>{this.props.header}</h3>
                    <p>{this.props.noteContent}</p>
                </div>
                <div className="note__date">
                    <span>{this.props.date}</span>
                </div>
            </div>
        );
    }


    _handleClick() {
        this.props.openNotePopup(this.props.id);
    }

}


Note.propTypes = {
    header: React.PropTypes.string,
    noteContent: React.PropTypes.string,
    date: React.PropTypes.string,
    id: React.PropTypes.number
};


export default connect(
    state => ({}),
    dispatch => ({
        openNotePopup: (id) => dispatch({ type: SHOW_NOTE_POPUP, data: id })
    })
)(Note);

