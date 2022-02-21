import { ActionType as Type } from './types';

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case Type.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        token: payload.token,
        user_id: payload.user_id,
      };
    case Type.LOGOUT:
      return {
        isLoggedIn: payload.isLoggedIn,
        token: '',
        user_id: '',
      };
  }
};

export { reducer };
