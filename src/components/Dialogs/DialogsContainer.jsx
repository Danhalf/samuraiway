import { addMessageAction, updateDialogMessageAction } from "../../db/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = state => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    inputMessage: state.dialogsPage.inputMessage,
    buttonDisabled: state.dialogsPage.buttonDisabled
});


const mapDispatchToProps = (dispatch) => ({
    changeText: (text) => {
        dispatch(updateDialogMessageAction(text))
    },
    addMessage: () => {
        dispatch(addMessageAction())
    }
});
const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Dialogs)

export default DialogsContainer;
