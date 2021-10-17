import React from 'react';


function ProfileUserAvatar(props) {
    return (

        <a href='/profile' className={ props.className }>
            <img className={ props.imgClassName } src={ props.avatar } alt=""/>
        </a>


    );
}

export default ProfileUserAvatar;
