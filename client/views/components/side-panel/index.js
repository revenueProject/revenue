import React from 'react';
import { IconClasses } from '@blueprintjs/core';
import style from './side-panel.css';
import Logo from '../logo';
import { Menu, MenuItem } from '../../ui';


export default () => (
  <section className={style.sidePanel} >
    <Logo />
    <Menu>
      <MenuItem
        link="/counts"
        icon={IconClasses.CREDIT_CARD}
        title="Мои счета"
      />
      <MenuItem
        link="/targets"
        icon={IconClasses.CONFIRM}
        title="Мои цели"
      />
      <MenuItem
        link="/reports"
        icon={IconClasses.TIMELINE_AREA_CHART}
        title="Финансовый отчет"
      />
    </Menu>
  </section>
);
