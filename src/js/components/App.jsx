import React from "react";
import { connect } from "react-redux";

import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";
import AddNotePopup from "./AddNotePopup.jsx"


class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <Header notesCount={this.props.store.notesCount} />
                <NotesList notes={this.props.store.notes} />
                <AddNotePopup isShow={this.props.store.isShowAddNotePopup} />
            </div>
        );
    }

}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(App);
