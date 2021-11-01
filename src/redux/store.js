import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import { AvatarGenerator } from "random-avatar-generator";

const generator = new AvatarGenerator();

let store = {
    _watch() {
        return ''
    },


    _state: {

        dialogPage: {

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

            inputMessage: ''
        },
        profilePage: {

            posts: [
                { id: 1, message: `It's my 1st post!`, likesCount: 24 },
                { id: 2, message: `It's my 2st post!`, likesCount: 4 },
                { id: 3, message: `It's my 3st post!`, likesCount: 4 }
            ],
            inputMessage: ''
        }
    },

    get state() {
        return this._state
    },


    subscribe(observer) {
        this._watch = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

        this._watch(this._state)
    }
}
// cmt


export default store


