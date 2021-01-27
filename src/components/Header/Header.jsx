import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__img}
        src="https://www.jootoor.com/wp-content/uploads/2019/03/Logo-Design.jpg"
        alt="Logo"
      />
    </header>
  );
}

export default Header;
