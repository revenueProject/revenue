import React from 'react';
import style from './main.css';

import SidePanel from '../../containers/SidePanelContainer';

export default (props) => (
  <section className={style.mainLayout} >
    <SidePanel />
    <section className={style.contentPanel}>
      {props.children}
    </section>
  </section>
);
