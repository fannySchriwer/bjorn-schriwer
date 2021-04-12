export default {
  colors: {
    text: "#000",
    background: "#fff",
  },
  breakpoints: ["768px", "1025px", "1290px"],
  space: [4, 8, 12, 16, 24, 32, 64, 96, 128, 256, 512],
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
  useBodyStyles: "true",
  useBorderBox: "true",
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      margin: "0",
    },
    p: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [3, 2],
      color: "black",
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "heading",
      textAlign: "center",
      marginTop: "32px",
      fontSize: "32px",
      fontWeight: "400",
    },
    h2: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [5, 6],
      color: "white",
      mb: [3, 4],
      textAlign: "center",
    },
    h3: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [3, 4],
      mb: [3, 4],
    },
    h4: {
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "500",
      fontSize: [3],
      color: "white",
      mb: [4, 5],
    },
  },
};
