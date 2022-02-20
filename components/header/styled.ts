import { styled } from '../../styles/theme';

const ContainerCSS = styled("header", {
  background: "$gray200",
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  position: "fixed",
  top: 0,
  padding: `0.5rem 0.2rem`,
  zIndex: 1,
  width: `100%`,
  height: `4.5rem`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',

  '@media (min-width: 720px)': {
    padding: `0.5rem`,
  }
});

const NavCSS = styled("nav", {
  width: 'fit-content',
  color: '$gray50',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  "a": {
    fontFamily: '$secondary',
    fontWeight: 400,
    padding: '0 0.5rem',
    fontSize: '$3',
    textGradient: '$highlight30',

    '@media (min-width: 720px)': {
      fontSize: '$5',
    },
  },
  
  'a[data-type="logout"]': {
    cursor: 'pointer',
  },
});

const TitleCSS = styled("div", {
  width: 'fit-content',
  color: '$gray50',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 400,
  fontFamily: '$secondary',
  padding: '0 0.3rem 0 0.3rem',
  fontSize: '$3',

  '@media (min-width: 720px)': {
    padding: '0 0.5rem 0 2rem',
    fontSize: '$5',
  }
});


export { ContainerCSS, NavCSS, TitleCSS };
