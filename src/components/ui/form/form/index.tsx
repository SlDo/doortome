import React, { forwardRef, ReactElement } from 'react';
import cs from 'classnames';
import style from './style.module.scss';

interface FormProps {
    children: ReactElement | ReactElement[]
    className?: string
}

export const Form = forwardRef(({ children, className }: FormProps, ref): ReactElement => (
  <form ref={ref as any} className={cs(style.form, className)}>
    {children}
  </form>
));

Form.defaultProps = {
  className: undefined,
};
