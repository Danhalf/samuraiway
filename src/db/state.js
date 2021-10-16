import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _watch() {
        return ''
    },

    _state: {
        dialogPage: {
            dialogs: [
                {
                    "id": "25",
                    "name": "Andre",
                    "online": true
                },
                {
                    "id": "241",
                    "name": "Thomas",
                    "online": false
                },
                {
                    "id": "122",
                    "name": "Dru",
                    "online": false
                },
                {
                    "id": "2125",
                    "name": "Shone",
                    "online": false
                },
                {
                    "id": "42",
                    "name": "Reythis",
                    "online": true
                },
                {
                    "id": "12200",
                    "name": "Restorator",
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
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogPage, action)
    }
}
// cmt


export default store


