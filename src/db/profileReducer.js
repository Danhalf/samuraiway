const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE = ' UPDATE-POST-MESSAGE'

let initialState = {

    posts: [
        { id: 1, message: `It's my 1st post!`, likesCount: 24 },
        { id: 2, message: `It's my 2st post!`, likesCount: 4 },
        { id: 3, message: `It's my 3st post!`, likesCount: 4 }
    ],
    inputMessage: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 44,
                message: state.inputMessage,
                likesCount: ~~(Math.random() * 10)
            }
            state.posts.push(newPost)
            state.inputMessage = ''
            return state
        case UPDATE_POST_MESSAGE :
            state.inputMessage = action.message;
            return state
        default :
            return state
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostMessageActionCreator = text => ({ type: UPDATE_POST_MESSAGE, message: text })

export default profileReducer