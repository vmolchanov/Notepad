import React from "react";
import { connect } from "react-redux";

import { SHOW_ADD_NOTE_POPUP } from "../../reducers";


class AddNoteButton extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }


    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        return (
            <div className="add-note-button" onClick={this._handleClick}>
                <div className="add-note-button__plus">+</div>
                <span className="add-note-button__name">Добавить заметку</span>
            </div>
        );
    }


    /**
     * Обработка события нажатия на кнопку <Добавить>
     * @private
     */
    _handleClick() {
        this.props.openPopup();
    }

}


export default connect(
    state => ({}),
    dispatch => ({
        openPopup: () => dispatch({ type: SHOW_ADD_NOTE_POPUP, data: true })
    })
)(AddNoteButton);
