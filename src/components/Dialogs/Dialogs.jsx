import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import CurrentDialogs from './CurrentDialogs.json';

const currentDialog = Object.keys(CurrentDialogs).map((dialog) => (
    <Dialog
        key={CurrentDialogs[dialog].id}
        name={CurrentDialogs[dialog].name}
        link={`id??${CurrentDialogs[dialog].id}_name??${CurrentDialogs[dialog].name}`}
    />
));

let messages = [
    {id: 1, message: 'Wazzup'},
    {id: 2, message: "Whut a u doing?"},
    {id: 3, message: "Shut up, mzfkr!"}
]

const Messages = (props) => <div className={style.message__item}>{props.message}</div>;

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                { currentDialog }
            </div>
            <div className={style.messages__items}>
                {messages.map(m=> <Messages message={m.message}/>)}
            </div>
        </div>
    );
}

export default Dialogs;
