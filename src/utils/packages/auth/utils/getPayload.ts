export const getPayload = (jwtToken?: string): any => {
  if (!jwtToken) return null;

  const base64Url = jwtToken.split('.')[1];

  if (!base64Url) return null;

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
      .join(''),
  );

  return JSON.parse(jsonPayload);
};
