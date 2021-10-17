import React from 'react';
import { NavLink } from "react-router-dom";


function ProfileUserAvatar(props) {
    return (

        <NavLink to='/profile' className={ props.className }>
            <img className={ props.imgClassName } src={ props.avatar } alt=""/>
        </NavLink>


    );
}

export default ProfileUserAvatar;
