import { styled } from '@/features/ui/theme';

export const ButtonContainerCSS = styled('div', {
  width: 'auto',
  height: 'auto',
});

export const ButtonCSS = styled('button', {
  width: 'auto',
  height: 'auto',
  padding: '1rem 2.5rem',
  borderRadius: '4px',
  outline: 'none',
  border: 'none',
  background: '#8c4bff',
  color: '#fff',
  transition: 'transform .4s, background .2s cubic-bezier(.55,.055,.675,.19)',
  cursor: 'pointer',
  willChange: 'transform',

  '&:hover': {
    transform: 'scale(1.02)',
  },

  '@media (min-width: 768px)': {
    padding: '1rem 3.4rem',
  },

  variants: {
    color: {
      primary: {
        background: '#8c4bff',
        color: '$white',
        '&:hover': {
          background: '#975cff',
        },
      },
      secondary: {
        background: '$highlight30',
        color: '$gray400',
        '&:hover': {
          background: 'highlight30',
        },
      },
      tertiary: {
        background: '$tertiary',
        color: '$gray400',
      },
    },
  },
});

export const ButtonTextCSS = styled('span', {
  margin: 0,
  padding: 0,
  fontFamily: '$secondary',
  fontWeight: '600',
  fontSize: '$3',

  '@media (min-width: 768px)': {
    fontSize: '$4',
  },
});
