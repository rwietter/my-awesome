import { styled } from '@stitches/react';

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  background: "#000000",
  backgroundImage:
    "radial-gradient(circle at bottom left, #07303b, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at 80% 20%, #07303b, rgba(255, 255, 255, 0) 30%)",
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
});

const Title = styled("h1", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  fontWeight: 900,
  color: "#fff",
});

const Label = styled("label", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1rem, 2vw, 1rem)",
  alignSelf: "flex-start",
  padding: '0.2rem 0',
  fontWeight: 500,
  color: "#fff",

  "&:not(:last-child)": {
    marginTop: "1rem",
  },
});

const Input = styled("input", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1rem, 2vw, 1rem)",
  fontWeight: 400,
  border: "none",
  outline: "none",
  padding: "0.3rem",
});

const Submit = styled("button", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "10rem",
  height: "3rem",
  marginTop: '2rem',
  borderRadius: "4px",
  outline: "none",
  overflow: "hidden",
  cursor: "pointer",
  fontWeight: "500",
  background: "rgba(255, 255, 255, 0)",
  color: "rgb(250, 250, 250)",
  border: "1px solid rgb(228, 42, 123)",

  transition:
    "background 0.6s, color .6s, border .2s cubic-bezier(.55,.055,.675,.19)",

  "&:hover": {
    background: "rgb(250, 250, 250)",
    color: "rgb(230, 53, 130)",
    border: "1px solid rgb(250, 250, 250)",
  },
});

export { Wrapper, Form, Title, Label, Input, Submit };
