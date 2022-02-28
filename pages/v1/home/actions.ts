import { handleError, httpError } from '../../../helpers/http-error';
import { adapter } from '../../../services/api';
import { Content, IsOk } from '../../../types';

interface Props {
	href: string;
	setPageIndex: (pageIndex: string[]) => void;
	setTitle: (title: string) => void;
	setPageContent: (content: Content | null) => void;
	setIsOk: (isOk: IsOk) => void;
	setTitleId: (titleId: string) => void;
}

export const fether = async ({
  href, setPageIndex, setTitle, setPageContent, setIsOk, setTitleId,
}: Props) => {
  if (!href) return;

  try {
    const response = await adapter.post('/page', { page: href });

    if (response.status !== 200) {
      throw response;
    }

    const { content, title: contentTitle, title_id: titleId } = response.data;
    const index = Object.keys(JSON.parse(content));

    setPageIndex(index);
    setTitle(contentTitle);
    setPageContent(JSON.parse(content));
    setTitleId(titleId);
    setIsOk({ isLoading: false, isError: false });
  } catch (error: any) {
    handleError(error);
    setIsOk({ isLoading: false, isError: true });
  }
};

export const deleteAwesome = async (titleId: string) => {
  try {
    const response = await adapter.put('/page', { title_id: titleId });

    if (response.status !== 200) {
      throw response;
    }
  } catch (error: any) {
    const status = error.response.data ?? 400;
    if (status === 500) {
      return;
    }

    handleError(error);
  }
};
