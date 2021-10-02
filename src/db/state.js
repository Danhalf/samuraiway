let store = {
    renderEntireTree() {
        return ''
    },

    state: {
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

    getID(...page) {
        return Math.max(...page.map(obj => isNaN(obj.id) ? 0 : obj.id)) + 1
    },

    addPost() {
        let newPost = {
            id: store.getID(...store.state.profilePage.posts),
            message: store.state.profilePage.inputMessage,
            likesCount: ~~(Math.random() * 10)
        }
        store.state.profilePage.posts.push(newPost)
        store.state.profilePage.inputMessage = ''
        store.renderEntireTree();
    },

    updatePostMessage(message) {
        store.state.profilePage.inputMessage = message;
        store.renderEntireTree();
    },

    addMessage() {
        let newMessage = {
            id: store.getID(...store.state.dialogPage.messages),
            message: store.state.dialogPage.inputMessage,
        }
        store.state.dialogPage.messages.push(newMessage)
        store.state.dialogPage.inputMessage = ''
        store.renderEntireTree();
    },

    updateDialogsMessage(message) {
        store.state.dialogPage.inputMessage = message;
        store.renderEntireTree();
    },

    subscribe(observer) {
        store.renderEntireTree = observer
    }
}


export default store


