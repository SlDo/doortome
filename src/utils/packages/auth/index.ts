import React, { Dispatch, SetStateAction } from 'react';

export interface ContextProps { token: string, refreshToken: string, setToken: Dispatch<SetStateAction<string>>, setRefreshToken: Dispatch<SetStateAction<string>>, signIn: (data?: any) => Promise<{ token: string, refreshToken: string } | null>, refresh: (data?: any) => Promise<string | null>, isLoggedIn: boolean, setLoggedIn: Dispatch<SetStateAction<boolean>> }

export const authContext = React.createContext<ContextProps>({
  token: '',
  refreshToken: '',
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToken: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRefreshToken: () => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoggedIn: () => {
  },
  signIn: async () => null,
  refresh: async () => null,
});
export const AuthProvider = authContext.Provider;
