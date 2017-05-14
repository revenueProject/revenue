import React from 'react';
import { Button, InputGroup } from '@blueprintjs/core';
import style from './targetControl.css';



const getReminder = (props) => {
  const reminder =  props.target.target.attachments && props.target.target.attachments.reduce((sum, current) => {
    return sum + current.value
  }, 0);
  return `${reminder || 0}/${props.target.target.sum}`;
};

export default (props) => (
  <div className={style.targetControllWrapper}>
    <h2 className={style.balanceTitle}>{`${props.target.target.targetName} (${getReminder(props)})`}</h2>
    <div className="pt-select .modifier">
      <select onChange={(e) => props.changeField('countId', e.target.value)} selected={props.countId}>
        <option>Выберите счет</option>
        {props.myCounts.counts.map((count) => (
          <option key={count._id} value={count._id}>{count.countName}</option>
        ))}
      </select>
    </div>
    <InputGroup
      value={props.attachment}
      className={style.targetControll}
      placeholder="Сумма"
      onChange={(e) => props.changeField('attachemnt', e.target.value)}
    />
    <div className={style.buttonWrapper}>
      <Button onClick={() => props.removeAttachment()} className={style.buttonItem} iconName="minus" />
      <Button onClick={() => props.addAttachment()} className={style.buttonItem} iconName="plus" />
    </div>
  </div>
);
