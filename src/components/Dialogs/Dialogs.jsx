import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { addMessageActionCreator, updateDialogMessageActionCreator } from "../../db/dialogsReducer";
import TextField from '@mui/material/TextField';


const Dialogs = props => {
    const CurrentDialogs = Object.keys(props.state.dialogs).map((dialog) => (
        <Dialog
            key={ props.state.dialogs[dialog].id }
            name={ props.state.dialogs[dialog].name }
            avatar={ props.state.dialogs[dialog].avatar }
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

    let newMessage = props.state.inputMessage

    const changeText = (evt) => {
        let text = evt.target.value;
        props.dispatch(updateDialogMessageActionCreator(text))
        isDisabled()
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const isDisabled = () => newMessage === ''

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
                    <TextField
                        fullWidth
                        label="Мое сообщение..."
                        id="outlined-uncontrolled"
                        onChange={ changeText }
                        value={ newMessage }
                    />

                    <Button
                        variant="contained"
                        endIcon={ <SendIcon/> }
                        onClick={ addMessage }
                        disabled={ isDisabled() }
                        sx={ { backgroundColor: "rgb(206, 142, 156)", borderRadius: '0 0 8px 8px' } }
                    >
                        Добавить сообщение
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
