import { useAwesomeListStore as store } from '.';
import { ActionType as Types, AwesomeList } from './types';

const awesomeListActions = () => ({
  setAwesomeRef: (payload: AwesomeList) => {
    store.getState().dispatch({ type: Types.SAVE_PAGE, payload });
  },
});

export { awesomeListActions };
