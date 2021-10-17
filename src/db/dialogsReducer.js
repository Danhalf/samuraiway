const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id: ~~(Math.random() * 1000),
                message: state.inputMessage,
            }
            state.messages.push(newMessage)
            state.inputMessage = ''
            return state
        case UPDATE_DIALOG_MESSAGE:
            state.inputMessage = action.message;
            return state
        default :
            console.log(`Unknown type ${ action.type }`)
            return state
    }

    return state
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateDialogMessageActionCreator = text => ({ type: UPDATE_DIALOG_MESSAGE, message: text })

export default dialogsReducer