import React from "react";
import { connect } from "react-redux";

import NotesCounter from "./NotesCounter.jsx";
import AddNoteButton from "./AddNoteButton.jsx";


class Header extends React.Component {

    render() {
        return(
            <div className="main-header">
                <div className="container">
                    <div className="main-header__counter">
                        <NotesCounter notesCount={this.props.notesCount} />
                    </div>

                    <div className="main-header__button">
                        <AddNoteButton />
                    </div>
                </div>
            </div>
        );
    }

}


export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(Header);
