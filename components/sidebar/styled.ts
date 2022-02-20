import { styled } from '@stitches/react';

const Container = styled("aside", {
  background: "$gray300",
  fontFamily: "Poppins",
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  width: `100%`,
  position: "fixed",
  padding: `1rem`,
  height: `4rem`,
  bottom: 0,
  zIndex: 1,
  top: "auto",

  "@media (min-width: 720px)": {
    width: `15rem`,
    position: "fixed",
    padding: `3rem 1rem`,
    left: 0,
    height: `100%`,
    zIndex: 1,
    top: 0,
  },
});

export { Container };
