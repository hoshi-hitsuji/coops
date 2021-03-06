import { CSS, styled, theme } from "../../stitches.config";

import { alignItems, justifyContent } from "./properties";

const justify = justifyContent.reduce((variants, value) => {
  return {
    ...variants,
    [value]: {
      justifyContent: value,
    } as CSS,
  };
}, {}) as {
  [index in typeof justifyContent[number]]: CSS;
};
const align = alignItems.reduce((variants, value) => {
  return {
    ...variants,
    [value]: {
      alignItems: value,
    } as CSS,
  };
}, {}) as {
  [index in typeof alignItems[number]]: CSS;
};
const gap = Object.entries(theme.space).reduce((variants, [key, value]) => {
  return {
    ...variants,
    [key]: {
      gap: `$${key}`,
    } as CSS,
  };
}, {}) as { [index in keyof typeof theme.space]: CSS };
export const Flex = styled("div", {
  appearance: "none",
  boxSizing: "border-box",
  display: "flex",
  variants: {
    direction: {
      horizontal: {
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
      },
    },
    reverse: {
      true: {},
      false: {},
    },
    justify,
    align,
    gap,
  },
  compoundVariants: [
    {
      direction: "horizontal",
      reverse: true,
      css: {
        flexDirection: "row-reverse",
      },
    },
    {
      direction: "vertical",
      reverse: true,
      css: {
        flexDirection: "column-reverse",
      },
    },
  ],
});
