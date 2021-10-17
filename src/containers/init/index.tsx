import { ReactElement, useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useAuth } from '../../utils/packages/auth/useAuth';
import { getExpirationDate } from '../../utils/packages/auth/utils/getExpirationDate';
import { isExpired } from '../../utils/packages/auth/utils/isExpired';
import { setBeforeRequest } from '../../utils/API/config';

export const Init = ({ children }: { children: ReactElement}): ReactElement => {
  const {
    refresh, setToken, setLoggedIn, token,
  } = useAuth();
  const [cookie, setCookie] = useCookies(['token']);

  const checkToken = useCallback(async (url?: string | undefined): Promise<void> => {
    if (!url?.includes('refresh') && isExpired(getExpirationDate(cookie.token))) {
      await refresh({ fingerprint: navigator.userAgent });
    }
  }, []);

  useEffect(() => {
    setCookie('token', token);
  }, [token]);

  useEffect(() => {
    setBeforeRequest(checkToken);
  }, []);

  useEffect(() => {
    if (cookie.token) {
      setToken(cookie.token);
      setLoggedIn(true);

      checkToken();
    }
  }, []);

  return children;
};
