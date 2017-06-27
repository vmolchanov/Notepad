import React from "react";
import AddNoteForm from "./AddNoteForm.jsx";
import Overlay from "./Overlay.jsx";


export default class AddNotePopup extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            isShow: this.props.isShow
        };
    }


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
