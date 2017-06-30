import React from "react";
import { connect } from "react-redux";

import EditIcon from "./EditIcon.jsx";
import DeleteIcon from "./DeleteIcon.jsx";
import { EDIT_NOTE, DELETE_NOTE } from "../../reducers";

class NoteController extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this._clickEdit = this._clickEdit.bind(this);
        this._clickDelete = this._clickDelete.bind(this);
    }


    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        return(
            <div className="note-controller">
                <div className="note-controller__edit" onClick={this._clickEdit}>
                    <EditIcon />
                </div>
                <div className="note-controller__delete" onClick={this._clickDelete}>
                    <DeleteIcon />
                </div>
            </div>
        );
    }


    /**
     * Обработчик клика на иконку изменения заметки (карандаш)
     * @private
     */
    _clickEdit() {
        this.props.onEditClick(this.props.id);
    }


    /**
     * Обработчик клика на иконку удаления заметки (корзина)
     * @private
     */
    _clickDelete() {
        this.props.onDeleteClick(this.props.id);
    }

}


export default connect(
    state => ({}),
    dispatch => ({
        onEditClick: id => dispatch({ type: EDIT_NOTE, data: id }),
        onDeleteClick: id => dispatch({ type: DELETE_NOTE, data: id })
    })
)(NoteController);
