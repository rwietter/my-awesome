import { styled } from "@stitches/react";
import Head from "next/head";

const Container = styled("div", {
  background: `radial-gradient(circle at top right,
    #07303b, rgba(255, 255, 255, 0) 40%),
    radial-gradient(circle at 80% 20%, #07303b,
    rgba(255, 255, 255, 0) 30%)`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  boxShadow: `0px 10px 28px -7px rgba(0,0,0,0.1)`,
  position: "relative",
  top: 0,
  padding: `0.5rem`,
  zIndex: 1,
  width: `100%`,
  height: `3rem`,
});

export { Container };
