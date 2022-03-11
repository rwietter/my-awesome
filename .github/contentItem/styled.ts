import { VscArrowSmallRight } from 'react-icons/vsc';
import { styled } from '@/features/ui/theme';

export const ArrowIcon = styled(VscArrowSmallRight, {
  color: 'inherit',
  marginRight: '0.5rem',
});

export const Center = styled('span', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: '$gray50',
  transition: 'color 0.1s ease',
  '&:hover': {
    color: '$primary',
  },
});
