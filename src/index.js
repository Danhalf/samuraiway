import state from "./db/state"
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state }
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state)

state.subscribe(renderEntireTree)