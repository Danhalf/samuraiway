import React from 'react';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.item}>
        <a href="#">Profile</a>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <a href="#">Message</a>
      </div>
      <div className={styles.item}>
        <a href="#">News</a>
      </div>
      <div className={styles.item}>
        <a href="#">Music</a>
      </div>
      <div className={styles.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
}

export default Navigation;
