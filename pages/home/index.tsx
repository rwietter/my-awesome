import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Background } from '../../components/background';
import { ContentItem } from '../../components/contentItem/contentItem';
import * as S from '../../components/homepage/styled';
import { IndexTitle } from '../../components/indexTitle';
import { Loading } from '../../components/loading';
import { IContent } from '../../db/config';
import { adapter } from '../../services/api';
import useAuthStore from '../api/context/auth';
import { useTitleStore } from '../api/context/page';

const HomePage = () => {
	const [title, setTitle] = useState('');
	const [pageIndex, setPageIndex] = useState([]);
	const [pageContent, setPageContent] = useState<IContent | null>(null);
	const { href } = useTitleStore();
	const { user_id, token, isLoggedIn } = useAuthStore();
	const router = useRouter();

	useEffect(() => {
		if (!isLoggedIn) {
			router.push('/user/signin');
		}
	}, [isLoggedIn, router]);

	const { isLoading, refetch } = useQuery(
		'home-query',
		async () => {
			const response = await adapter.post(
				'/page/',
				{ page: href },
				{
					headers: {
						'X-user-id': user_id,
						Authorization: `Bearer ${token}`,
					},
				},
			);

			if (response.status !== 200) {
				throw new Error(`Error: ${response.status}`);
			}

			const { content, title: contentTitle } = response.data;
			const index = content?.match(/([A-Z])\w+/g);

			setPageIndex(index);
			setTitle(contentTitle);
			setPageContent(JSON.parse(content));
		},
		{ staleTime: 300000, refetchOnWindowFocus: false },
	);

	useEffect(() => {
		refetch();
	}, [href, refetch]);

	if (isLoading) {
		return (
			<Background>
				<Loading />
			</Background>
		);
	}

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
					<ContentItem
						pageIndex={pageIndex}
						pageContent={pageContent}
					/>
				</S.Section>
			</S.PageContent>
		</S.Container>
	);
};

export default HomePage;
