import { refreshToken } from '../../routes/auth';

export const adaptedRefresh = async (data?: any): Promise<string> => {
  const response = await refreshToken(data);

  // @ts-ignore
  return response.data?.token;
};
