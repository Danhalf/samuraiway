import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileUserAvatar from "./ProfileUserAvatar";


function ProfileInfo(props) {
    return (
        <div>
            <div className={ styles.user__background }>
                <img className={ styles.user__img } src={ props.background } alt=""/>
            </div>

            <div className={ styles.user__description }>
                <ProfileUserAvatar className={ styles.user__avatar } imgClassName={ styles.avatar__img }
                                   avatar={ props.avatar }/>

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eum ea, odio consectetur sed, pariatur
                fugit qui error ipsam sint quo
                officiis ut dolorem nemo voluptas nobis libero repudiandae repellat.
            </div>
        </div>
    );
}

export default ProfileInfo;
