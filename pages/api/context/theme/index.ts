import create from 'zustand';
import { persist, redux } from 'zustand/middleware';

import { reducer } from './reducer';
import { Theme } from './types';

const state: Theme = {
  theme: 'light',
};

const useThemeStore = create(
  persist(redux(reducer, state), { name: "theme-store" })
);

export { useThemeStore };
