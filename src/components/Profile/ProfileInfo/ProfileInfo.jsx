import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileUserAvatar from "./ProfileUserAvatar";


function ProfileInfo(props) {
    const avatar = props.profile ? props.profile.photos.small : props.avatar
    const status = props.profile ? props.profile.aboutMe : `Default status`
    return (
        <div>
            <div className={ styles.user__background }>
                <img className={ styles.user__img } src={ props.background } alt=""/>
            </div>

            <div className={ styles.user__description }>
                <ProfileUserAvatar className={ styles.user__avatar } imgClassName={ styles.avatar__img }
                                   avatar={ avatar }/>
                { status }

            </div>
        </div>
    );
}

export default ProfileInfo;
