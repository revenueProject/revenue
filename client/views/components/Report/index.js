import React from 'react';
import { Link } from 'react-router';
import style from './report.css';


export default (props) => (
  <div className={style.report}>
    <div className={style.reportTitleContainer}>
      <h3 className={style.reportTitle}><Link to={`/reports/${props.month.month()}`}>{props.month.format('MMMM YYYY')}</Link></h3>
    </div>
  </div>
);
