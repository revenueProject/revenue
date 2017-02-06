import React from 'react';
import style from './menu.css';


export default ({ children }) => (
  <ul className={style.menu}>
    {children}
  </ul>
);
