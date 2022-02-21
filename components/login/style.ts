import { styled } from '../../styles/theme';

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
  fontSize: '$9',
  margin: '0 0 2rem 0',
  fontWeight: 900,
  color: '$gray50',
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

const Submit = styled('button', {
  fontFamily: '"Poppins", sans-serif',
  fontSize: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: '20rem',
  width: '100%',
  height: '4.5rem',
  marginTop: '3rem',
  borderRadius: '4px',
  outline: 'none',
  overflow: 'hidden',
  cursor: 'pointer',
  fontWeight: '500',
  background: '$highlight145',
  color: '$white',
  border: '1px solid $gray400',

  transition:
    'background 0.3s, box-shadow .3s, color .3s, border .2s cubic-bezier(.55,.055,.675,.19)',

  '&:hover': {
    background: '$highlight145',
    color: '$white',
    boxShadow: '0 5px 7px -3px rgba(0,0,0,0.3)',
    outline: '1px solid $green',
  },
});

export { Wrapper, Form, Title, Label, Input, Submit };
