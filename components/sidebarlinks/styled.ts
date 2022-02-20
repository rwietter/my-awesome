import { styled } from '@stitches/react';
import Link from 'next/link';

export const Container = styled("nav", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
  flexFlow: "column",
  padding: "1.5rem 0.3rem 0 0.3rem",
});

export const Page = styled(Link, {});

export const TextLink = styled("span", {
  fontSize: "clamp(1em, 2vw, 1.3em)",
  margin: "0.5rem 0",
  cursor: "pointer",
  color: "$primary",
  fontWeight: 600,
  fontFamily: "$primary",
  transition: "color .3s ease",
  "&:hover": {
    color: "$secondary",
  },
  "&.active": {
    color: "$secondary",
  },
});
