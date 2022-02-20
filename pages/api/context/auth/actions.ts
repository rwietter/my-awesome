import store from '.';
import { ActionType as Types } from './types';

type IPayload = {
  isLoggedIn: boolean;
  token?: string;
  user_id?: string,
}

const authActions = () => ({
  signin: (payload: IPayload) => {
    store.getState().dispatch({ type: Types.LOGGED_IN, payload });
  },
  logout: (payload: IPayload | string) => {
    store.getState().dispatch({ type: Types.LOGOUT, payload });
  },
});

export { authActions };
