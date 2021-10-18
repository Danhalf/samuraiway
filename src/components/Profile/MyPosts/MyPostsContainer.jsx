import React from 'react';
import { updatePostMessageActionCreator, addPostActionCreator } from "../../../db/profileReducer";
import MyPosts from "./MyPosts";


function MyPostsContainer(props) {
    const changeText = (text) => {
        props.dispatch(updatePostMessageActionCreator(text))
        isDisabled()
    }

    const addPost = () => props.dispatch(addPostActionCreator())
    const isDisabled = () => props.state.inputMessage === ''

    return (
        <MyPosts
            addPost={ addPost }
            changeText={ changeText }
            isDisabled={ isDisabled }
            posts={ props.state.posts }
            inputMessage={ props.state.inputMessage }
            avatar={ props.avatar }
        />
    );
}

export default MyPostsContainer;