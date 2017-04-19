import React from 'react';
import CountPanel from '../../components/CountPanel';
import AddCountDialog from '../../components/AddCountDialog';
import style from './myCounts.css';
import Count from '../../components/Count';


export default (props) => (
  <div>
    <CountPanel {...props} />
    <AddCountDialog {...props} />
    <div className={style.countsContainer}>
      {props.counts.map(
        (count) => <Count key={count._id} {...count} deleteCount={props.deleteCount} />,
      )}
    </div>
  </div>
);
