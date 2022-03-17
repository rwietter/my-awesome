import { styled } from '@/features/ui/theme';

const PageLink = styled('a', {
  fontSize: '$6',
  fontFamily: '$secondary',
  fontWeight: 500,
  transition: 'color 0.2s ease',
  lineHeight: '1.7',
  cursor: 'pointer',
  '&:hover': {
    color: '$primary',
    textDecorationColor: '$primary',
    textDecoration: 'underline',
    textDecorationStyle: 'wavy',
  },
});

export { PageLink };
