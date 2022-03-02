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
  fontSize: '$6',
  margin: '0.5rem 0',
  cursor: 'pointer',
  fontWeight: 800,
  fontFamily: '$secondary',
  textGradient: '$highlight30',
  transition: 'color .3s ease',
  '@bp3': {
    fontSize: '$6',
  },
});
