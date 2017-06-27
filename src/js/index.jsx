import "normalize.css"
import "../scss/style.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App.jsx";

import appStore from "../reducers"


const store = createStore(appStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("app")
    );
};

let unsubscribe = store.subscribe(() => {
    console.log("Store was changed");
    renderApp();
});

renderApp();

