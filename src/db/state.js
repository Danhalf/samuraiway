import renderEntireTree from "../render";

const state = {
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
                "name": "Coan",
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

        messages: [
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
}

const getID = (...page) => {
    return Math.max(...page.map(obj => isNaN(obj.id) ? 0 : obj.id)) + 1
}

export const addPost = () => {
    let newPost = {
        id: getID(...state.profilePage.posts),
        message: state.profilePage.inputMessage,
        likesCount: ~~(Math.random() * 10)
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.inputMessage = ''
    renderEntireTree(state, addPost);
}

export const updatePostMessage = (message) => {
    state.profilePage.inputMessage = message;
    renderEntireTree(state, updatePostMessage);
}

export const addMessage = () => {
    let newMessage = {
        id: getID(...state.dialogPage.messages),
        message: state.dialogPage.inputMessage,
    }
    state.dialogPage.messages.push(newMessage)
    state.dialogPage.inputMessage = ''
    renderEntireTree(state, addMessage);
}

export const updateDialogsMessage = (message) => {
    state.dialogPage.inputMessage = message;
    console.log(message);
    renderEntireTree(state, updateDialogsMessage);
}


export default state