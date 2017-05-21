import React from 'react';
import ReportTable from '../../components/ReportTable';
import style from './report-layout.css';


export default (props) => (
  <div className={style.reportLayout}>
    <ReportTable {...props} />
  </div>
);
