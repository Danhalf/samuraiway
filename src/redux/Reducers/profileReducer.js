import { UserAvatar, UserBackground } from "../ImagesLinks";

const ADD_POST = 'ADD_POST'
const UPDATE_POST_MESSAGE = ' UPDATE_POST_MESSAGE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let
    initialState = {
        profile: null,
        posts: [
            { id: 1, message: `It's my 1st post!`, likesCount: 24, userAvatar: UserAvatar },
            { id: 2, message: `It's my 2st post!`, likesCount: 4, userAvatar: UserAvatar },
            { id: 3, message: `It's my 3st post!`, likesCount: 4, userAvatar: UserAvatar }
        ],
        inputMessage: '',
        userBackgroundImage: UserBackground,
        userAvatar: UserAvatar,
        buttonDisabled() {
            return this.inputMessage.length < 1
        }
    }

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: ~~(Math.random() * 1000),
                message: state.inputMessage,
                likesCount: ~~(Math.random() * 10),
                userAvatar: UserAvatar
            }
            return {
                ...state, posts: [ ...state.posts, newPost ], inputMessage: ''
            }
        case
        UPDATE_POST_MESSAGE :
            return { ...state, inputMessage: action.message }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default :
            return state
    }

}

export const addPost = () => ({ type: ADD_POST })
export const updatePostMessage = text => ({ type: UPDATE_POST_MESSAGE, message: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

export default profileReducer