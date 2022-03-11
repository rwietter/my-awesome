import { ActionType as Type } from './types';

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case Type.NAVIGATION_OPEN:
      return {
        ...state,
        isNavigationOpen: payload.isNavigationOpen,
      };
    default:
  }
};

export { reducer };
