import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import cs from 'classnames';
import style from './style.module.scss';

interface ButtonProps {
    className?: string
    children: string
}

export const Button = ({ className, children, ...props }: ButtonHTMLAttributes<any> & ButtonProps): ReactElement => <button {...props} className={cs(style.button, className)} type="button">{children}</button>;

Button.defaultProps = {
  className: undefined,
};
