const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE = ' UPDATE-POST-MESSAGE'

const profileReducer = (state, action) => {


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
            console.log(`Unknown type ${ action.type }`)
            return state
    }


    return state
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostMessageActionCreator = text => ({ type: UPDATE_POST_MESSAGE, message: text })

export default profileReducer