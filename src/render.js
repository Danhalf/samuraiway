import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addMessage, updateDialogsMessage, addPost, updatePostMessage } from "./db/state";


const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state }
                 addPost={ addPost }
                 addMessage={ addMessage }
                 updatePostMessage={ updatePostMessage }
                 updateDialogsMessage={ updateDialogsMessage }
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
export default renderEntireTree




