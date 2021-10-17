import React from 'react';
import styles from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import { updatePostMessageActionCreator, addPostActionCreator } from "../../../db/profileReducer";
import { TextField } from "@mui/material";


function MyPosts(props) {
    const postElements = props.state.posts.map((post, index) =>
        <MyPost key={ index + post.id } message={ post.message }
                likes={ post.likesCount }
                avatar={ props.avatar }
        />)

    const changeText = (evt) => {
        let text = evt.target.value
        props.dispatch(updatePostMessageActionCreator(text))
        console.log(props.dispatch(updatePostMessageActionCreator(text)))
    }

    const addPost = () => props.dispatch(addPostActionCreator())

    return (
        <div>
            <div className={ styles.posts }>
                <h3>My posts</h3>
                <TextField label="Обновите ваш статус!" onChange={ changeText }
                           value={ props.state.inputMessage }/>
                <button onClick={ addPost }>Add post</button>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;