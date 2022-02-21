import { useTitleStore as useStore } from '.';
import { ActionType as Types } from './types';

const titleActions = () => ({
  addContentItem: (payload: { href: string }) => {
    useStore.getState().dispatch({ type: Types.SAVE_PAGE, payload });
  },
});

export { titleActions };
