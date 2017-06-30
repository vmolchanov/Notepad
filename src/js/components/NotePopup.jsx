import React from "react";
import { connect } from "react-redux";

import Overlay from "./Overlay.jsx";
import { HIDDEN_POPUP } from "../../reducers";


class NotePopup extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.closePopup = this.closePopup.bind(this);
        this._clickCloseBtn = this._clickCloseBtn.bind(this);
    }


    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        const showClasses = "note-popup note-popup--show";
        const hiddenClasses = "note-popup";

        let idx = this.props.isShowNotePopup ? this.props.notes.findIndex(note => note.id === this.props.noteId) : 0;

        let header = this.props.choosenNote !== -1 ? this.props.notes[idx].header : "";
        let content = this.props.choosenNote !== -1 ? this.props.notes[idx].content : "";

        return(
            <div className={this.props.isShow ? showClasses : hiddenClasses}>
                <Overlay closePopup={this.closePopup} />

                <div className="note-popup__wrap">
                    <div className="note-popup__close-btn" onClick={this._clickCloseBtn}></div>
                    <h2>{header}</h2>
                    <p>{content}</p>
                </div>
            </div>
        );
    }


    /**
     * Обработчик закрытия окна
     */
    closePopup() {
        this.props.closePopup();
    }


    /**
     * Обработчик нажатия на кнопку закрытия окна (крестик)
     * @private
     */
    _clickCloseBtn() {
        this.props.closePopup();
    }

}


export default connect(
    state => ({
        notes: state.notes,
        isShowNotePopup: state.isShowNotePopup,
        choosenNote: state.choosenNote
    }),
    dispatch => ({
        closePopup: () => dispatch({ type: HIDDEN_POPUP })
    })
)(NotePopup);
