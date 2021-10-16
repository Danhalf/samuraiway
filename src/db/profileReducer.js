import { getID } from "./special";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_MESSAGE = ' UPDATE-POST-MESSAGE'

const profileReducer = (state, action) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 44,
                message: this._state.profilePage.inputMessage,
                likesCount: ~~(Math.random() * 10)
            }
            state.posts.push(newPost)
            state.inputMessage = ''
            break
        case UPDATE_POST_MESSAGE :
            state.inputMessage = action.message;
            break
        default :
            console.log(`Unknown type ${ action.type }`)
            break
    }


    return state
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostMessageActionCreator = text => ({ type: UPDATE_POST_MESSAGE, message: text })

export default profileReducer