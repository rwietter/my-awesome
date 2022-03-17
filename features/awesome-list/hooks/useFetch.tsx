import { IsOk } from 'types';
import { useState, useEffect } from 'react';
import { adapter } from '@/services/api';
import { handleError, handleSuccess } from '@/helpers/handler-notify';
import {
  FechListProps,
  UseFetchAwesomeReturnProps,
  ContentState,
} from './types';

export const useFetchAwesome = ({
  awesomeName = '',
}: FechListProps): UseFetchAwesomeReturnProps => {
  const [isOk, setIsOk] = useState<IsOk>({ isLoading: true, isError: false });
  const [state, setState] = useState<ContentState>({
    title: '',
    content: '',
    titleId: '',
  });

  const fetchData = async () => {
    try {
      const response = await adapter.get('/page', {
        params: { page: awesomeName },
      });

      if (response.data.status !== 200 || response.data.error) {
        throw response;
      }

      const { content, title, titleId } = response.data;
      const parsedContent = JSON.parse(content);

      setState({
        content: parsedContent,
        title,
        titleId,
      });
      setIsOk({ isLoading: false, isError: false });
    } catch (error) {
      handleError(error);
      setIsOk({ isLoading: false, isError: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, [awesomeName]);

  return { ...state, isOk };
};

export const deleteAwesome = async (titleId: string) => {
  try {
    const response = await adapter.delete('/page', {
      params: { title_id: titleId },
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
