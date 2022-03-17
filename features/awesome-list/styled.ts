import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Link from 'next/link';
import { styled } from '@/features/ui/theme';

export const Container = styled('div', {
  background: '$background',
  fontFamily: 'Poppins',
  minHeight: '100vh',
  width: '100%',
  padding: '7rem 1.5rem 0 7rem',
  transition: 'padding 0.5s ease',

  '&.active': {
    transition: 'padding 0.5s ease',
    paddingLeft: '350px',
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

export const PageIndice = styled('h1', {
  fontWeight: 800,
  paddingTop: '1rem',
  fontSize: '$10',
  fontFamily: '$primary',
  textAlign: 'center',
  textGradient: '$highlight30',
});

export const PageIndiceRef = styled('li', {
  fontWeight: 400,
  fontSize: '$5',
  fontFamily: '$secondary',
  padding: '0.2rem 0',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '$primary',
  },
});

export const PageContent = styled('main', {
  background: '$bgMd',
  width: '100%',
  padding: '2rem 1rem 1rem 2rem',
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
  transition: 'color 0.2s, transform 0.4s ease',
  '&:hover': {
    color: '$danger',
    transform: 'scale(1.1)',
  },
});

export const IconEdit = styled(AiOutlineEdit, {
  cursor: 'pointer',
  color: '$gray50',
  transition: 'color 0.2s, transform 0.4s ease',
  '&:hover': {
    color: '$green',
    transform: 'scale(1.1)',
  },
});

export const ReactMarkdownCSS = styled(ReactMarkdown, {
  fontSize: '$4',
});

export const HighlighterCSS = styled(SyntaxHighlighter, {
  background: '#1B1B1E !important',
});
