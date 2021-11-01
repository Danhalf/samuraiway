import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = (props) => (
    <nav className={ styles.navigation }>
        <div className={ styles.item }>
            <NavLink to="/profile">
                Profile
            </NavLink>
        </div>
        <div className={ styles.item }>
            <NavLink to="/dialogs">
                Message
                <span>{ props.messagesCount }</span>
            </NavLink>
        </div>
        <div className={ styles.item }>
            <NavLink to="/users">
                Users
            </NavLink>
        </div>
        <div className={ styles.item }>
            <NavLink to="/news">
                News
            </NavLink>
        </div>
        <div className={ styles.item }>
            <NavLink to="/music">
                Music
            </NavLink>
        </div>
        <div className={ styles.item }>
            <NavLink to="/settings">
                Settings
            </NavLink>
        </div>
        <div className={ `${ styles.item } ${ styles.best_friends }` }>
            <NavLink to="/bestfriends">
                Best Friends
            </NavLink>
        </div>
    </nav>
);

export default Navigation;
