import { styled } from "@stitches/react";

export const Container = styled("div", {
  padding: "2rem 2rem 5rem 2rem",
  backgroundColor: "#000000",
  fontFamily: "Poppins",
  backgroundImage:
    "radial-gradient(circle at bottom left, #07303b, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at 80% 20%, #07303b, rgba(255, 255, 255, 0) 30%)",
  minHeight: "100vh",

  "@media (min-width: 460px)": {
    padding: "5rem",
  },

  "@media (min-width: 720px)": {
    padding: "5rem 5rem 2rem 20rem",
  },
});

export const Section = styled("section", {
  color: "#ffffff",
});

export const Separator = styled("div", {
  background: '#333333',
  minHeight: '1px',
  width: '85%',
});

export const PageTitle = styled("h1", {
  fontWeight: 900,
  fontSize: 'clamp(1em, 2vw, 1.5em)'
});

export const PageDescription = styled("p", {
  fontWeight: 500,
  fontSize: "clamp(1em, 2vw, 1.2em)",
});

export const PageAttention = styled("span", {
  fontWeight: 400,
  display: "block",
  padding: "2.5rem 2rem 2.5rem 1rem",
  borderRadius: '0.3rem',
  background: "#000000",
  backgroundImage:
    "radial-gradient(circle at bottom left, #07303b, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at 80% 20%, #07303b, rgba(255, 255, 255, 0) 30%)",
  fontSize: "clamp(0.8em, 2vw, 1em)",
});

export const PageIndice = styled("h3", {
  fontWeight: 600,
  paddingTop: '3rem',
  fontSize: "clamp(1em, 2vw, 1.3em)",
  fontFamily: 'Poppins',
});

export const PageIndiceRef = styled("li", {
  fontWeight: 600,
  fontSize: "clamp(0.8em, 2vw, 1em)",
  fontFamily: "Poppins",
  padding: "0.2rem 0",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#42b983",
  },
});

export const PageSectionItem = styled("section", {
  fontWeight: 300,
  fontSize: "clamp(0.8em, 2vw, 1em)",
  padding: "2rem 0 0 0",
  fontFamily: "Raleway",
});

export const PageLink = styled("a", {
  fontWeight: 300,
  fontSize: "clamp(1em, 4vw, 1.1em)",
  fontFamily: "Raleway",
  transition: "all 0.3s ease",
  lineHeight: "1.7",
  "&:hover": {
    color: "#42b983",
  },
});
