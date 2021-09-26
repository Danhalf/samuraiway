import React from 'react';
import styles from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";


function MyPosts(props) {

const postElements = props.posts.map( (post, index) => <MyPost key={index+post.id} message={post.message} likes={post.likesCount}/>)

    return (
        <div>
            <div className={styles.posts}>
                <h3>My posts</h3>
                <textarea></textarea>
                <button>Add post</button>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;
