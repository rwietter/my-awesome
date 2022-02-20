import { createStitches } from '@stitches/react';

const { theme: dark_theme, styled } = createStitches({
  theme: {
    colors: {
      background: "#0c0c0e",
      mediumBackground:
        "linear-gradient(to right top, #0c0c0e, #0e0e10, #0f0f11, #111113, #121214 );",
      gradient:
        "linear-gradient(90deg, #ffbe0b, #fb5607, #ff006e, #8257e5, #3a86ff );",
      highlight145: "linear-gradient(145deg, #8257e5, #c1b);",
      highlight30: "linear-gradient(43deg, #74ebd5, #9face6);",
      gray50: "#f5f7fa",
      gray100: "#27272B",
      gray200: "#1B1B1E",
      gray300: "#121214",
      gray400: "#0C0C0E",
      primary: "#74ebd5",
      secondary: "#8257e5",
      tertiary: "#ff006e",
      separator: "#1B1B1E",
      tooltip: "#ff006e",
      buttonThumb: '#F4F4F6',
    },
    space: {},
    fonts: {
      primary: `'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
      secondary: `'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
    },

  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    textGradient: (value: string) => ({
      background: value,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }),
  }
});

const { theme: light_theme } = createStitches({
  theme: {
    colors: {
      background: "#D7D7DB",
      mediumBackground:
        "linear-gradient(to left top, #D7D7DB, #D7D7DB, #E1E1E4, #F4F4F6, #F4F4F6 );",
      gradient:
        "linear-gradient(90deg, #ffbe0b, #fb5607, #ff006e, #8257e5, #3a86ff );",
      highlight145: "linear-gradient(145deg, #8257e5, #c1b);",
      highlight30: "linear-gradient(43deg, #8257e5, #2575fc);",
      gray50: "#121214",
      gray100: "#F4F4F6",
      gray200: "#F4F4F6",
      gray300: "#F4F4F6",
      gray400: "#C9C9CF",
      primary: "#ff006e",
      secondary: "#8257e5",
      tertiary: "#74ebd5",
      separator: "#C9C9CF",
      tooltip: "#8257e5",
      buttonThumb: '#121214',
    },
    space: {},
  },
});

export { dark_theme, light_theme, styled };
