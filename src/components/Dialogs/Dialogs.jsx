import React, { createRef } from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';

let newMessageRef = createRef();

const Dialogs = props => {
    const CurrentDialogs = Object.keys(props.state.dialogs).map((dialog) => (
        <Dialog
            key={ props.state.dialogs[dialog].id }
            name={ props.state.dialogs[dialog].name }
            link={ `id??${ props.state.dialogs[dialog].id }_name??${ props.state.dialogs[dialog].name }` }
        />
    ));

    const CurrentMessages = Object.keys(props.state.messages).map((message) => (
        <Message
            key={ props.state.messages[message].id }
            message={ props.state.messages[message].message }
            updateDialogsMessage={ props.updateDialogsMessage }
        />
    ));

    const changeText = () => {
        let text = newMessageRef.current.value
        props.updateDialogsMessage(text)
    }

    return (
        <div className={ style.dialogs }>
            <div className={ style.dialogs__items }>
                { CurrentDialogs }
            </div>
            <div className={ style.messages }>
                <div className={ style.messages__items }>
                    { CurrentMessages }
                </div>
                <div className={ style.messages__add }>
                    {/*<TextField*/ }
                    {/*    fullWidth*/ }
                    {/*    // label="Мое сообщение..."*/ }
                    {/*    id="outlined-uncontrolled"*/ }
                    {/*    onChange={ changeText }*/ }
                    {/*    ref={ newMessageRef }*/ }
                    {/*    defaultValue={ props.state.inputMessage }*/ }
                    {/*/>*/ }
                    <textarea
                        // label="Мое сообщение..."
                        id="outlined-uncontrolled"
                        onChange={ changeText }
                        ref={ newMessageRef }
                        defaultValue={ props.state.inputMessage }
                    />

                    <Button
                        variant="contained"
                        endIcon={ <SendIcon/> }
                        onClick={ props.addMessage }
                        sx={ { backgroundColor: "rgb(206, 142, 156)" } }
                    >
                        Добавить сообщение
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
