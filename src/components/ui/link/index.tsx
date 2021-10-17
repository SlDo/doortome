import React, {
  ReactElement,
} from 'react';
import style from './style.module.scss';

export type LinkProps<ComponentType extends React.ElementType> = {
    component?: ComponentType;
    innerRef?: React.Ref<HTMLElement>;
} & Omit<React.ComponentProps<ComponentType>, 'inactive'>;

export function Link(props: LinkProps<'a'>): JSX.Element;
// eslint-disable-next-line no-redeclare
export function Link<ComponentType extends React.ElementType>(
    props: LinkProps<ComponentType>
): JSX.Element;
// eslint-disable-next-line no-redeclare
export function Link<ComponentType extends React.ElementType>({
  children,
  component,
  innerRef,
  ...props
}: LinkProps<ComponentType>): ReactElement {
  const Component = (component || 'a') as React.ElementType;

  return (
    <Component
      ref={innerRef}
      {...props}
      className={style.link}
    >
      {children}
    </Component>
  );
}
