import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

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
        />
    ));

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
                    <TextField fullWidth label="Мое сообщение..." id="fullWidth" />
                    <Button variant="contained"  endIcon={<SendIcon />} className={ style.messages__add_btn } sx={{backgroundColor: "rgb(206, 142, 156)"}}>
                        Добавить сообщение
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
