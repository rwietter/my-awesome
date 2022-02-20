import { ActionType as Types } from "./types";
import { useTitleStore as useStore } from "./index";

const titleActions = () => ({
  addContentItem: (payload: { href: string }) => {
    useStore.getState().dispatch({type: Types.SAVE_PAGE, payload });
  },
});

export { titleActions };
