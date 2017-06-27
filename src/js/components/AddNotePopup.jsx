import React from "react";
import AddNoteForm from "./AddNoteForm.jsx";
import Overlay from "./Overlay.jsx";


export default class AddNotePopup extends React.Component {

    render() {
        let showClasses = "add-note-popup add-note-popup--show";
        let hiddenClasses = "add-note-popup";

        return(
            <div className={this.props.isShow ? showClasses : hiddenClasses}>
                <Overlay />

                <div className="add-note-popup__wrap">
                    <AddNoteForm />
                </div>
            </div>
        );
    }

}


AddNotePopup.defaultProps = {
    isShow: false
};
