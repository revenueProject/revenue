import React from 'react';
import { Link } from 'react-router';
import style from './menu.css';


export default (props) => (
  <li>
    <Link className={style.menuItem} to={props.link}>
      <span className={`${style.menuIcon} ${props.icon}`} />
      {props.title}
    </Link>
  </li>
);
