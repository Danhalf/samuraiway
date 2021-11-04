import { AvatarGenerator } from "random-avatar-generator";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'

const avatarGenerator = new AvatarGenerator();
const idGenerator = () => Math.random().toString(36).substr(2, 16);


let initialState = {
    dialogs: [

        {
            "id": idGenerator(),
            'avatar': avatarGenerator.generateRandomAvatar(),
            "name": "Andre",
            "online": true
        },
        {
            "id": idGenerator(),
            'avatar': avatarGenerator.generateRandomAvatar(),
            "name": "Thomas",
            "online": false
        },
        {
            "id": idGenerator(),
            'avatar': avatarGenerator.generateRandomAvatar(),
            "name": "Dru",
            "online": false
        },
        {
            "id": idGenerator(),
            'avatar': avatarGenerator.generateRandomAvatar(),
            "name": "Shone",
            "online": false
        },
        {
            "id": idGenerator(),
            'avatar': avatarGenerator.generateRandomAvatar(),
            "name": "Reythis",
            "online": true
        },
        {
            "id": idGenerator(),
            'avatar': avatarGenerator.generateRandomAvatar(),
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
                id: idGenerator(),
                message: state.inputMessage,
            }
            return { ...state, messages: [ ...state.messages, newMessage ], inputMessage: '' }
        case UPDATE_DIALOG_MESSAGE:
            return { ...state, inputMessage: action.message };
        default :
            return state
    }

}

export const addMessageAction = () => ({ type: ADD_MESSAGE })
export const updateDialogMessageAction = text => ({ type: UPDATE_DIALOG_MESSAGE, message: text })

export default dialogsReducer