import React from "react";
import { connect } from "react-redux";

import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";
import AddNotePopup from "./AddNotePopup.jsx";
import NotePopup from "./NotePopup.jsx";
import EditNotePopup from "./EditNotePopup.jsx";


class App extends React.Component {

    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        return(
            <div>
                <Header />
                <NotesList notes={this.props.notes} />
                <AddNotePopup isShow={this.props.isShowAddNotePopup} />
                <EditNotePopup isShow={this.props.isEditNote} />
                <NotePopup isShow={this.props.isShowNotePopup} noteId={this.props.choosenNote} />
            </div>
        );
    }

}


export default connect(
    state => ({
        notes: state.notes,
        isShowAddNotePopup: state.isShowAddNotePopup,
        isShowNotePopup: state.isShowNotePopup,
        isEditNote: state.isEditNote,
        choosenNote: state.choosenNote
    }),
    dispatch => ({})
)(App);
