import React from 'react';
import styles from './Header.module.css';
import logo from './images/logo.png';
import { NavLink } from "react-router-dom";

function Header(props) {
    console.log(props);
    return (
        <header className={ styles.header }>
            <img className={ styles.header__img } src={ logo } alt="Logo"/>
            <div className={ styles.header__login }>
                { props.isAuth ?
                    <NavLink className={ styles.login__link } to={ '/login' }>{ props.email }</NavLink>
                    :
                    <NavLink className={ styles.login__link } to={ '/login' }>Login</NavLink>
                }

            </div>
        </header>
    );
}

export default Header;


// <ProfileUserAvatar avatar={ UserAvatar } className={ styles.avatar }imgClassName={ styles.avatar__img }/>