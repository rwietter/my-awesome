import { styled } from '@/features/ui/theme';

const Container = styled('aside', {
  background: '$sidebar',
  fontFamily: 'Poppins',
  width: '5px',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  transition: 'width 0.2s ease',
  padding: '5.5rem 2rem 0 0.2rem',

  '&.active': {
    width: '300px',
  },

  '@media (min-width: 720px)': {
    padding: '5.5rem 3rem 0 0.2rem',
    left: 0,
    height: '100%',
    zIndex: 1,
    top: 0,
  },
});

export const OverFlow = styled('div', {
  overflow: 'hidden',
});

export const Button = styled('button', {
  position: 'absolute',
  right: '-20px',
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  cursor: 'pointer',

  outline: 'none',
  border: 'none',
  background: '$gray100',
  boxShadow: '0 2px 2px 2px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export { Container };
