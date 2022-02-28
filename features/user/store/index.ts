import create from 'zustand';
import { persist, redux } from 'zustand/middleware';

import { reducer } from './reducer';
import { authActions } from './actions';
import { IAuth } from './types';

const state: IAuth = {
  isLoggedIn: false,
  token: '',
  userId: '',
};

const useAuthStore = create(
  persist(redux(reducer, state), { name: 'auth-store' }),
);

export { useAuthStore, authActions };
