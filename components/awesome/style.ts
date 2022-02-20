import { styled } from '@stitches/react';

const Container = styled(`section`, {
  position: `relative`,
  width: `100%`,
  display: "grid",
  padding: `3rem 0.5rem 0 0.5rem`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",
  justifyContent: "center",
  alignItems: "start",
  minHeight: `100vh`,
  color: "#fff",
  background: '$background',
  "@media(min-width: 720px)": {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
  },
});

const Form = styled(`form`, {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  justifyContent: `flex-start`,
  width: `100%`,
  maxWidth: `700px`,
})

const Label = styled("label", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1rem, 2vw, 1rem)",
  alignSelf: "flex-start",
  padding: "0.2rem 0",
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
  width: "100%",
});

const TextArea = styled("textarea", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1rem, 2vw, 1rem)",
  fontWeight: 400,
  border: "none",
  outline: "none",
  padding: "0.3rem",
  width: "100%",
});

const Submit = styled("button", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  maxWidth: "14rem",
  height: "3rem",
  marginTop: "2rem",
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

const Title = styled("h1", {
  fontFamily: '"Poppins", sans-serif',
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  fontWeight: 700,
  margin: 0,
  color: "#fff",
});

const FlexButton = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: '100%',
});

const Section = styled("section", {
  display: "flex",
  flexFlow: "column",
  width: "100%",
  padding: "2rem",
});

export {
  Container,
  Form,
  Label,
  Input,
  Submit,
  TextArea,
  Title,
  FlexButton,
  Section,
};
