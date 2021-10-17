import { ReactElement, cloneElement } from 'react';
import cs from 'classnames';
import style from './style.module.scss';

interface FormFieldProps {
    children: ReactElement
    fullWidth?: boolean
}

export const FormField = ({ children, fullWidth }: FormFieldProps): ReactElement => cloneElement(children, { ...children.props, className: cs(children.props.className, { [style.fullWidth]: fullWidth }) });

FormField.defaultProps = {
  fullWidth: true,
};
