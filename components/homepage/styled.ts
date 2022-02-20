import { styled } from '@stitches/react';

export const Container = styled("div", {
  padding: "2rem 2rem 5rem 2rem",
  background: "$background",
  fontFamily: "Poppins",
  minHeight: "100vh",

  "@media (min-width: 460px)": {
    padding: "5rem",
  },

  "@media (min-width: 720px)": {
    padding: "5rem 5rem 2rem 20rem",
  },
});

export const Section = styled("section", {
  color: "$gray50",
});

export const Separator = styled("div", {
  background: '$separator',
  minHeight: '1px',
  width: '100%',
});

export const PageTitle = styled("h1", {
  fontWeight: 900,
  fontSize: 'clamp(1em, 2vw, 1.5em)'
});

export const PageDescription = styled("p", {
  fontSize: "clamp(1em, 2.5vw, 2.6em)",
  color: "$secondary",
  margin: 0,
  fontWeight: 700,
  background: "$highlight145",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

export const PageIndice = styled("h3", {
  fontWeight: 800,
  paddingTop: "3rem",
  fontSize: "clamp(1em, 2vw, 1.3em)",
  fontFamily: "$secondary",
  color: "$gray50",
});

export const PageIndiceRef = styled("li", {
  fontWeight: 400,
  fontSize: "clamp(0.8em, 2vw, 1em)",
  fontFamily: "$secondary",
  padding: "0.2rem 0",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "$primary",
  },
});

export const PageContent = styled("main", {
  background: "$mediumBackground",
  width: "100%",
  padding: "0 1rem 1rem 2rem",
  marginTop: "1rem",
  borderRadius: "0.5rem",
  fontFamily: "$primary",
});
