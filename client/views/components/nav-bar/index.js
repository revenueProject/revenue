import React from 'react';
import { InputGroup } from '@blueprintjs/core';
import style from './nav-bar.css';


export default () => (
  <div className={style.navBar}>
    <InputGroup
      className={style.searchField}
      leftIconName="search"
      placeholder="Поиск..."
      type="search"
    />
  </div>
);
