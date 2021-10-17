import { useContext } from 'react';
import { authContext } from './index';

export const useAuth = (): { logout: () => void; setToken: (value: (((prevState: string) => string) | string)) => void; refresh: (data?: any) => Promise<void>; isLoggedIn: boolean; setLoggedIn: (value: (((prevState: boolean) => boolean) | boolean)) => void; login: (data?: any) => Promise<boolean>; setRefreshToken: (value: (((prevState: string) => string) | string)) => void; token: string; refreshToken: string } => {
  const {
    token, refreshToken, setToken, setRefreshToken, signIn, isLoggedIn, setLoggedIn, refresh,
  } = useContext(authContext);

  const login = async (data?: any): Promise<boolean> => signIn(data).then((tokens) => {
    setToken(tokens?.token ?? '');
    setRefreshToken(tokens?.refreshToken ?? '');

    setLoggedIn(!!(tokens?.token && tokens?.refreshToken));

    return true;
  });

  const logout = (): void => {
    setToken('');
    setRefreshToken('');
    setLoggedIn(false);
  };

  const requestRefresh = async (data?: any): Promise<void> => {
    refresh(data).then((token) => {
      if (!token) return logout();

      setToken(token);
    }).catch(() => logout());
  };

  return {
    token, refreshToken, setToken, setRefreshToken, login, logout, refresh: requestRefresh, isLoggedIn, setLoggedIn,
  };
};
