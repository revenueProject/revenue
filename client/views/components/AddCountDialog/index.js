import React from 'react';
import { Dialog, InputGroup, Button, Intent } from '@blueprintjs/core';
import style from './addCountDialog.css';


export default (props) => (
  <Dialog
    iconName="add"
    onClose={props.closeDialog}
    title="Добавить счет"
    isOpen={props.isOpenDialog}
  >
    <div className={style.dialogGroup}>
      <InputGroup
        className={style.inputItem}
        placeholder="Название счета"
        value={props.countName}
        onChange={(e) => props.changeCountName(e.target.value)}
      />
      <Button onClick={props.saveCount} text="Добавить" intent={Intent.SUCCESS} iconName="add" />
    </div>
  </Dialog>
);
