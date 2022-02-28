import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { styled } from '../../../styles/theme';

export const Container = styled('div', {
  background: '$background',
  fontFamily: 'Poppins',
  minHeight: '100vh',
  padding: '7rem 1rem 0 1rem',

  '@media (min-width: 720px)': {
    padding: '8rem 1rem 2rem 24rem',
  },

  '@media (min-width: 970px)': {
    padding: '7.5rem 4rem 2rem 25rem',
  },
});

export const Section = styled('section', {
  color: '$gray50',
});

export const SectionHeader = styled('div', {
  color: '$gray50',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Separator = styled('div', {
  background: '$separator',
  minHeight: '1px',
  width: '100%',
});

export const PageTitle = styled('h1', {
  fontWeight: 900,
  fontSize: '$5',
});

export const PageDescription = styled('p', {
  fontSize: '$10',
  color: '$secondary',
  margin: 0,
  fontWeight: 700,
  background: '$highlight145',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
});

export const PageIndice = styled('h3', {
  fontWeight: 800,
  paddingTop: '3rem',
  fontSize: '$7',
  fontFamily: '$secondary',
  color: '$gray50',
});

export const PageIndiceRef = styled('li', {
  fontWeight: 400,
  fontSize: '$5',
  fontFamily: '$secondary',
  padding: '0.2rem 0',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '$primary',
  },
});

export const PageContent = styled('main', {
  background: '$mediumBackground',
  width: '100%',
  padding: '0 1rem 1rem 2rem',
  marginTop: '1rem',
  borderRadius: '0.5rem',
  fontFamily: '$primary',
  minHeight: '100vh',
});

export const PageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const IconDelete = styled(AiOutlineDelete, {
  cursor: 'pointer',
  marginRight: '2rem',
  color: '$gray50',
  transition: 'color 0.3s, transform 0.4s ease',
  '&:hover': {
    color: '$danger',
    transform: 'scale(1.1)',
  },
});

export const IconEdit = styled(AiOutlineEdit, {
  cursor: 'pointer',
  color: '$gray50',
  transition: 'color 0.3s, transform 0.4s ease',
  '&:hover': {
    color: '$green',
    transform: 'scale(1.1)',
  },
});
