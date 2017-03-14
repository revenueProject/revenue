import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-router';
import style from './count.css';


export default (props) => (
  <div className={style.count}>
      <div className={style.countTools}>
          <Button className="icon-btn" iconName="edit" />
          <Button className="icon-btn" iconName="remove" />
      </div>
      <div className={style.countBalanceContainer}>
          <h3 className={style.countBalance}>{`${props.balance} ₽`}</h3>
      </div>
      <div className={style.countTitleContainer}>
          <Link to="#">{props.countName}</Link>
      </div>
  </div>
);
