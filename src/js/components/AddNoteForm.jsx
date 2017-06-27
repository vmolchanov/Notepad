import React from "react";
import { connect } from "react-redux";
import { HIDDEN_POPUP, ADD_NOTE } from "../../reducers"


class AddNoteForm extends React.Component {

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
        this._clickAddBtn = this._clickAddBtn.bind(this);
    }


    render() {
        let addBtnClasses = !this.state.textareaContent.length
            ? "add-note-form__btn add-note-form__btn--disabled"
            : "add-note-form__btn";

        return(
            <form className="add-note-form">
                <div className="add-note-form__header-block">
                    <label htmlFor="add-note-form__header">Заголовок</label>
                    <input id="add-note-form__header"
                           className="add-note-form__header-input"
                           value={this.state.inputContent}
                           onChange={this._changeInput}/>
                </div>

                <div className="add-note-form__content-block">
                    <label htmlFor="add-note-form__text">Текст</label>
                    <textarea id="add-note-form__text"
                              className="add-note-form__textarea"
                              value={this.state.textareaContent}
                              onChange={this._changeTextarea} />
                </div>

                <div className="add-note-form__buttons-block">
                    <button className="add-note-form__btn"
                            onClick={this._clickCancelBtn}>
                        Отмена
                    </button>

                    <button className={addBtnClasses}
                            onClick={this._clickAddBtn}
                            disabled={!this.state.textareaContent.length}>
                        Добавить
                    </button>
                </div>
            </form>
        );
    }


    /**
     * Получение текущей даты в формате dd.mm.yy
     * @returns {string}
     * @private
     */
    _getCurrentDate() {
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
        this.setState({
            inputContent: event.target.value,
            textareaContent: this.state.textareaContent
        });
    }


    /**
     * Обработка события изменения textarea
     * @param event
     * @private
     */
    _changeTextarea(event) {
        this.setState({
            textareaContent: event.target.value,
            inputContent: this.state.inputContent
        });
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

        let noteHeader = !this.state.inputContent.length ? "Без заголовка" : this.state.inputContent;
        let noteContent = this.state.textareaContent;
        let noteDate = this._getCurrentDate();

        if (!noteContent.length)
            return;

        this.props.addNote({
            id: Date.now(),
            header: noteHeader,
            content: noteContent,
            date: noteDate
        });

        this.setState({
            inputContent: "",
            textareaContent: ""
        });
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
        closePopup: () => dispatch({ type: HIDDEN_POPUP }),
        addNote: (note) => dispatch({ type: ADD_NOTE, data: note })
    })
)(AddNoteForm);
