import store from "./db/state"
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ store.state }
                 dispatch={ store.dispatch.bind(store) }
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree)