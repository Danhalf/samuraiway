import React from 'react';
import styles from './MyPost.module.css';


function MyPost(props) {


  for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('on');
    });
  }
  return (
    <div className={styles.post}>
      <img className={styles.user_avatar} src={props.avatar} alt="user avatar" />
        <div>
        <span className="vote">
          <svg width={36} height={36}>
            <path d="M2 10h32L18 26 2 10z" fill="currentColor" />
          </svg>
        </span>
            <span>{props.likes}</span>
        </div>
      {props.message}

    </div>
  );
}

export default MyPost;
