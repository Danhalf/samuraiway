const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE = ' UPDATE-POST-MESSAGE'

let initialState = {

    posts: [
        { id: 1, message: `It's my 1st post!`, likesCount: 24 },
        { id: 2, message: `It's my 2st post!`, likesCount: 4 },
        { id: 3, message: `It's my 3st post!`, likesCount: 4 }
    ],
    inputMessage: '',
    buttonDisabled() {
        return this.inputMessage.length < 1
    }
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
            return Object.assign({}, state, addPostAction)
        case UPDATE_POST_MESSAGE :
            state.inputMessage = action.message;
            return Object.assign({}, state, updatePostMessageAction)
        default :
            return state
    }

}

export const addPostAction = () => ({ type: ADD_POST })
export const updatePostMessageAction = text => ({ type: UPDATE_POST_MESSAGE, message: text })

export default profileReducer