import React from 'react';
import { Button, Intent } from '@blueprintjs/core';
import style from './targetsPanel.css';
import { Panel } from '../../ui';


export default (props) => (
  <Panel className={style.countPanel}>
    <h2 className={style.title}>Мои цели</h2>
    <Button onClick={props.openDialog} text="Добавить" intent={Intent.SUCCESS} iconName="add" />
  </Panel>
);
