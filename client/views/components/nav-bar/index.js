import React from 'react';
import { InputGroup } from '@blueprintjs/core';
import { Panel } from '../../ui';
import style from './nav-bar.css';


export default () => (
  <Panel>
    <InputGroup
      className={style.searchField}
      leftIconName="search"
      placeholder="Поиск..."
      type="search"
    />
  </Panel>
);
