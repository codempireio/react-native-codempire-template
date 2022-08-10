export const FONTS = {
  weight: {
    [400]: 400,
    [500]: 500,
    [600]: 600,
    [700]: 700,
    [800]: 800,
  },
  size: {
    [10]: '10px',
    [14]: '14px',
    [18]: '18px',
    [28]: '28px',
  },
  family: {
    regular: 'Sans',
  },
};

export type TFontSizes = keyof typeof FONTS.size;
export type TFontWeights = keyof typeof FONTS.weight;
export type TFontFamilies = keyof typeof FONTS.family;
