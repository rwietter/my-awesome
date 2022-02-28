import Link from 'next/link';
import { styled } from '@/features/ui/theme';

export const Container = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap',
  padding: '1.5rem 0.3rem 0 0.3rem',
  '@media (min-width: 720px)': {
    flexFlow: 'column',
  },
});

export const Page = styled(Link, {});

export const TextLink = styled('span', {
  fontSize: '$5',
  margin: '0.5rem 0',
  cursor: 'pointer',
  color: '$primary',
  fontWeight: 600,
  fontFamily: '$secondary',
  transition: 'color .3s ease',
  '&:hover': {
    color: '$secondary',
  },
  '&.active': {
    color: '$secondary',
  },
  '@media (min-width: 720px)': {
    fontSize: '$6',
  },
});
