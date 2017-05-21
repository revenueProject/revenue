import React from 'react';
import { Button, Intent } from '@blueprintjs/core';
import style from './reportsPanel.css';
import { Panel } from '../../ui';


export default () => (
  <Panel className={style.reportsPanel}>
    <h2 className={style.title}>Финансовый отчет</h2>
  </Panel>
);
