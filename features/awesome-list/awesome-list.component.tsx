import { ContentItem } from '@/components/contentItem/contentItem';
import * as S from './styled';
import { IndexTitle } from '@/components/indexTitle';
import { Toastfy } from '@/features/ui/toastfy';
import { deleteAwesome, useAxios } from './hooks/useFetch';
import { useTitleStore } from './store';

const AwesomeList = () => {
  const { href: ref } = useTitleStore();

  const {
    title, isOk, pageIndex, titleId, pageContent,
  } = useAxios({
    method: 'post',
    url: '/page',
    ref,
  });

  return (
		<S.Container>
			<S.SectionHeader>
				<S.PageDescription>
				Your list {title && `of ${title}`}
				</S.PageDescription>
				<S.PageContainer>
					<S.IconDelete size={28} onClick={() => deleteAwesome(titleId)} />
					<S.IconEdit size={28} />
				</S.PageContainer>
			</S.SectionHeader>

			<S.PageContent>
				<S.Section>
					<S.PageIndice>Content</S.PageIndice>
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

export { AwesomeList };
