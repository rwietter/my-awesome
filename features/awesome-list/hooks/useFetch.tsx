import { IsOk } from 'types';
import { useState, useEffect } from 'react';
import { setCookie } from 'nookies';
import { adapter } from '@/services/api';
import { handleError } from '@/helpers/handler-notify';
import {
  FechListProps,
  UseFetchAwesomeReturnProps,
  ContentState,
} from './types';

export const useFetchAwesome = ({
  awesomeName = '',
  id = '',
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
        params: { page: awesomeName, pageId: id },
      });

      if (response?.data?.status !== 200 || response?.data?.error) {
        throw response;
      }

      const { content, title, titleId } = response.data;

      if (!content || !title || !titleId) {
        throw response;
      }

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
