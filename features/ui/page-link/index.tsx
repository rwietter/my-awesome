import { styled } from '@stitches/react';

const PageLink = styled('a', {
  fontSize: '$5',
  fontFamily: '$primary',
  fontWeight: 400,
  transition: 'all 0.3s ease',
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
