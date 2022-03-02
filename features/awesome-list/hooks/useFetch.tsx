import { Content, IsOk } from 'types';
import { useState, useEffect } from 'react';
import { adapter } from '@/services/api';
import { handleError, handleSuccess } from '@/helpers/handler-notify';

interface StateProps {
	title: string;
	isOk: IsOk;
	pageIndex: string[];
	titleId: string;
	pageContent: Content | null
}

interface FechListProps {
	url: any;
	method: 'get' | 'post' | 'put' | 'delete';
	ref: string;
}

export const useAxios = ({
  url = '', method = 'post', ref = '',
}: FechListProps): StateProps => {
  const [title, setTitle] = useState('');
  const [isOk, setIsOk] = useState<IsOk>({ isLoading: true, isError: false });
  const [pageIndex, setPageIndex] = useState<string[]>([]);
  const [pageContent, setPageContent] = useState<Content | null>(null);
  const [titleId, setTitleId] = useState('');

  const fetchData = async () => {
    try {
      const response = await adapter[method](url, { page: ref });
      const { content, title: contentTitle, title_id: titleId } = response.data;
      const parsedContend = content ? JSON.parse(content) : null;
      const contentKeys = Object.keys(parsedContend);

      setPageIndex(contentKeys);
      setTitle(contentTitle);
      setPageContent(parsedContend);
      setTitleId(titleId);
      setIsOk({ isLoading: false, isError: false });
    } catch (error) {
      handleError(error);
      setIsOk({ isLoading: false, isError: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, [ref]);

  return {
    title, isOk, pageIndex, titleId, pageContent,
  };
};

export const deleteAwesome = async (titleId: string) => {
  try {
    const response = await adapter.put('/page', { title_id: titleId });

    if (response.status !== 200) {
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
