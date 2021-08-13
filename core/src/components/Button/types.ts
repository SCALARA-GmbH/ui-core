export const Hierarchies = [
  'primary',
  'secondary',
  'destructive',
  'required-instruction',
  'optional-instruction'
] as const;
type HierarchyTypes = typeof Hierarchies;
export type Hierarchy = HierarchyTypes[number];

export const Variants = ['outlined', 'contained', 'text'] as const;
type VariantTypes = typeof Variants;
export type Variant = VariantTypes[number];

export const States = [
  'default',
  'hover',
  'active',
  'focus',
  'disabled'
] as const;
type StateTypes = typeof States;
export type State = StateTypes[number];
