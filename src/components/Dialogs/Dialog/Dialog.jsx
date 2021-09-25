import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Dialog.module.css';


function Dialog(props) {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                <div className={style.dialogs__item}>
                    <NavLink to={`/dialogs/${props.link}_link`} className={style.item__link} activeClassName={style.active}>
                        {props.name}
                    </NavLink>
                </div>
            </div>
        </div>
    )

}

export default Dialog;
