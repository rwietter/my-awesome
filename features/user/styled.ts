import { IoLogoTwitter, IoLogoGithub, IoLogoGoogle } from 'react-icons/io5';
import { styled } from '@/features/ui/theme';

export const getIcon = (provider: 'google' | 'github' | 'twitter') => {
  const authIcons = {
    google: {
      icon: IoLogoGoogle,
      color: '#dd4b39',
    },
    github: {
      icon: IoLogoGithub,
      color: '#333',
    },
    twitter: {
      icon: IoLogoTwitter,
      color: '#1da1f2',
    },
  };

  return authIcons[provider];
};

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

export const SeparatorContainer = styled('div', {
  display: 'flex',
  color: '$gray50',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Separator = styled('div', {
  background: '$gray50',
  width: '70%',
  display: 'inline',
  height: '1px',
});

export const SeparatorTitle = styled('p', {
  fontFamily: '$secondary',
  fontSize: '$4',
  margin: '0',
  padding: '0 1rem',
  width: '100%',
  fontWeight: 400,
});

export const OAuthContainer = styled('div', {
  display: 'flex',
  width: '-webkit-fill-available',
  justifyContent: 'center',
  alignItems: 'center',
});

export const OAuthButton = styled('button', {
  width: 'max-content',

  '& + &': {
    marginLeft: '1rem',
  },
});

export const personalIcon = {
  margin: '0 0.5rem',
  cursor: 'pointer',

  variants: {
    type: {
      google: {
        fill: '$google',
        transition: 'filter 0.3s ease-in-out',

        '&:hover': {
          filter: 'brightness(1.4)',
        },
      },
      github: {
        fill: '$gray50',
        transition: 'filter 0.3s ease-in-out',

        '&:hover': {
          filter: 'brightness(0.7)',
        },
      },
      twitter: {
        fill: '$twitter',
        transition: 'filter 0.3s ease-in-out',

        '&:hover': {
          filter: 'brightness(1.4)',
        },
      },
    },
  },
};

export {
  Wrapper, Form, Title, Label, Input,
};
