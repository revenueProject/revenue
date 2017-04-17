import React from 'react';
import { Button, InputGroup } from '@blueprintjs/core';
import style from './countControl.css';

export default (props) => (
  <div className={style.countControllWrapper}>
    <h2 className={style.balanceTitle}>{`${props.countSTate.count.balance} ₽`}</h2>
    <InputGroup
      value={props.sum}
      className={style.countControllSum}
      placeholder="Сумма"
      onChange={(e) => props.changeField(e.target.value, 'sum')}
    />
    <InputGroup
      value={props.comment}
      className={style.countControll}
      type="textarea"
      placeholder="Комментарий"
      onChange={(e) => props.changeField(e.target.value, 'comment')}
    />
    <div className={style.buttonWrapper}>
      <Button onClick={() => props.changeBalance('sub')} className={style.buttonItem} iconName="minus" />
      <Button onClick={() => props.changeBalance('add')} className={style.buttonItem} iconName="plus" />
    </div>
  </div>
);
