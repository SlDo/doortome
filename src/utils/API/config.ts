interface IConfig {
    baseURL?: string | undefined;
    authToken?: string;
    fallbackURL?: string;
    beforeRequest?: (url?: string | undefined) => Promise<void>
}

export const config: IConfig = {
  authToken: '',
};

export const setBaseURL = (baseURL: string): void => {
  config.baseURL = baseURL;
};

export const setBeforeRequest = (callback: (url: string | undefined) => Promise<void>): void => {
  config.beforeRequest = callback;
};

export const setFallbackURL = (fallbackURL: string): void => {
  config.fallbackURL = fallbackURL;
};

export const setAuthToken = (token: string | null): void => {
  if (token) config.authToken = token;
};
