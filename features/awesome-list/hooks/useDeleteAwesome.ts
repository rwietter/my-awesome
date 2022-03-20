import { handleError, handleSuccess } from '@/helpers/handler-notify';
import { adapter } from '@/services/api';

export const useDeleteAwesome = async (titleId: string, title: string) => {
  try {
    const response = await adapter.delete('/page', {
      params: { title_id: titleId, title },
    });

    if (response.data.status !== 200 || response.data.error) {
      throw response;
    }

    if (window && window.location) {
      window?.location?.reload();
    }

    handleSuccess('Awesome deleted successfully');
  } catch (error: any) {
    handleError(error);
  }
};
