import React from "react";
import { connect } from "react-redux";

import { ADD_NOTE } from "../../reducers";


class AddNoteForm extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this._changeInput = this._changeInput.bind(this);
        this._changeTextarea = this._changeTextarea.bind(this);
        this._clickCancelBtn = this._clickCancelBtn.bind(this);
        this._clickAddBtn = this._clickAddBtn.bind(this);
    }


    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        return(
            <form className="add-note-form" onSubmit={this._clickAddBtn}>
                <div className="add-note-form__header-block">
                    <label htmlFor="add-note-form__header">Заголовок</label>
                    <input id="add-note-form__header"
                           className="add-note-form__header-input"
                           defaultValue={this.props.inputContent}
                           onChange={this._changeInput}
                           ref={input => this._headerInput = input} />
                </div>

                <div className="add-note-form__content-block">
                    <label htmlFor="add-note-form__text">Текст</label>
                    <textarea id="add-note-form__text"
                              className="add-note-form__textarea"
                              defaultValue={this.props.textareaContent}
                              onChange={this._changeTextarea}
                              ref={textarea => this._textareaContent = textarea}/>
                </div>

                <div className="add-note-form__buttons-block">
                    <button className="add-note-form__btn"
                            onClick={this._clickCancelBtn}>
                        Отмена
                    </button>

                    <button className="add-note-form__btn add-note-form__btn--disabled"
                            onClick={this._clickAddBtn}
                            disabled={!this.props.textareaContent}
                            ref={button => this._addButton = button}>
                        Добавить
                    </button>
                </div>
            </form>
        );
    }


    /**
     * Получение текущей даты в формате dd.mm.yy
     * @returns {string}
     * @static
     */
    static getCurrentDate() {
        let today = new Date();
        let day = today.getDate().toString();
        let month = (today.getMonth() + 1).toString();
        let year = today.getUTCFullYear().toString();

        return `${day.length === 1 ? "0" : ""}${day}.${month.length === 1 ? "0" : ""}${month}.${year.slice(2)}`;
    }


    /**
     * Обработка события изменения input
     * @param event
     * @private
     */
    _changeInput(event) {
        event.preventDefault();
    }


    /**
     * Обработка события изменения textarea
     * @param event
     * @private
     */
    _changeTextarea(event) {
        event.preventDefault();
        this._setAddButtonWork();
    }


    /**
     * Обработка события нажатия на кнопку <Отмена>
     * @param event
     * @private
     */
    _clickCancelBtn(event) {
        event.preventDefault();
        this.props.closePopup();
    }


    /**
     * Обработка события нажатия на кнопку <Добавить>
     * @param event
     * @private
     */
    _clickAddBtn(event) {
        event.preventDefault();

        let noteHeader = !this._headerInput.value.length ? "Без заголовка" : this._headerInput.value;
        let noteContent = this._textareaContent.value;
        let noteDate = AddNoteForm.getCurrentDate();

        if (!noteContent.length)
            return;

        this._headerInput.value = "";
        this._textareaContent.value = "";

        this.props.addNote({
            id: Date.now(),
            header: noteHeader,
            content: noteContent,
            date: noteDate
        });
    }


    /**
     * Устанавливает или удаляет значение disabled для кнопки <Добавить>
     * @private
     */
    _setAddButtonWork() {
        this._addButton.disabled = !this._textareaContent.value.length;

        if (this._textareaContent.value.length) {
            if (this._addButton.classList.contains("add-note-form__btn--disabled")) {
                this._addButton.classList.remove("add-note-form__btn--disabled");
            }
        } else {
            this._addButton.classList.add("add-note-form__btn--disabled");
        }
    }

}


AddNoteForm.defaultProps = {
    inputContent: "",
    textareaContent: ""
};


AddNoteForm.propTypes = {
    inputContent: React.PropTypes.string,
    textareaContent: React.PropTypes.string
};


export default connect(
    state => ({}),
    dispatch => ({
        addNote: (note) => dispatch({ type: ADD_NOTE, data: note })
    })
)(AddNoteForm);
