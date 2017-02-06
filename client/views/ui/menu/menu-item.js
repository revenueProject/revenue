import React from 'react';
import style from './menu.css';


export default (props) => (
  <li>
    <a className={style.menuItem} href={props.link}>
      <span className={`${style.menuIcon} ${props.icon}`} />
      {props.title}
    </a>
  </li>
);
