import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css';

function Dialog(props) {
  const path = `/dialogs/${props.link}`;
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__items}>
        <div className={style.dialogs__item}>
          <NavLink to={path} className={style.item__link} activeClassName={style.active}>
            {props.name}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
