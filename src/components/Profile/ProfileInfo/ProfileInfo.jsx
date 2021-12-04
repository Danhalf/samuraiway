import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileUserAvatar from "./ProfileUserAvatar";


function ProfileInfo(props) {
    console.log(props.profile);
    return (
        <div>
            <div className={ styles.user__background }>
                <img className={ styles.user__img } src={ props.background } alt=""/>
            </div>

            <div className={ styles.user__description }>
                <ProfileUserAvatar className={ styles.user__avatar } imgClassName={ styles.avatar__img }
                                   avatar={ props.profile.photos.small }/>
                { props.profile.aboutMe }

                <ul className={ styles.contacts }>
                    { Object.entries(props.profile.contacts).map(contact => {
                        const [ contactName, value ] = contact;
                        return (value && <li key={ contactName + value }>{ contactName } - { value }</li>)

                    }) }
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;
