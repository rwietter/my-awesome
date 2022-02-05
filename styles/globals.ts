import { css, globalCss } from "@stitches/react";
import Poppins from '../public/fonts/Poppins/Poppins-Bold.ttf'

const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  body: {
    position: `relative`,
    boxSizing: `border-box`,
    background: `#151718`,
    fontFamily: `Untitled Sans`,
    overflow: `overlay`,
  },
  "@font-face": {
    fontFamily: `Untitled Sans`,
    src: `local("../public/fonts/UntitledSansWeb-Regular.woff2"),
    url("../public/fonts/UntitledSansWeb-Regular.woff2")`,
  },
});

export default GlobalStyles;
