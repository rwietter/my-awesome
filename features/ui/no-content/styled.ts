import { styled } from '@/styles/theme';

const ContainerCSS = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const TitleCSS = styled('h1', {
  fontSize: '$9',
  fontWeight: '900',
  color: '$gray50',
  fontFamily: '$secondary',
  margin: 0,
  paddingTop: '4rem',
});

const DescriptionCSS = styled('p', {
  fontSize: '$4',
  fontWeight: '600',
  color: '$gray50',
  fontFamily: '$secondary',

  a: {
    color: '$primary',
  },
});

export { ContainerCSS, TitleCSS, DescriptionCSS };
