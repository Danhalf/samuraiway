import React, { createRef } from 'react';
import styles from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import { updatePostMessageActionCreator, addPostActionCreator } from "../../../db/profileReducer";


function MyPosts(props) {
    let newPostRef = createRef();
    const postElements = props.state.posts.map((post, index) =>
        <MyPost key={ index + post.id } message={ post.message }
                likes={ post.likesCount }
                avatar={ props.avatar }
        />)

    const changeText = () => {
        let text = newPostRef.current.value
        props.dispatch(updatePostMessageActionCreator(text))
    }

    const addPost = () => props.dispatch(addPostActionCreator())

    return (
        <div>
            <div className={ styles.posts }>
                <h3>My posts</h3>
                <textarea onChange={ changeText } ref={ newPostRef } value={ props.state.inputMessage }/>
                <button onClick={ addPost }>Add post</button>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;