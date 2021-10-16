import { getID } from "./special";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'

const dialogsReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id: getID(state.posts),
                message: state.inputMessage,
            }
            state.messages.push(newMessage)
            state.inputMessage = ''
            break
        case UPDATE_DIALOG_MESSAGE:
            state.inputMessage = action.message;
            break
        default :
            console.log(`Unknown type ${ action.type }`)
            break
    }

    return state
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateDialogMessageActionCreator = text => ({ type: UPDATE_DIALOG_MESSAGE, message: text })

export default dialogsReducer