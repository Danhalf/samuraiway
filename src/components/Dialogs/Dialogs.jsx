import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";




function Dialogs(props) {
    const CurrentDialogs = Object.keys(props.dialogs).map((dialog) => (
        <Dialog
            key={props.dialogs[dialog].id}
            name={props.dialogs[dialog].name}
            link={`id??${props.dialogs[dialog].id}_name??${props.dialogs[dialog].name}`}
        />
    ));

    const CurrentMessages = Object.keys(props.messages).map((message) => (
        <Message
            key={props.messages[message].id}
            message={props.messages[message].message}
        />
    ));
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
