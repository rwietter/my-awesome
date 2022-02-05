import { styled } from "@stitches/react";

const Container = styled("aside", {
  backgroundColor: "#000000",
  fontFamily: "Poppins",
  backgroundImage:
    "radial-gradient(circle at bottom left, #07303b, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at 80% 20%, #07303b, rgba(255, 255, 255, 0) 30%)",
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  width: `100%`,
  position: "fixed",
  padding: `1rem`,
  height: `4rem`,
  bottom: 0,
  zIndex: 1,
  top: "auto",
  transition: "all 0.2s ease",

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
