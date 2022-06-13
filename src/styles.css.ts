import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "red",
  },
  font: {
    body: "comic sans ms",
  },
});

export const exampleStyle = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: "white",
  padding: 10,
});
