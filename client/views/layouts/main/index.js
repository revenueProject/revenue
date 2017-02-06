import React from 'react';
import style from './main.css';

import SidePanel from '../../containers/SidePanelContainer';
import NavBar from '../../containers/NavBarContainer';

export default () => (
  <section className={style.mainLayout} >
    <SidePanel />
    <section className={style.contentPanel}>
      <NavBar />
    </section>
  </section>
);
