import React from 'react';
import { Dialog, InputGroup, Button, Intent } from '@blueprintjs/core';
import style from './addTargetDialog.css';


export default (props) => (
  <Dialog
    iconName="add"
    onClose={props.closeDialog}
    title="Добавить цель"
    isOpen={props.isOpenDialog}
  >
    <div className={style.dialogGroup}>
      <InputGroup
        className={style.inputItem}
        placeholder="Название цели"
        value={props.targetName}
        onChange={(e) => props.changeTargetName(e.target.value)}
      />
      <InputGroup
        className={style.inputItem}
        placeholder="Сумма"
        value={props.sum}
        onChange={(e) => props.changeSum(e.target.value)}
      />
      <Button onClick={props.saveTarget} text="Добавить" intent={Intent.SUCCESS} iconName="add" />
    </div>
  </Dialog>
);
