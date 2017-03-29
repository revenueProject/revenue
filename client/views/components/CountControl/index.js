import React from 'react';
import { Button, InputGroup } from '@blueprintjs/core';
import style from './countControl.css';

export default () => (
    <div className={style.countControllWrapper}>
      <h2 className={style.balanceTitle}>0 ₽</h2>
      <InputGroup className={style.countControllSum} placeholder="Сумма" />
      <InputGroup className={style.countControll} type="textarea" placeholder="Комментарий" />
      <div className={style.buttonWrapper}>
        <Button className={style.buttonItem} iconName="minus" />
        <Button className={style.buttonItem} iconName="plus" />
      </div>
    </div>
);
