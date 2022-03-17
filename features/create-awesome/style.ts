import MdEditor from 'react-markdown-editor-lite';
import { styled, keyframes } from '@/features/ui/theme';

const pulse = keyframes({
  '0%': {
    transform: 'scale(1)',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)',
  },

  '70%': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)',
  },

  '100%': {
    transform: 'scale(1)',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
  },
});

export const Container = styled('section', {
  position: 'relative',
  width: '100%',
  // display: 'grid',
  // padding: '6rem 0.5rem 0 0.5rem',
  // gridTemplateColumns: '1fr',
  // gridTemplateRows: '1fr 1fr',
  justifyContent: 'center',
  alignItems: 'start',
  minHeight: '100vh',
  color: '$gray50',
  background: '$background',
  '@media(min-width: 1125px)': {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
  },
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
});

export const Label = styled('label', {
  fontFamily: '$secondary',
  fontSize: '$4',
  alignSelf: 'flex-start',
  padding: '0.2rem 0',
  fontWeight: 500,
  color: '$gray50',

  '&:not(:last-child)': {
    marginTop: '1rem',
  },
});

export const Input = styled('input', {
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

export const TextArea = styled('textarea', {
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

export const Submit = styled('button', {
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
    'background 0.2s, box-shadow .3s, color .2s, border .2s cubic-bezier(.55,.055,.675,.19)',

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

export const Title = styled('h1', {
  fontFamily: '$secondary',
  fontSize: '$5',
  fontWeight: 700,
  margin: 0,
  padding: 0,
  textGradient: '$highlight30',
  '&[data-type="preview"]': {
    paddingTop: '4rem',
  },

  '@media (min-width: 720px)': {
    fontSize: '$10',

    '&[data-type="preview"]': {
      paddingTop: 0,
    },
  },

  '@media (min-width: 1100px)': {
    fontSize: '$10',
  },
});

export const FlexButton = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  alignItems: 'center',

  'div:not(:nth-child(3))': {
    marginRight: '1rem',
  },

  'button[type="submit"]': {
    animation: `${pulse} 2s infinite`,
  },
});

export const Section = styled('section', {
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  padding: '0.4rem',
  paddingBottom: '0.4rem',

  '@media(min-width: 720px)': {
    padding: '2rem',
  },
});

export const Forms = styled('form', {
  background: '$background',
  border: '1px solid $gray400',
  height: '100vh',
  padding: '4.2rem 0 0 0',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  'button[data-type=md]': {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
  },
});

export const FormNameContainer = styled('div', {
  display: 'flex',
  width: 'max-content',
  margin: '0 auto',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp2': {
    width: '50rem',
  },
});

export const FormNameButtonFlex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
});

export const FormName = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray200',
  flexFlow: 'column',
  width: '100%',
  padding: '5rem 2rem',
  borderRadius: '10px',

  '@bp2': {
    padding: '10rem 5rem',
  },
});

export const MdEditorCSS = styled(MdEditor, {
  background: '$gray100',
  border: '1px solid $gray400',
  height: '100vh',
  position: 'relative',
  width: '100%',

  '@bp3': {
    height: '90vh',
    width: '90%',
    margin: '2rem auto',
  },

  '.rc-md-navigation': {
    background: '$gray100',
    borderBottom: '1px solid $gray400',
    color: '$gray50',
    fontWeight: 600,
    fontFamily: '$secondary',
  },
  '.editor-container .sec-md .section-container': {
    background: '$gray100',
    color: '$gray50',
    fontWeight: 500,
    fontFamily: '$secondary',
    letterSpacing: '0.07rem',
  },
  '.editor-container .custom-html-style': {
    color: '$gray50',
    fontWeight: 500,
    fontFamily: '$secondary',
    letterSpacing: '0.07rem',
  },
  '.editor-container .sec-md .input': {
    overflowY: 'hidden',
    borderRight: '2px solid $gray200',
  },
  '.rc-md-navigation .button-wrap .button:hover': {
    color: '$gray50',
  },
});
