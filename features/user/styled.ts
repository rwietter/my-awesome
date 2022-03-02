import { styled } from '@/features/ui/theme';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: '$background',
});

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  background: '$gray100',
  padding: '1rem 1rem',

  '@media (min-width: 520px)': {
    padding: '3rem 5rem',
  },

  '@media (min-width: 720px)': {
    padding: '3rem 5rem',
  },
});

const Title = styled('h1', {
  fontFamily: '$secondary',
  fontSize: '$7',
  margin: '0',
  fontWeight: 900,
  color: '$gray50',

  '@bp3': {
    fontSize: '$9',
  },
});

const Label = styled('label', {
  fontFamily: '$secondary',
  fontSize: '$5',
  alignSelf: 'flex-start',
  padding: '0.2rem 0',
  fontWeight: 500,
  color: '$gray50',

  '&:not(:last-child)': {
    marginTop: '1rem',
  },
});

const Input = styled('input', {
  fontFamily: '$secondary',
  fontSize: '$4',
  fontWeight: 400,
  background: '$gray200',
  color: '$gray50',
  border: 'none',
  outline: 'none',
  padding: '1.3rem',
  width: '100%',
});

export {
  Wrapper, Form, Title, Label, Input,
};
