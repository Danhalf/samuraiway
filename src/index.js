import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import postsDB from "./db/PostsDB.js";
import messagesDB from "./db/messagesDB.json";
import dialogsDB from "./db/dialogDB.json";

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsDB} messages={messagesDB} dialogs={dialogsDB} />
  </React.StrictMode>,
  document.getElementById('root')
);

