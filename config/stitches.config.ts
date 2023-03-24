import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      "color-1": "#F6E1C3",
      "color-2": "#E9A178",
      "color-3": "#A84448",
      "color-4": "#7A3E65",
    },
  },
});

export const secondTheme = createTheme("secondTheme", {
  colors: {
    "color-1": "#222831",
    "color-2": "#393E46",
    "color-3": "#00ADB5",
    "color-4": "#EEEEEE",
  },
});

export const thirdTheme = createTheme("thirdTheme", {
  colors: {
    "color-4": "#FFF5E4",
    "color-3": "#FFE3E1",
    "color-2": "#FFD1D1",
    "color-1": "#FF9494",
  },
});

export const globalStyles = globalCss({
  "*": {
    backgroundColor: "$color-1",
    fontFamily: "Fira Code",
  },
});
