import React, { createRef } from 'react';
import styles from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

let newPostRef = createRef();


function MyPosts(props) {
    const postElements = props.state.posts.map((post, index) =>
        <MyPost key={ index + post.id } message={ post.message }
                likes={ post.likesCount }
                avatar={ props.avatar }/>)
    const changeText = () => {
        let text = newPostRef.current.value
        props.updatePostMessage(text)
    }

    return (
        <div>
            <div className={ styles.posts }>
                <h3>My posts</h3>
                <textarea onChange={ changeText } ref={ newPostRef } value={ props.state.inputMessage }/>
                <button onClick={ props.addPost }>Add post</button>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;
