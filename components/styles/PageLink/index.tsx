import { styled } from '@stitches/react';

export const PageLink = styled("a", {
  fontWeight: 300,
  fontSize: "clamp(1em, 2vw, 1.1em)",
  fontFamily: "$primary",
  transition: "all 0.3s ease",
  lineHeight: "1.7",
  cursor: 'pointer',
  "&:hover": {
    color: "$primary",
    textDecorationColor: "$primary",
    textDecoration: "underline",
    textDecorationStyle: "wavy",
  },
});
