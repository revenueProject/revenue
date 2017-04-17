import React from 'react';
import CountControl from '../../components/CountControl';
import LogTable from '../../components/LogTable';
import style from './count-layout.css';


export default (props) => (
  <div className={style.countLayout}>
    <CountControl {...props} />
    <LogTable {...props} />
  </div>
);
