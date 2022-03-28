import { motion as m } from 'framer-motion';
import Link from 'next/link';
import { styled } from '@/features/ui/theme';

export const MenuContainer = styled(m.div, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  paddingRight: '1rem',
  position: 'relative',
  button: {
    fontSize: '1.5rem',
    fontFamily: '$secondary',
    background: 'transparent',
    border: 'none',
    color: '$gray50',
    cursor: 'pointer',
    '&:focus': {
      outline: '$gray200 solid 1px',
    },
  },
});

export const MenuOption = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  position: 'relative',
  padding: '1rem',
  span: {
    fontSize: '1.5rem',
    fontFamily: '$secondary',
  },
});

export const UnderlineAnimation = styled(m.div, {
  position: 'absolute',
  left: '0',
  top: 35,
  right: '0',
  height: '3px',
  zIndex: 19,
  background: '$highlight30',
});

export const ProfileItem = styled('div', {
  display: 'flex',
  width: '100%',
  textDecoration: 'none',
  height: '100%',
  background: '$gray200',
  padding: '1.5rem 1rem',
  alignItems: 'center',
  justifyContent: 'flex-start',
  wordBreak: 'break-word',
  wordWrap: 'break-word',

  a: {
    marginLeft: '1rem',
    fontSize: '$5',
    fontFamily: '$secondary',
    fontWeight: 600,
    color: '$gray50 !important',
  },

  img: {
    borderRadius: '50%',
  },
});

export const SubItemsContainerCSS = styled(m.div, {
  top: 45,
  background: '$gray100',
  position: 'fixed',
  color: '$gray50',
  maxWidth: '21rem',
  borderRadius: '4px',
  width: '100%',
  padding: '1.5rem 1.3rem',
  '&:nth-child(2)': {
    transform: 'translateX(-40px) !important',
  },
});

export const SubItemCSS = styled(m.div, {
  fontSize: '1.5rem',
  fontFamily: '$secondary',

  span: {
    maxWidth: '23rem',
    fontFamily: '$primary',
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: '1.3',
  },
});

export const SubItemText = styled('div', {
  maxWidth: '23rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '.title': {
    marginLeft: '1rem',
    fontSize: '$5',
    fontFamily: '$secondary',
  },
  color: '$gray50',
  transition: '$transitonTheme',

  padding: '1.5rem 0',

  '&[data-profile="true"]': {
    padding: '0',
  },

  '&:hover': {
    color: '$secondary',
  },

  '&:nth-child(1)': {
    marginBottom: '1.5rem',
  },

});
