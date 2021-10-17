import axios, {
  Axios, AxiosError, AxiosRequestConfig, AxiosResponse,
} from 'axios';
import { config } from './config';
import { errorHandler } from './errorHandler';

interface IRequest extends AxiosRequestConfig {
    url: string,
    baseURL?: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any,
    params?: Record<string, any>,
    headers?: {
        authorization?: boolean
    } & any,
    retryOnError?: boolean
}

export const request = async <T>({
  url = '/', method = 'GET', data, params, headers, retryOnError = true, ...rest
}: IRequest): Promise<AxiosResponse<T> | any> => {
  const headersObject: Record<string, any> = {};

  if (headers) {
    Object.entries(headers).forEach(([key, value]) => {
      if (headers?.authorization && config.authToken && key === 'authorization') {
        headersObject.authorization = `Token ${config.authToken}`;
      } else headersObject[key] = value;
    });
  }

  const sendRequest = async (): Promise<AxiosResponse<T> | any> => {
    try {
      return await axios({
        url: `${config.baseURL ?? ''}${url}`,
        headers: { ...headersObject },
        method,
        data,
        params,
        ...rest,
      });
    } catch (error: any) {
      errorHandler(error, {
        url, method, data, params, headers, retryOnError,
      });

      return error;
    }
  };

  if (config.beforeRequest != null) {
    await config.beforeRequest(url);
  }

  return sendRequest();
};
