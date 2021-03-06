import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.item}>
        <NavLink to="/profile" activeClassName={styles.active}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.active}>
          Message
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.active}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeClassName={styles.active}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" activeClassName={styles.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
