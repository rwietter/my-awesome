import { ActionType as Type } from './types';

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case Type.CHANGE_THEME:
      return {
        ...state,
        theme: payload.theme,
      };
  }
};

export { reducer };
