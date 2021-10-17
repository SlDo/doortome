import { AxiosResponse } from 'axios';
import { request } from '../../request';

export const signIn = (data: any): any => request({
  url: '/api/signin', method: 'POST', data, headers: { credentials: 'include' }, withCredentials: true,
});

export const signUp = (data: any): Promise<AxiosResponse> => request({
  url: '/api/signup', method: 'POST', data,
});

export const refreshToken = (data: any): any => request({
  url: '/api/refresh', method: 'POST', data, withCredentials: true,
});
