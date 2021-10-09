const ADD_POST = 'ADD-POST',
    UPDATE_POST_MESSAGE = ' UPDATE-POST-MESSAGE',
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'


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

    _getID(...page) {
        return Math.max(...page.map(obj => isNaN(obj.id) ? 0 : obj.id)) + 1
    },


    subscribe(observer) {
        this._watch = observer
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: store._getID(...this._state.profilePage.posts),
                    message: this._state.profilePage.inputMessage,
                    likesCount: ~~(Math.random() * 10)
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.inputMessage = ''
                this._watch();
                break
            case UPDATE_POST_MESSAGE :
                this._state.profilePage.inputMessage = action.message;
                this._watch();
                break
            case ADD_MESSAGE :
                let newMessage = {
                    id: this._getID(...this._state.dialogPage.messages),
                    message: this._state.dialogPage.inputMessage,
                }
                this._state.dialogPage.messages.push(newMessage)
                this._state.dialogPage.inputMessage = ''
                this._watch();
                break
            case UPDATE_DIALOG_MESSAGE:
                this.state.dialogPage.inputMessage = action.message;
                this._watch();
                break
            default :
                console.log(`Unknown type ${ action.type }`)
                break
        }


    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostMessageActionCreator = text => ({ type: UPDATE_POST_MESSAGE, message: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateDialogMessageActionCreator = text => ({ type: UPDATE_DIALOG_MESSAGE, message: text })

export default store


