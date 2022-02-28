import { useEffect, useState } from 'react';
import { ContentItem } from '@/components/contentItem/contentItem';
import * as S from './styled';
import { IndexTitle } from '@/components/indexTitle';
import { useTitleStore } from '@/api/context/page';
import { Toastfy } from '@/features/ui/toastfy';
import { Content, IsOk } from '../../../types';
import { fether, deleteAwesome } from './actions';

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [isOk, setIsOk] = useState<IsOk>({ isLoading: true, isError: false });
  const [pageIndex, setPageIndex] = useState<string[]>([]);
  const [pageContent, setPageContent] = useState<Content | null>(null);
  const [titleId, setTitleId] = useState('');
  const { href } = useTitleStore();

  useEffect(() => {
    fether({
      href,
      setPageIndex,
      setTitle,
      setPageContent,
      setIsOk,
      setTitleId,
    });
  }, [href]);

  return (
		<S.Container>
			<S.SectionHeader>
				<S.PageDescription>
					Sua lista {title && `de ${title}`}
				</S.PageDescription>
				<S.PageContainer>
					<S.IconDelete
						size={28}
						onClick={() => deleteAwesome(titleId)}
					/>
					<S.IconEdit size={28} />
				</S.PageContainer>
			</S.SectionHeader>

			<S.PageContent>
				<S.Section>
					<S.PageIndice>Índice</S.PageIndice>
					<IndexTitle pageIndex={pageIndex} isOk={isOk} />
				</S.Section>

				<S.Separator />

				<S.Section>
					<ContentItem
						pageIndex={pageIndex}
						pageContent={pageContent}
						isOk={isOk}
					/>
				</S.Section>
			</S.PageContent>
			<Toastfy />
		</S.Container>
  );
};

export default HomePage;
