import { useEffect, useState } from 'react';
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
  const [fontSize, setFontSize] = useState<
		'increment' | 'decrement' | 'normal'
	>('normal');
  const { useNavigationQuery } = sideNavigationEffect();

  const {
    content, isOk, title, titleId,
  } = useFetchAwesome({
    awesomeName,
    id: awesomeTitleId,
  });

  useEffect(useNavigationQuery, [isNavigationOpen]);

  const handleIncrementFontSize = () => setFontSize('increment');

  const handleDecrementFontSize = () => setFontSize('decrement');

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
						<S.IconDelete size={20} onClick={() => useDeleteAwesome(titleId)} />
						<S.IconEdit size={20} />
						<S.IncrementFontSize size={20} onClick={handleIncrementFontSize} />
						<S.DecrementFontSize size={20} onClick={handleDecrementFontSize} />
					</S.PageContainer>
				</S.SectionHeader>

				<S.PageContent>
					<S.Section>
						<MarkdownRender content={content} isOk={isOk} fontSize={fontSize} />
					</S.Section>
				</S.PageContent>
				<Toastfy />
			</S.Container>
		</>
  );
};

export { AwesomeList };
