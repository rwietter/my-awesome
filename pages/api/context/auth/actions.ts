import Router from 'next/router';
import { destroyCookie } from 'nookies';
import store from '.';
import { ActionType as Types } from './types';

type IPayload = {
	isLoggedIn: boolean;
	token?: string;
	userId?: string;
};

const authActions = () => ({
  signin: (payload: IPayload) => {
    store.getState().dispatch({ type: Types.LOGGED_IN, payload });
  },
  logout: (payload: IPayload | string) => {
    destroyCookie(undefined, 'awesome:token');
    Router.push('/user/signin');
    store.getState().dispatch({ type: Types.LOGOUT, payload });
  },
});

export { authActions };
