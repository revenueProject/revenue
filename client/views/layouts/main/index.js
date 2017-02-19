import React from 'react';
import style from './main.css';

import SidePanel from '../../containers/SidePanelContainer';
import NavBar from '../../containers/NavBarContainer';

export default (props) => (
  <section className={style.mainLayout} >
    <SidePanel />
    <section className={style.contentPanel}>
      <NavBar />
      {props.children}
    </section>
  </section>
);
