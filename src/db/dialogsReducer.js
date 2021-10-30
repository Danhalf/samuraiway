import { AvatarGenerator } from "random-avatar-generator";


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'

const generator = new AvatarGenerator();
const idGenerator = () => Math.random().toString(36).substr(2, 16);


let initialState = {
    dialogs: [

        {
            "id": idGenerator(),
            'avatar': generator.generateRandomAvatar(),
            "name": "Andre",
            "online": true
        },
        {
            "id": idGenerator(),
            'avatar': generator.generateRandomAvatar(),
            "name": "Thomas",
            "online": false
        },
        {
            "id": idGenerator(),
            'avatar': generator.generateRandomAvatar(),
            "name": "Dru",
            "online": false
        },
        {
            "id": idGenerator(),
            'avatar': generator.generateRandomAvatar(),
            "name": "Shone",
            "online": false
        },
        {
            "id": idGenerator(),
            'avatar': generator.generateRandomAvatar(),
            "name": "Reythis",
            "online": true
        },
        {
            "id": idGenerator(),
            'avatar': generator.generateRandomAvatar(),
            "name": "Restor",
            "online": false
        }
    ],
    messages:
        [
            { id: idGenerator(), message: "Wazzup" },
            { id: idGenerator(), message: "Whut a u doing?" },
            { id: idGenerator(), message: "Shut up, mzfkr!" }
        ],
    inputMessage: '',
    buttonDisabled() {
        return this.inputMessage.length < 1
    }
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                id: ~~(Math.random() * 1000),
                message: state.inputMessage,
            }
            state.messages.push(newMessage)
            state.inputMessage = ''
            return Object.assign({}, state)
        case UPDATE_DIALOG_MESSAGE:
            state.inputMessage = action.message;
            return Object.assign({}, state)
        default :
            return state
    }

}

export const addMessageAction = () => ({ type: ADD_MESSAGE })
export const updateDialogMessageAction = text => ({ type: UPDATE_DIALOG_MESSAGE, message: text })

export default dialogsReducer