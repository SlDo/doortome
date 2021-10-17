export const isExpired = (exp?: number | null): boolean => {
  if (!exp) return true;

  return Date.now() > exp;
};
