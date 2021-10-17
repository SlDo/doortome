import React, { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import cs from 'classnames';
import style from './style.module.scss';

interface InputProps {
    className?: string
}

export const Input = forwardRef(({ className, ...props }: InputHTMLAttributes<any> & InputProps, ref): ReactElement => <input ref={ref as any} {...props} className={cs(style.input, className)} />);

Input.defaultProps = {
  className: undefined,
};
