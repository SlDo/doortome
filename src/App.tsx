import React, {
  ReactElement, useMemo, useState,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import {
  RecoilRoot,
} from 'recoil';
import { SigninPage } from './pages/signin';
import { SignupPage } from './pages/signup';
import { HomePage } from './pages/home';

import 'normalize-scss/sass/_normalize.scss';
import './styles/colors.scss';
import './styles/radius.scss';
import './style.scss';
import { PrivateRouter } from './components/privateRouter';
import { setBaseURL } from './utils/API/config';
import { Init } from './containers/init';
import { AuthProvider } from './utils/packages/auth';
import { adaptedSignIn } from './utils/API/adapters/auth/signin.adapter';
import { adaptedRefresh } from './utils/API/adapters/auth/refresh.adapter';

setBaseURL('http://doorto.me');

const App = (): ReactElement => {
  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const value = useMemo(
    () => ({
      token, setToken, refreshToken, setRefreshToken, signIn: adaptedSignIn, refresh: adaptedRefresh, isLoggedIn, setLoggedIn,
    }),
    [token, refreshToken, isLoggedIn],
  );

  return (
    <RecoilRoot>
      <CookiesProvider>
        <AuthProvider value={value}>
          <Router>
            <Init>
              <Switch>
                <Route path="/signup">
                  <SignupPage />
                </Route>
                <Route path="/signin">
                  <SigninPage />
                </Route>
                <PrivateRouter path="/">
                  <HomePage />
                </PrivateRouter>
              </Switch>
            </Init>
          </Router>
        </AuthProvider>
      </CookiesProvider>
    </RecoilRoot>
  );
};

export default App;
