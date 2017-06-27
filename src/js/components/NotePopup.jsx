import React from "react";
import { connect } from "react-redux";

import Overlay from "./Overlay.jsx";
import { HIDDEN_POPUP } from "../../reducers";


class NotePopup extends React.Component {

    constructor(props) {
        super(props);

        this._clickCloseBtn = this._clickCloseBtn.bind(this);
    }


    render() {
        let showClasses = "note-popup note-popup--show";
        let hiddenClasses = "note-popup";

        let idx = this.props.isShowNotePopup ? this.props.notes.findIndex(note => note.id === this.props.noteId) : 0;

        return(
            <div className={this.props.isShow ? showClasses : hiddenClasses}>
                <Overlay />

                <div className="note-popup__wrap">
                    <div className="note-popup__close-btn" onClick={this._clickCloseBtn}></div>
                    <h2>{this.props.notes[idx].header}</h2>
                    <p>{this.props.notes[idx].content}</p>
                </div>
            </div>
        );
    }


    _clickCloseBtn() {
        this.props.closePopup();
    }

}


export default connect(
    state => ({
        notes: state.notes,
        isShowNotePopup: state.isShowNotePopup
    }),
    dispatch => ({
        closePopup: () => dispatch({ type: HIDDEN_POPUP })
    })
)(NotePopup);
