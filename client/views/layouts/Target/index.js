import React from 'react';
import style from './target-layout.css';
import TargetControl from '../../components/TargetControl';


export default (props) => (
  <div className={style.targetLayout}>
    <TargetControl {...props} />
  </div>
);
