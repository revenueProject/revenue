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
        link="balance"
        icon={IconClasses.DASHBOARD}
        title="Мой баланс"
      />
      <MenuItem
        link="balance"
        icon={IconClasses.CREDIT_CARD}
        title="Мои счета"
      />
      <MenuItem
        link="balance"
        icon={IconClasses.CONFIRM}
        title="Мои цели"
      />
      <MenuItem
        link="balance"
        icon={IconClasses.TIMELINE_AREA_CHART}
        title="Финансовый отчет"
      />
    </Menu>
  </section>
);
