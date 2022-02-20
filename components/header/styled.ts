import { styled } from '../../styles/theme';

const ContainerCSS = styled("header", {
  background: "$gray200",
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  position: "fixed",
  top: 0,
  padding: `0.5rem`,
  zIndex: 1,
  width: `100%`,
  height: `3rem`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
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
    fontSize: '1rem',
    textGradient: '$highlight30'
  }
});

const TitleCSS = styled("div", {
  width: 'fit-content',
  color: '$gray50',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 400,
  fontFamily: '$secondary',
  padding: '0 0.5rem 0 2rem',
});


export { ContainerCSS, NavCSS, TitleCSS };
