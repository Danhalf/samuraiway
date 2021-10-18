import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./db/redux-store"
import { BrowserRouter } from "react-router-dom";


const renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={ state } dispatch={ store.dispatch }
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})