import React from 'react';
import styles from './Header.module.css';
import logo from './images/logo.png';
import ProfileUserAvatar from "../Profile/ProfileInfo/ProfileUserAvatar";
import { UserAvatar } from "../Profile/ProfileImages/ImagesLinks";

function Header() {
    return (
        <header className={ styles.header }>
            <img className={ styles.header__img } src={ logo } alt="Logo"/>
            <ProfileUserAvatar avatar={ UserAvatar } className={ styles.avatar }
                               imgClassName={ styles.avatar__img }/>
        </header>
    );
}

export default Header;
