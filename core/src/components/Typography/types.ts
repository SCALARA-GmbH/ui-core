export const TEXT_COLORS = [
  'initial',
  'primary',
  'secondary',
  'error',
  'success',
  'hint',
  'subtitle',
  'label',
  'clickable',
  'disabled',
] as const;
type TextColorTypes = typeof TEXT_COLORS;
export type TextColor = TextColorTypes[number];

export const TITLE_VARIANTS = ['t1', 't2', 't3'] as const;
export const CONTENT_VARIANTS = ['c1', 'c2', 'c3', 'c4', 'c5'] as const;
export const VARIANTS = [...TITLE_VARIANTS, ...CONTENT_VARIANTS] as const;
type VariantTypes = typeof VARIANTS;
export type Variant = VariantTypes[number];
