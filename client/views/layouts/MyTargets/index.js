import React from 'react';
import TargetsPanel from '../../components/TargetsPanel';
import AddTargetDialog from '../../components/AddTargetDialog';
import style from './myTargets.css';
import Target from '../../components/target';


export default (props) => (
  <div>
    <TargetsPanel {...props} />
    <AddTargetDialog {...props} />
    <div className={style.targetsContainer}>
      {props.myTargets.targets.map((target) => (
        <Target key={target._id} target={target} {...props} />
      ))}
    </div>
  </div>
);
