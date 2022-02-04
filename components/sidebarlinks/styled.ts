import { styled } from "@stitches/react";
import Link from "next/link";

export const Container = styled("nav", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
  flexFlow: "column",
  padding: "0 0 0.1rem 0",
});

export const Page = styled(Link, {});

export const TextLink = styled("span", {
  color: "#ffffff",
  fontSize: "clamp(1em, 2vw, 1.3em)",
  margin: "0.5rem 0",
  cursor: 'pointer',
  fontWeight: 700,
  fontFamily: "Poppins",
});
