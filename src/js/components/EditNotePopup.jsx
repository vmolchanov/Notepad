import React from "react";
import { connect } from "react-redux";

import Overlay from "./Overlay.jsx";
import EditNoteForm from "./EditNoteForm.jsx";
import { HIDDEN_POPUP } from "../../reducers";


class EditNotePopup extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.closePopup = this.closePopup.bind(this);
    }


    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        const showClasses = "edit-note-popup edit-note-popup--show";
        const hiddenClasses = "edit-note-popup";

        let header = this.props.choosenNote !== -1 ? this.props.note.header : "";
        let content = this.props.choosenNote !== -1 ? this.props.note.content : "";

        return(
            <div className={this.props.isShow ? showClasses : hiddenClasses}>
                <Overlay closePopup={this.closePopup} />

                <div className="edit-note-popup__wrap">
                    <EditNoteForm inputContent={header}
                                  textareaContent={content}
                                  closePopup={this.closePopup}/>
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

}


export default connect(
    state => ({
        note: state.notes.find((note) => note.id === state.choosenNote),
        choosenNote: state.choosenNote
    }),
    dispatch => ({
        closePopup: () => dispatch({ type: HIDDEN_POPUP })
    })
)(EditNotePopup);
