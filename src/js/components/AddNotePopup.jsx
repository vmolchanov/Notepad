import React from "react";
import { connect } from "react-redux";

import AddNoteForm from "./AddNoteForm.jsx";
import Overlay from "./Overlay.jsx";
import { HIDDEN_POPUP } from "../../reducers";


class AddNotePopup extends React.Component {

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
        const showClasses = "add-note-popup add-note-popup--show";
        const hiddenClasses = "add-note-popup";

        return(
            <div className={this.props.isShow ? showClasses : hiddenClasses}>
                <Overlay closePopup={this.closePopup} />

                <div className="add-note-popup__wrap">
                    <AddNoteForm closePopup={this.closePopup} />
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


AddNotePopup.defaultProps = {
    isShow: false
};


export default connect(
    state => ({}),
    dispatch => ({
        closePopup: () => dispatch({ type: HIDDEN_POPUP })
    })
)(AddNotePopup);
