import Image from 'next/image';
import { styled } from '@/features/ui/theme';

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  fontSize: '$4',
  background: '#111111',
  fontFamily: '$secondary',
});

export const Main = styled('main', {
  maxWidth: '100rem',
  margin: '0 auto',
  paddingTop: '12rem',
  paddingBottom: '8rem',
  overflow: 'hidden',

  '@bp2': {
    paddingTop: '15rem',
    paddingBottom: '10rem',
  },
});

export const ImageAwesome = styled('div', {
  padding: '1rem',
  boxShadow: '0px 10px 15px -3px rgba(100,100,100,0.2)',
  '@bp2': {
    padding: '2rem',
  },
  '@bp3': {
    padding: '1rem',
  },
});

export const MainHeader = styled('header', {
  padding: '0 2rem 3rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column',

  '@bp2': {
    padding: '0 2rem 3rem 2rem',
  },

  '@bp3': {
    padding: '0 5rem 3rem 5rem',
  },

  '@bp4': {
    padding: '0 0 3rem 0',
  },
});

export const Title = styled('h2', {
  textGradient: '$gradientGreen',
  fontSize: '2em',
  textAlign: 'center',
  margin: '0 0 1rem 0',

  '@bp3': {
    fontSize: '2em',
  },

  '@bp4': {
    fontSize: '3em',
  },
});

export const Description = styled('p', {
  textGradient: '$gradientYellow',
  fontSize: '1.5em',
  textAlign: 'center',
});

export const GetStarted = styled('button', {
  width: 'auto',
  padding: '1.2rem 2.5rem',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  background: '$primary',
  borderRadius: '5px',
  transition: 'background 0.3s ease',

  '&:hover': {
    background: '$primaryHover',
  },
  a: {
    color: '#111111',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
});
