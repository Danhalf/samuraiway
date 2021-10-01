import React, { createRef } from 'react';
import styles from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

let newPostRef = createRef();




function MyPosts(props) {
    const addPost = () => {
        let text = newPostRef.current.value
        props.addPost(text)
        newPostRef.current.value = ''

    }
    const postElements = props.state.posts.map((post, index) =>
        <MyPost key={ index + post.id } message={ post.message }
                likes={ post.likesCount }
                avatar={ props.avatar }/>)

    return (
        <div>
            <div className={ styles.posts }>
                <h3>My posts</h3>
                <textarea ref={ newPostRef }></textarea>
                <button onClick={ addPost }>Add post</button>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;
