import Image from 'next/image'
import { styled } from '@/features/ui/theme'

export const Header = styled('header', {
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '2rem 1rem',

  span: {
    display: 'none !important'
  },

  '@bp2': {
    padding: '2rem',

    span: {
      display: 'block !important'
    }
  }

})

export const HeaderLogo = styled(Image, {})

export const NavLinks = styled('nav', {
  display: 'inline-block',
  width: 'max-content',
  a: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'background 0.3s ease',
    position: 'relative',
    fontFamily: 'Biotif, sans-serif',
    fontWeight: '500',
    letterSpacing: '1.5px',
    fontSize: '1.4rem',
    display: 'inline-block',
    willChange: 'transform',
    borderRadius: '10px',
    padding: '1.5rem 0.3rem 1rem 0.3rem',
    background: 'rgba(250,250,250, 0)',
    '&:hover': {
      background: 'rgba(250,250,250, 0.1)',
      '&::after': {
        content: '""',
        position: 'absolute',
        margin: '0px auto',
        top: '35px',
        left: '0px',
        right: '0px',
        height: '1px',
        width: '25px',
        background: 'rgb(255, 255, 255)',
        color: '#FFF',
        transition: 'opacity .3s ease-in-out'
      }
    },
    '@bp2': {
      padding: '1.5rem 2rem 1rem 2rem'
    }
  },
  'a:nth-child(2)': {
    margin: '0'
  },
  '@media (min-width: 240px)': {
    'a:nth-child(2)': {
      margin: '0 2rem'
    }
  },
  '@bp3': {
    'a:nth-child(2)': {
      margin: '0 3rem'
    }
  }
})
