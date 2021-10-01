import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import postsDB from "./db/PostsDB.js";
// import messagesDB from "./db/messagesDB.json";
// import dialogsDB from "./db/dialogDB.json";



const renderEntireTree = (state, addPost) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
export default renderEntireTree




