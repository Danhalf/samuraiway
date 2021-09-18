import React from 'react';
import styles from './Header.module.css';
import logo from './images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header__img} src={logo} alt="Logo" />
    </header>
  );
}

export default Header;
