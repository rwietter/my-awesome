import Router from 'next/router';
import { destroyCookie } from 'nookies';
import { adapter } from '@/services/api';
import { useAuthStore as store } from '.';
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
    adapter.defaults.headers.common.Authorization = '';
    store.getState().dispatch({ type: Types.LOGOUT, payload });
    Router.push('/auth/signin');
  },
});

export { authActions };
