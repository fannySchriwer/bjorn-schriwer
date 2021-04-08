export default {
  colors: {
    text: "#fff",
    background: "#000",
    primary: "#970009",
    highlight: "#D3020C",
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256, 512],
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Roboto, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  useBodyStyles: "true",
  useBorderBox: "true",
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
    },
  },
  p: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: [1],
    color: "white",
  },
  h2: {
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: [3],
    color: "white",
  },
};
