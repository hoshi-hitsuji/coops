import { createCss, StitchesCss } from "@stitches/react";

const stitchesConfig = createCss({
  theme: {
    colors: {
      primaryHSL: "40deg 100% 66%",
      dangerousHSL: "0deg 68% 42%",
      textHSL: "0deg 0% 100%",
      elevation0HSL: "210deg 10% 12%",
      elevation1HSL: "210deg 11% 15%",
      elevation2HSL: "210deg 9% 20%",
      primary100: "hsl($primaryHSL / 100%)",
      primary66: "hsl($primaryHSL / 66%)",
      primary33: "hsl($primaryHSL / 33%)",
      primary10: "hsl($primaryHSL / 10%)",
      primary8: "hsl($primaryHSL / 8%)",
      primary0: "hsl($primaryHSL / 0%)",
      dangerous100: "hsl($dangerousHSL / 100%)",
      dangerous66: "hsl($dangerousHSL / 66%)",
      dangerous33: "hsl($dangerousHSL / 33%)",
      dangerous10: "hsl($dangerousHSL / 10%)",
      dangerous8: "hsl($dangerousHSL / 8%)",
      dangerous0: "hsl($dangerousHSL / 0%)",
      text100: "hsl($textHSL / 100%)",
      text66: "hsl($textHSL / 66%)",
      text33: "hsl($textHSL / 33%)",
      text10: "hsl($textHSL / 10%)",
      text8: "hsl($textHSL / 8%)",
      text0: "hsl($textHSL / 0%)",
      elevation0: "hsl($elevation0HSL / 100%)",
      elevation1: "hsl($elevation1HSL / 100%)",
      elevation2: "hsl($elevation2HSL / 100%)",
      popOut: "hsl($elevation2HSL / 66%)",
      cardGradient:
        "radial-gradient(71.72% 56.77% at 0% 0%, rgba(255, 196, 82, 0.1) 0%, rgba(255, 196, 82, 0) 100%), hsl(210, 11%, 15%)",
    },
    space: {
      8: "8px",
      10: "10px",
      16: "16px",
      20: "20px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      cardPadding: "$56",
      input: "18px 20px",
      item: "8px 12px",
    },
    fontSizes: {
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      40: "40px",
      heading1: "$40",
      heading2: "$32",
      heading3: "$24",
      heading4: "$20",
      heading5: "$16",
      label1: "$16",
      paragraph1: "$16",
    },
    fonts: {
      sans: "Spoqa Han Sans Neo, Noto Sans KR, sans-serif",
    },
    fontWeights: {
      bold: 700,
      medium: 500,
      heading: "$bold",
      label: "$medium",
      boldLabel: "$bold",
      paragraph: "$medium",
    },
    lineHeights: {
      150: "150%",
      120: "120%",
      heading: "$150",
      label: "$120",
      paragraph: "$150",
    },
    sizes: {},
    radii: {
      none: "0",
      8: "8px",
      12: "12px",
      20: "20px",
      full: "99999px",
      input: "$8",
      medium: "$12",
      large: "$20",
    },
    shadows: {
      raised: "0px 2px 1px rgba(0, 0, 0, 0.1)",
      overlay: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      popOut: "0px 12px 24px rgba(0, 0, 0, 0.1)",
    },
    zIndices: {
      raised: "1",
      overlay: "2",
      popOut: "3",
    },
  },
  media: {
    bp: "(max-width: 800px)",
    bpr: "(min-width: 800px)",
  },
});

export const { styled, css, keyframes, getCssString, theme } = stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;
