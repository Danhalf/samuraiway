import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./db/redux-store"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


const renderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={ store }>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
    ;
}

renderEntireTree()

store.subscribe(() => {
    renderEntireTree()
})