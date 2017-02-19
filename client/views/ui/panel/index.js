import React from 'react';
import style from './panel.css';


export default (props) => (
    <div className={`${style.panel} ${props.className}`}>
        {props.children}
    </div>
);
