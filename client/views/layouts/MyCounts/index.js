import React from 'react';
import CountPanel from '../../components/CountPanel';
import AddCountDialog from '../../components/AddCountDialog';
import style from './myCounts.css';


export default (props) => (
    <div>
        <CountPanel {...props} />
        <AddCountDialog {...props} />
    </div>
);
