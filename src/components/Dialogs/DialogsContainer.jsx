import React from 'react';
import { addMessageActionCreator, updateDialogMessageActionCreator } from "../../db/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = props => {


    const changeText = (text) => {
        props.dispatch(updateDialogMessageActionCreator(text))
        isDisabled()
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const isDisabled = () => props.state.message === ''

    return (
        <Dialogs
            changeText={ changeText }
            addMessage={ addMessage }
            isDisabled={ isDisabled }
            dialogs={ props.state.dialogs }
            messages={ props.state.messages }
            inputMessage={ props.state.inputMessage }
        />
    );
};

export default DialogsContainer;
