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

const Message = (props) => <div className={style.message__item}>{props.message}</div>;

function Dialogs() {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__items}>
        {currentDialog}
        <Dialog name="Test" link="href"></Dialog>
        <Dialog name="Testa" link="hrefa"></Dialog>
      </div>
      <div className={style.messages__items}>
        <Message message="Wazzup" />
        <Message message="Whut a u doing?" />
        <Message message="Shut up, mzfkr!" />
      </div>
    </div>
  );
}

export default Dialogs;
