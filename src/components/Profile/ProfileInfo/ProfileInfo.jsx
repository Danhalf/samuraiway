import React from 'react';
import styles from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div className={styles.user__background}>
        <img className={styles.user__img} src="https://static.ukrinform.com/photos/2018_12/thumb_files/630_360_1545834471-803.jpg" alt="" />
      </div>

      <div className={styles.user__description}>
        <div className={styles.user__avatar}>
          <img className={styles.avatar__img} src="https://hypeava.ru/uploads/posts/2018-04/1523898769_1.gif" alt="" />
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eum ea, odio consectetur sed, pariatur fugit qui error ipsam sint quo
        officiis ut dolorem nemo voluptas nobis libero repudiandae repellat.
      </div>
    </div>
  );
}

export default ProfileInfo;
