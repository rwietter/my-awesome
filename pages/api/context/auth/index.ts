import create from 'zustand';
import { persist, redux } from 'zustand/middleware';

import { reducer } from './reducer';
import { IAuth } from './types';

const state: IAuth = {
  isLoggedIn: false,
  token: '',
  user_id: '',
};

const useAuthStore = create(
  persist(redux(reducer, state), { name: "auth-store" })
);

export default useAuthStore;
