import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


const Dialogs = props => {
    let dialogs = props.dialogs
    let messages = props.messages
    const CurrentDialogs = Object.keys(dialogs).map((dialog) => (
        <Dialog
            key={ dialogs[dialog].id }
            name={ dialogs[dialog].name }
            avatar={ dialogs[dialog].avatar }
            link={ `id??${ dialogs[dialog].id }_name??${ dialogs[dialog].name }` }
        />
    ));

    const CurrentMessages = Object.keys(messages).map((message) => (
        <Message
            key={ messages[message].id }
            message={ messages[message].message }
            updateDialogsMessage={ props.updateDialogsMessage }
        />
    ));

    let newMessage = props.inputMessage

    const onChangeText = (evt) => {
        let text = evt.target.value;
        props.changeText(text)
    }

    const onAddMessage = () => {
        props.addMessage()
    }

    const checkIsDisabled = () => props.isDisabled()

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
                        onChange={ onChangeText }
                        value={ newMessage }
                    />

                    <Button
                        variant="contained"
                        endIcon={ <SendIcon/> }
                        onClick={ onAddMessage }
                        disabled={ checkIsDisabled() }
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
