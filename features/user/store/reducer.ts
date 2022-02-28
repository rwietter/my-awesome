/* eslint-disable default-case */
import { ActionType as Type } from './types';

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case Type.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        token: payload.token,
        userId: payload.userId,
      };
    case Type.LOGOUT:
      return {
        isLoggedIn: payload.isLoggedIn,
        token: '',
        userId: '',
      };
  }
};

export { reducer };
