import React, { ReactElement } from 'react';
import cs from 'classnames';
import { ReactComponent as LogoSVG } from '../../../images/logo.svg';
import style from './style.module.scss';

interface LogoProps {
    className?: string
}

export const Logo = ({ className }: LogoProps): ReactElement => <LogoSVG className={cs(style.logo, className)} />;

Logo.defaultProps = {
  className: undefined,
};
