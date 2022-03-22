import { useEffect, useState } from 'react';
import * as S from './styled';
import { useFetchAwesome, useDeleteAwesome } from './hooks';
import { useAwesomeListStore } from './store';
import { MarkdownRender } from './awesome-md.component';
import { sideNavigationEffect } from './hooks/useNavigationQuery';
import { Sidebar } from './components/sidebar';
import Header from '@/components/header';
import { AlertDialog } from '../ui/alert-dialog';
import { handleError } from '@/helpers/handler-notify';

const AwesomeList = () => {
  const { awesomeName, awesomeTitleId } = useAwesomeListStore();
  const [fontSize, setFontSize] = useState<
		'increment' | 'decrement' | 'normal'
	>('normal');

  const {
    content, isOk, title, titleId,
  } = useFetchAwesome({
    awesomeName,
    id: awesomeTitleId,
  });

  const handleDeleteAwesome = () => {
    if (!titleId || !title) {
      return handleError({
        response: { data: { message: 'Não há nada a excluir' } },
      });
    }
    useDeleteAwesome(titleId, title);
  };

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
						{title && titleId && (
							<>
								<AlertDialog handle={handleDeleteAwesome}>
									<S.IconDelete size={20} />
								</AlertDialog>
								<S.IconEdit size={20} />
								<S.IncrementFontSize
									size={20}
									onClick={handleIncrementFontSize}
								/>
								<S.DecrementFontSize
									size={20}
									onClick={handleDecrementFontSize}
								/>
							</>
						)}
					</S.PageContainer>
				</S.SectionHeader>

				<S.PageContent>
					<S.Section>
						<MarkdownRender
							content={content}
							isOk={isOk}
							fontSize={fontSize}
						/>
					</S.Section>
				</S.PageContent>
			</S.Container>
		</>
  );
};

export { AwesomeList };
