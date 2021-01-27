import React from 'react';
import MyPost from './MyPost/MyPost';
import styles from './MyPosts.module.css';

function MyPosts() {
  let count = 0;

  const msgClone = () => new Array(count++).length;
  console.log(msgClone(5));
  return (
    <div>
      My posts
      <textarea></textarea>
      <button>Add post</button>
      <div className={styles.posts}>
        <MyPost message={`${msgClone()} post`} />
        <MyPost message={`${msgClone()} post`} />
        <MyPost message={`${msgClone()} post`} />
        <MyPost message={`${msgClone()} post`} />
      </div>
    </div>
  );
}

export default MyPosts;
