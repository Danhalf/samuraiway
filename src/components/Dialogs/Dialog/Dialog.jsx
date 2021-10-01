import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Dialog.module.css';
import { AvatarGenerator } from 'random-avatar-generator';


function Dialog(props) {
    const generator = new AvatarGenerator();
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                <div className={style.dialogs__item}>
                    <NavLink to={`/dialogs/${props.link}_link`} className={style.item__link} activeClassName={style.active}>
                        <img className={style.user_avatar} src={generator.generateRandomAvatar()}  alt='avatar'/>
                        {props.name}
                    </NavLink>
                </div>
            </div>
        </div>
    )

}

export default Dialog;
