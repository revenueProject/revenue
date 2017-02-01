import React from 'react';
import style from './main.css';

import SidePanel from '../../containers/SidePanelContainer';

export default () => (
  <div className={style.mainLayout} >
    <SidePanel />
    <div className={style.contentPanel} />
  </div>
);
