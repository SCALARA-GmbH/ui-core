export const Variants = ['outlined', 'filled'] as const;
type VariantTypes = typeof Variants;
export type Variant = VariantTypes[number];
