import { getPayload } from './getPayload';

export const getExpirationDate = (jwtToken?: string): number | null => {
  if (!jwtToken) return 0;

  const payload = getPayload(jwtToken);

  return (payload?.exp * 1000) ?? 0;
};
