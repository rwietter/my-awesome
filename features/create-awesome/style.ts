import { styled } from '../../styles/theme';

const Container = styled('section', {
  position: 'relative',
  width: '100%',
  display: 'grid',
  padding: '8rem 0.5rem 0 0.5rem',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr',
  justifyContent: 'center',
  alignItems: 'start',
  minHeight: '100vh',
  color: '$gray50',
  background: '$background',
  '@media(min-width: 720px)': {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
  },
});

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: '700px',
});

const Label = styled('label', {
  fontFamily: '"Poppins", sans-serif',
  fontSize: '$4',
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
  border: 'none',
  outline: 'none',
  padding: '1.3rem',
  background: '$gray100',
  color: '$gray50',
  marginBottom: '2rem',
  width: '100%',
});

const TextArea = styled('textarea', {
  fontFamily: '$secondary',
  fontSize: '$4',
  fontWeight: 400,
  border: 'none',
  outline: 'none',
  padding: '1.3rem',
  width: '100%',
  background: '$gray100',
  color: '$gray50',
});

const Submit = styled('button', {
  fontFamily: '"Poppins", sans-serif',
  fontSize: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: '20rem',
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
  '&': {
    marginRight: '1rem',
  },
});

const Title = styled('h1', {
  fontFamily: '$primary',
  fontSize: '$9',
  fontWeight: 700,
  margin: 0,
  textGradient: '$highlight30',
  paddingBottom: '2rem',

  '@media (min-width: 720px)': {
    fontSize: '$10',
  },

  '@media (min-width: 1100px)': {
    fontSize: '3.5rem',
  },
});

const FlexButton = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
});

const Section = styled('section', {
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  padding: '2rem',
});

export {
  Container,
  Form,
  Label,
  Input,
  Submit,
  TextArea,
  Title,
  FlexButton,
  Section,
};
