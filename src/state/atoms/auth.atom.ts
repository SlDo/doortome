import { atom } from 'recoil';

export const AuthAtom = atom<boolean>({
  key: 'isAuth',
  default: false,
});
