import { ActionType as Type } from './types';

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case Type.ADD_CONTENT_ITEM:
      return {
        ...state,
        contentItem: {
          ...state.contentItem,
          ...payload.contentItem,
        },
      };
    case Type.ADD_CONTENT_INDEX:
      return {
        ...state,
        contentIndex: [...state.contentIndex, payload.contentIndex],
      };
    case Type.SAVE_AWESOME:
      return {
        ...state,
        contentIndex: [...state.contentIndex, payload.contentIndex],
      };
    case Type.RESET_AWESOME:
      return {
        ...state,
        contentIndex: [],
        contentItem: {},
      };
    default:
  }
};

export { reducer };
