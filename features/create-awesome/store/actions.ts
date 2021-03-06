import { useAwesomeStore as store } from '.';
import { adapter } from '@/services/api';
import { ActionContext, ActionType as Types } from './types';
import { handleError, handleSuccess } from '@/helpers/handler-notify';

const contentActions = () => ({
  addContentItem: (context: ActionContext) => {
    const { contentText, addContentIndex } = context;

    const [title, ...restLinks] = contentText
      .split('\n')
      .map((str: string) => str?.replace(/-/, '').split(','));

    const indexName = title.toString();

    if (indexName) {
      addContentIndex({ contentIndex: indexName });
    }

    const links = restLinks.map(([name, link]) => ({
      name,
      url: link,
    }));

    const content = {
      [indexName]: [...links],
    };

    store.getState().dispatch({
      type: Types.ADD_CONTENT_ITEM,
      payload: { contentItem: content },
    });
  },

  addContentIndex: (payload: any) => {
    store.getState().dispatch({ type: Types.ADD_CONTENT_INDEX, payload });
  },

  saveAwesome: async (payload: any) => {
    try {
      const response = await adapter.post(
        '/create-awesome',
        {
          contentItem: payload.contentItem,
          title: payload.title,
        },
      );

      if (response.status !== 200) {
        throw response;
      }

      if (response.status === 200) {
        handleSuccess('Awesome created');
      }
    } catch (error) {
      handleError(error);
    }
  },

  resetStore: async () => {
    store.getState().dispatch({ type: Types.RESET_AWESOME });
    handleSuccess('Reseted previous awesome');
    if (document) {
      const form = document.querySelector('#awesome-form') as HTMLFormElement;
      if (form) return form.reset();
    }
	 },
});

export { contentActions };
