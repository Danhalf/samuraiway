import React from 'react';
import MyPost from './MyPost/MyPost';
import styles from './MyPosts.module.css';

let count = 0;

const msgClone = () => new Array(count++).length;
const posts = [
    {id: 1, message: `It's my ${msgClone()}st post!`, likesCount: 24},
    {id: 2, message: `It's my ${msgClone()}st post!`, likesCount: 4},
    {id: 3, message: `It's my ${msgClone()}st post!`, likesCount: 4}
]

const postElements = posts.map( (post, index) => <MyPost key={index+post.id} message={post.message} likes={post.likesCount}/>)

function MyPosts() {
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
