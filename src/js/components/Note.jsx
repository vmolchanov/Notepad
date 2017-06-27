import React from "react";


export default class Note extends React.Component {

    render() {
        let noteContent = this.props.noteContent;

        return(
            <div className="note">
                <div className="note__content">
                    <h3>{this.props.header}</h3>
                    <p>{noteContent.length > 110 ? noteContent.slice(0, 110) + "..." : noteContent}</p>
                </div>
                <div className="note__date">
                    <span>{this.props.date}</span>
                </div>
            </div>
        );
    }

}


Note.propTypes = {
    header: React.PropTypes.string,
    noteContent: React.PropTypes.string,
    date: React.PropTypes.string
};

