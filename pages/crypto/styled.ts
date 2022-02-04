import { styled } from "@stitches/react";

export const Container = styled("div", {
  padding: "5rem 5rem 2rem 20rem",
  backgroundColor: '#000000',
  fontFamily: 'Poppins',
  backgroundImage: 'radial-gradient(circle at bottom left, #07303b, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at 80% 20%, #07303b, rgba(255, 255, 255, 0) 30%)',
  minHeight: "100vh",
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
