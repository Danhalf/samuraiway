import React from 'react';
import styles from './MyPost.module.css';
import { AvatarGenerator } from 'random-avatar-generator';

function MyPost(props) {
  const generator = new AvatarGenerator();

  for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('on');
    });
  }
  return (
    <div className={styles.post}>
      <img src={generator.generateRandomAvatar()} alt="user avatar" />
      {props.message}
      <div>
        <span className="vote">
          <svg width={36} height={36}>
            <path d="M2 10h32L18 26 2 10z" fill="currentColor" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default MyPost;
