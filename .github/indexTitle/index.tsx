import { FC } from 'react';
import { IsOk } from 'types';
import { VscChevronRight } from 'react-icons/vsc';
import { styled } from '@/features/ui/theme';

interface IndexTitleProps {
	contentKeys: string[];
	isOk: IsOk;
}

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 0 1rem 0',
  color: '$primary',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '$primaryHover',
  },
});

const ContentTitle = styled('a', {
  fontWeight: 600,
  fontSize: '$5',
  fontFamily: '$secondary',
});

const ArrowIcon = styled(VscChevronRight, {
  color: 'inherit',
  marginRight: '0.5rem',
});

const IndexTitle: FC<IndexTitleProps> = ({ contentKeys, isOk }) => (
	<div>
		{!isOk.isLoading ? (
		  contentKeys?.map((item: string, idx) => (
				<Center key={idx.toString()}>
					<ArrowIcon size={15} />
					<ContentTitle href={`#${item.toLowerCase()}`}>{item}</ContentTitle>
				</Center>
		  ))
		) : (
			<div />
		)}
	</div>
);

export { IndexTitle };
