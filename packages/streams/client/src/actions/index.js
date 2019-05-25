import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId = null) => ({
  type: SIGN_IN,
  payload: {
    userId,
  },
});

export const signOut = () => ({
  type: SIGN_OUT,
});
