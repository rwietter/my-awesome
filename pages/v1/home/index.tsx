import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ContentItem } from '../../../components/contentItem/contentItem';
import * as S from '../../../components/homepage/styled';
import { IndexTitle } from '../../../components/indexTitle';
import { notifyError, Toastfy } from '../../../components/toastfy';
import { httpError } from '../../../helpers/http-error';
import { adapter } from '../../../services/api';
import useAuthStore from '../../api/context/auth';
import { authActions } from '../../api/context/auth/actions';
import { useTitleStore } from '../../api/context/page';

export type IContent = {
	[key in string]: {
		name: string;
		url: string;
	}[];
};

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState([]);
  const [pageContent, setPageContent] = useState<IContent | null>(null);
  const { href } = useTitleStore();
  const { isLoggedIn } = useAuthStore();
  const { logout } = authActions();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push('/user/signin');
  //   }
  // }, [isLoggedIn, router]);

  useEffect(() => {
    (async () => {
      if (!href) return;
      try {
        const response = await adapter.post('/page', { page: href });

        if (response.status !== 200) {
          throw response;
        }

        const { content, title: contentTitle } = response.data.body;
        const index = content?.match(/([A-Z])\w+/g);

        setPageIndex(index);
        setTitle(contentTitle);
        setPageContent(JSON.parse(content));
      } catch (error: any) {
        const { statusCode, name, message } = httpError(error, 'home');
        notifyError({
          id: name,
          message,
          name,
          statusCode,
        });
      }
      setLoading((state) => !state);
    })();
  }, [href]);

  return (
		<S.Container>
			<S.Section>
				<S.PageDescription>
					Sua lista {title && `de ${title}`}
				</S.PageDescription>
			</S.Section>

			<S.PageContent>
				<S.Section>
					<S.PageIndice>Índice</S.PageIndice>
					<IndexTitle pageIndex={pageIndex} />
				</S.Section>

				<S.Separator />

				<S.Section>
					<ContentItem pageIndex={pageIndex} pageContent={pageContent} isLoading={isLoading} />
				</S.Section>
			</S.PageContent>
			<Toastfy />
		</S.Container>
  );
};

export default HomePage;
