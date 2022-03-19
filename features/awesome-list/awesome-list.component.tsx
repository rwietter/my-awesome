import { useEffect } from 'react';
import * as S from './styled';
import { Toastfy } from '@/features/ui/toastfy';
import { useFetchAwesome, useDeleteAwesome } from './hooks';
import { useAwesomeListStore } from './store';
import { MarkdownRender } from './awesome-md.component';
import { sideNavigationEffect } from './hooks/useNavigationQuery';
import { Sidebar, useSidebarStore } from './components/sidebar';
import Header from '@/components/header';

const AwesomeList = () => {
  const { awesomeName, awesomeTitleId } = useAwesomeListStore();
  const { isNavigationOpen } = useSidebarStore();
  const { useNavigationQuery } = sideNavigationEffect();

  const {
    content, isOk, title, titleId,
  } = useFetchAwesome({
    awesomeName,
    id: awesomeTitleId,
  });

  useEffect(useNavigationQuery, [isNavigationOpen]);

  return (
    <>
      <Header />
			<S.Container className="main-content">
				<Sidebar />
				<S.SectionHeader>
					<S.PageDescription>
						Your Awesome {title && `of ${title}`}
					</S.PageDescription>
					<S.PageContainer>
						<S.IconDelete size={28} onClick={() => useDeleteAwesome(titleId)} />
						<S.IconEdit size={28} />
					</S.PageContainer>
				</S.SectionHeader>

				<S.PageContent>
					<S.Section>
						<S.PageIndice>{title && title}</S.PageIndice>
					</S.Section>
					<S.Section>
						<MarkdownRender content={content} isOk={isOk} />
					</S.Section>
				</S.PageContent>
				<Toastfy />
			</S.Container>
    </>
  );
};

export { AwesomeList };
