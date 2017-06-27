import React from "react";


export default class NotesCounter extends React.Component {

    render() {
        return(
            <div className="notes-counter">
                <span className="notes-counter__description">Количество заметок: </span>
                <span className="notes-counter__value">{this.props.notesCount}</span>
            </div>
        );
    }

}


NotesCounter.defaultProps = {
    notesCount: 0
};


NotesCounter.propTypes = {
    notesCount: React.PropTypes.number
};
