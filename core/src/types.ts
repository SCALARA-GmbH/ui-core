export type Orientation = 'vertical' | 'horizontal';

export const SIZES = ['large', 'medium', 'small'] as const;
type SizeTypes = typeof SIZES;
export type Size = SizeTypes[number];

export const COLORS = ['initial', 'primary', 'secondary', 'error', 'success'] as const;
type ColorTypes = typeof COLORS;
export type Color = ColorTypes[number];
