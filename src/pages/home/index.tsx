import React, { ReactElement } from 'react';
import style from './style.module.scss';

export const HomePage = (): ReactElement => (
  <div className={style.page}>
    <h2 className={style.title}>Welcome!</h2>
    <span className={style.subtitle}>Вы авторизованы. Можете пользоваться расширением.</span>
  </div>
);
