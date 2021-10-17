import { signIn } from '../../routes/auth';

export const adaptedSignIn = async (data?: any): Promise<{ token: string, refreshToken: string }> => {
  const response = await signIn(data);

  return response.data;
};
