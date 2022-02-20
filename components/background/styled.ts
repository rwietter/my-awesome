import { styled } from '@stitches/react';

const Container = styled(`div`, {
  position: `relative`,
  width: `100%`,
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  minHeight: `100vh`,
  color: "$gray50",
  background: "$background",

  "@media (min-width: 460px)": {
    padding: "5rem",
  },

  "@media (min-width: 720px)": {
    padding: "5rem 5rem 2rem 20rem",
  },
});

export { Container };
