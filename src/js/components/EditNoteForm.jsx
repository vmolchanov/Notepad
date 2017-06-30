import React from "react";
import { connect } from "react-redux";

import { SAVE_NOTE } from "../../reducers";


class EditNoteForm extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            inputContent: this.props.inputContent,
            textareaContent: this.props.textareaContent
        };

        this._changeInput = this._changeInput.bind(this);
        this._changeTextarea = this._changeTextarea.bind(this);
        this._clickCancelBtn = this._clickCancelBtn.bind(this);
        this._clickSaveBtn = this._clickSaveBtn.bind(this);
    }


    /**
     * Установка значений для input и textarea(uncontrolled components)
     */
    componentDidUpdate() {
        this._headerInput.value = this.props.inputContent;
        this._textareaContent.value = this.props.textareaContent;
        this._setSaveButtonWork();
    }


    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        return(
            <form className="edit-note-form" onSubmit={this._clickSaveBtn}>
                <div className="edit-note-form__header-block">
                    <label htmlFor="edit-note-form__header">Заголовок</label>
                    <input id="edit-note-form__header"
                           className="edit-note-form__header-input"
                           defaultValue={this.props.inputContent}
                           onChange={this._changeInput}
                           ref={input => this._headerInput = input} />
                </div>

                <div className="edit-note-form__content-block">
                    <label htmlFor="edit-note-form__text">Текст</label>
                    <textarea id="edit-note-form__text"
                              className="edit-note-form__textarea"
                              defaultValue={this.props.textareaContent}
                              onChange={this._changeTextarea}
                              ref={textarea => this._textareaContent = textarea}/>
                </div>

                <div className="edit-note-form__buttons-block">
                    <button className="edit-note-form__btn"
                            onClick={this._clickCancelBtn}>
                        Отмена
                    </button>

                    <button className="edit-note-form__btn"
                            onClick={this._clickSaveBtn}
                            disabled={!this.props.textareaContent}
                            ref={button => this._saveButton = button}>
                        Сохранить
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
        this._headerInput.value = event.target.value;
    }


    /**
     * Обработка события изменения textarea
     * @param event
     * @private
     */
    _changeTextarea(event) {
        this._textareaContent.value = event.target.value;
        this._setSaveButtonWork();
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
     * Обработка события нажатия на кнопку <Сохранить>
     * @param event
     * @private
     */
    _clickSaveBtn(event) {
        event.preventDefault();

        let noteHeader = !this._headerInput.value.length ? "Без заголовка" : this._headerInput.value;
        let noteContent = this._textareaContent.value;
        let noteDate = EditNoteForm.getCurrentDate();

        if (!noteContent.length)
            return;

        this._headerInput.value = "";
        this._textareaContent.value = "";

        this.props.saveNote({
            id: Date.now(),
            header: noteHeader,
            content: noteContent,
            date: noteDate
        });
    }


    /**
     * Устанавливает или удаляет значение disabled для кнопки
     * @private
     */
    _setSaveButtonWork() {
        this._saveButton.disabled = !this._textareaContent.value.length;
        if (this._textareaContent.value.length) {
            if (this._saveButton.classList.contains("edit-note-form__btn--disabled")) {
                this._saveButton.classList.remove("edit-note-form__btn--disabled");
            }
        } else {
            this._saveButton.classList.add("edit-note-form__btn--disabled");
        }
    }

}


EditNoteForm.defaultProps = {
    inputContent: "",
    textareaContent: ""
};



EditNoteForm.propTypes = {
    inputContent: React.PropTypes.string,
    textareaContent: React.PropTypes.string
};


export default connect(
    state => ({}),
    dispatch => ({
        saveNote: note => dispatch({ type: SAVE_NOTE, data: note })
    })
)(EditNoteForm);
