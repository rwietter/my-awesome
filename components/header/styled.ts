import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { AiOutlineMore } from 'react-icons/ai';
import { styled } from '@/features/ui/theme';

const HexagonIcon = styled(VscDebugBreakpointLog, {
  color: '$gray50',
});

const SeparatorIcon = styled(AiOutlineMore, {
  color: '$gray50',
});

const ContainerCSS = styled('header', {
  background: '$gray100',
  position: 'fixed',
  top: 0,
  padding: '0.5rem 0.2rem',
  zIndex: 20,
  width: '100%',
  height: '4.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',

  '@media (min-width: 720px)': {
    padding: '0.5rem',
  },
});

const NavCSS = styled('nav', {
  width: 'fit-content',
  color: '$gray50',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  a: {
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

const TitleCSS = styled('div', {
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
  },
});

export {
  ContainerCSS, NavCSS, TitleCSS, HexagonIcon, SeparatorIcon,
};
