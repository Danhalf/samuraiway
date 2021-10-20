import { AvatarGenerator } from "random-avatar-generator";


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'

const generator = new AvatarGenerator();

let initialState = {
    dialogs: [
        {
            "id": "25",
            'avatar': generator.generateRandomAvatar(),
            "name": "Andre",
            "online": true
        },
        {
            "id": "241",
            'avatar': generator.generateRandomAvatar(),
            "name": "Thomas",
            "online": false
        },
        {
            "id": "122",
            'avatar': generator.generateRandomAvatar(),
            "name": "Dru",
            "online": false
        },
        {
            "id": "2125",
            'avatar': generator.generateRandomAvatar(),
            "name": "Shone",
            "online": false
        },
        {
            "id": "42",
            'avatar': generator.generateRandomAvatar(),
            "name": "Reythis",
            "online": true
        },
        {
            "id": "12200",
            'avatar': generator.generateRandomAvatar(),
            "name": "Restor",
            "online": false
        }
    ],
    messages:
        [
            { id: 1, message: "Wazzup" },
            { id: 2, message: "Whut a u doing?" },
            { id: 3, message: "Shut up, mzfkr!" }
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
            return Object.assign({}, state, { addMessageAction })
        case UPDATE_DIALOG_MESSAGE:
            state.inputMessage = action.message;
            return Object.assign({}, state, { updateDialogMessageAction })
        default :
            return state
    }

}

export const addMessageAction = () => ({ type: ADD_MESSAGE })
export const updateDialogMessageAction = text => ({ type: UPDATE_DIALOG_MESSAGE, message: text })

export default dialogsReducer