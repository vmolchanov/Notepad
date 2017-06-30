import React from "react";

import Note from "./Note.jsx";


export default class NotesList extends React.Component {

    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        return(
            <div className="notes-list">
                <div className="container">
                    {
                        this.props.notes.slice().reverse().map((note, index) => {
                            return <Note header={note.header}
                                         noteContent={note.content}
                                         date={note.date}
                                         id={note.id}
                                         key={index} />;
                        })
                    }
                </div>
            </div>
        );
    }

}
