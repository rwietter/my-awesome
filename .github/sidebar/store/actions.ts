import { useSideNavigation as store } from '.';
import { ActionType as Types, SideNavigation } from './types';

const actionSideNavigation = () => ({
  setNavigatinState: (payload: SideNavigation) => {
    store.getState().dispatch({ type: Types.NAVIGATION_OPEN, payload });
  },
});

export { actionSideNavigation };
