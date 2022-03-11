import { keyframes, styled } from '@/features/ui/theme';

const gradient = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

// export const Container = styled('div', {
//   position: 'relative',
//   width: '100%',
//   display: 'grid',
//   gridTemplateColumns: '1fr',
//   gridTemplateRows: '1fr 1fr 1fr',
//   minHeight: '100vh',
//   color: '$gray50',
// });

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  color: '$gray50',
  overflow: 'hidden',
});
