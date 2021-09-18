import React from 'react';
import MyPost from './MyPost/MyPost';
import styles from './MyPosts.module.css';

function MyPosts() {
  let count = 0;

  const msgClone = () => new Array(count++).length;
  console.log(msgClone(5));
  return (
    <div>
      <div className={styles.posts}>
        <h3>My posts</h3>
        <textarea></textarea>
        <button>Add post</button>
        <MyPost message={`${msgClone()} post`} />
        <MyPost message={`${msgClone()} post`} />
        <MyPost message={`${msgClone()} post`} />
        <MyPost message={`${msgClone()} post`} />
      </div>
    </div>
  );
}

export default MyPosts;
