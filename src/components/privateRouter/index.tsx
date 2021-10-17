import React, { ReactElement, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Route, useHistory } from 'react-router-dom';

interface PrivateRouterProps {
    children: ReactElement
    path: string
}

export const PrivateRouter = ({ children, path }: PrivateRouterProps): ReactElement => {
  const [cookie] = useCookies(['token']);
  const history = useHistory();

  useEffect(() => {
    if (!cookie.token) {
      history.push('/signin');
    }
  }, [cookie, history]);

  return <Route path={path}>{children}</Route>;
};
