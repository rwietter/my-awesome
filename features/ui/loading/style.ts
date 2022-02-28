import { keyframes } from '@stitches/react';
import { styled } from '@/features/ui/theme';

const moveSvg = keyframes({
  '0%': {
    offsetDistance: '0%',
  },
  '25%': {
    background: '#5628EE',
  },
  '75%': {
    background: '#23C4F8',
  },
  '100%': {
    offsetDistance: '100%',
  },
});

const drop1 = keyframes({
  '100%': {
    transform: 'translate(32px, 8px) scale(0)',
  },
});

const drop2 = keyframes({
  '0%': {
    transform: 'translate(0, 0) scale(.9)',
  },
  '100%': {
    transform: 'translate(32px, -8px) scale(0)',
  },
});

export const InfinityChrome = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  div: {
    position: 'absolute',
    width: '16px',
    height: '16px',
    background: '#8C6FF0',
    boxShadow: '2px 2px 8px rgba(#8C6FF0, .09)',
    borderRadius: '50%',
    animation: `${moveSvg} 6.9s linear infinite`,
    '-webkit-filter': 'url(#goo)',
    filter: 'url(#goo)',
    transform: 'scaleX(-1)',
    offsetPath: 'path("M64.3636364,29.4064278 C77.8909091,43.5203348 84.4363636,56 98.5454545,56 C112.654545,56 124,44.4117395 124,30.0006975 C124,15.5896556 112.654545,3.85282763 98.5454545,4.00139508 C84.4363636,4.14996252 79.2,14.6982509 66.4,29.4064278 C53.4545455,42.4803627 43.5636364,56 29.4545455,56 C15.3454545,56 4,44.4117395 4,30.0006975 C4,15.5896556 15.3454545,4.00139508 29.4545455,4.00139508 C43.5636364,4.00139508 53.1636364,17.8181672 64.3636364,29.4064278 Z")',
    '&:before, &:after': {
      content: '',
      position: 'absolute',
      display: 'block',
      borderRadius: '50%',
      width: '14px',
      height: '14px',
      background: 'inherit',
      top: '50%',
      left: '50%',
      margin: '-7px 0 0 -7px',
      boxShadow: 'inherit',
    },
    '&:before': {
      animation: `${drop1} .8s linear infinite`,
    },
    '&:after': {
      animation: `${drop2} .8s linear infinite .4s`,
    },
    '&:nth-child(2)': {
      animationDelay: '-2.3s',
    },
    '&:nth-child(3)': {
      animationDelay: '-4.6s',
    },
  },
});

export const Load = styled('div');
