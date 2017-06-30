import React from "react";
import { connect } from "react-redux";


class Overlay extends React.Component {

    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }


    /**
     * Визуализация компонента
     * @returns {string} html разметка
     */
    render() {
        return(
            <div className="overlay" onClick={this._handleClick}></div>
        );
    }


    /**
     * Обработчик клина на overlay
     * @private
     */
    _handleClick() {
        this.props.closePopup();
    }

}


export default connect(
    state => ({}),
    dispatch => ({})
)(Overlay);
