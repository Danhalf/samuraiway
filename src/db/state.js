import renderEntireTree from "../render";

const state = {
    dialogPage: {
        dialogs: [
            {
                "id": "25",
                "name": "Andre"
            },
            {
                "id": "241",
                "name": "Thomas"
            },
            {
                "id": "122",
                "name": "Dru"
            },
            {
                "id": "2125",
                "name": "Coan"
            },
            {
                "id": "42",
                "name": "Reythis"
            },
            {
                "id": "12200",
                "name": "Restorator"
            }
        ],

        messages: [
            {
                "id": 1,
                "message": "Wazzup"
            },
            {
                "id": 2,
                "message": "Whut a u doing?"
            },
            {
                "id": 3,
                "message": "Shut up, mzfkr!"
            }
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: `It's my 1st post!`, likesCount: 24},
            {id: 2, message: `It's my 2st post!`, likesCount: 4},
            {id: 3, message: `It's my 3st post!`, likesCount: 4}
        ]
    }
}

export const addPost = (postMessage) => {

    const getID = () => Math.max( ...state.profilePage.posts.map(post=> isNaN(post.id) ? 0 : post.id) )
    let newPost = {
        id: getID() + 1,
        message: postMessage,
        likesCount: ~~(Math.random() * 10)
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state, addPost);
}


export default state