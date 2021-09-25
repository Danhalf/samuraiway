import React from 'react';
import style from './Dialogs.module.css';
import dialogDB from './Dialog/dialogDB.json';
import messageDB from './Message/messagesDB.json';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";

const CurrentDialogs = Object.keys(dialogDB).map((dialog) => (
    <Dialog
        key={dialogDB[dialog].id}
        name={dialogDB[dialog].name}
        link={`id??${dialogDB[dialog].id}_name??${dialogDB[dialog].name}`}
    />
));

const CurrentMessages = Object.keys(messageDB).map((message) => (
    <Message
        key={messageDB[message].id}
        message={messageDB[message].message}
    />
));


function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {CurrentDialogs}
            </div>
            <div className={style.messages__items}>
                {CurrentMessages}
            </div>
        </div>
    );
}

export default Dialogs;
