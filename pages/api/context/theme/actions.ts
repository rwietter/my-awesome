import { useThemeStore as store } from '.';
import { ActionType as Types } from './types';

interface Payload {
  theme: 'dark' | 'light';
}

const actionTheme = () => ({
  setTheme: (payload: Payload) => {
    store.getState().dispatch({ type: Types.CHANGE_THEME, payload });
  },
});

export { actionTheme };
