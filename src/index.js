import store from "./db/state"
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={ store }
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store)

store.subscribe(renderEntireTree)