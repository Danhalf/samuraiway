import React from 'react';
import style from './Message.module.css';

const Message = (props) => <div className={style.message__item}>{props.message}</div>;

export default Message;
