import React from 'react';
import styles from './ProfileInfo.module.css';


function ProfileInfo(props) {
    return (
        <div>
            <div className={styles.user__background}>
                <img className={styles.user__img} src={props.background} alt=""/>
            </div>

            <div className={styles.user__description}>
                <div className={styles.user__avatar}>
                    <img className={styles.avatar__img} src={props.avatar} alt=""/>
                </div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, eum ea, odio consectetur sed, pariatur
                fugit qui error ipsam sint quo
                officiis ut dolorem nemo voluptas nobis libero repudiandae repellat.
            </div>
        </div>
    );
}

export default ProfileInfo;
