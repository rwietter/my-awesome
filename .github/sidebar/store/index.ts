import create from 'zustand';
import { persist, redux } from 'zustand/middleware';

import { reducer } from './reducer';
import { actionSideNavigation } from './actions';
import { SideNavigation } from './types';

const state: SideNavigation = {
  isNavigationOpen: false,
};

const useSideNavigation = create(
  persist(redux(reducer, state), { name: 'navigation-store' }),
);

export { useSideNavigation, actionSideNavigation };
