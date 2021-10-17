import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./db/redux-store"


const renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={ state }
                 dispatch={ store.dispatch }
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})