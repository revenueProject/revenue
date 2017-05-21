import React from 'react';
import ReportsPanel from '../../components/ReportsPanel';
import style from './reports.css';
import Report from '../../components/Report';


export default (props) => (
  <div>
    <ReportsPanel {...props} />
    <div className={style.reportsContainer}>
      {props.reports.months.map((month) => (
        <Report key={month.month()} month={month} />
      ))}
    </div>
  </div>
);
