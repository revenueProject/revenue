import React from 'react';
import TargetsPanel from '../../components/TargetsPanel';
import AddTargetDialog from '../../components/AddTargetDialog';


export default (props) => (
  <div>
    <TargetsPanel {...props} />
    <AddTargetDialog {...props} />
  </div>
);
