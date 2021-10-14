import { createStyles, makeStylesWithProps, Theme } from '../..';
import { ColorPalette } from '../ThemeProvider/types';

export const COLORS = ['primary', 'secondary', 'tertiary'] as const;
type ColorTypes = typeof COLORS;
export type Color = ColorTypes[number];

const getColorPalette = (color: Color, theme: Theme): ColorPalette => {
  switch (color) {
    case 'primary':
      return theme.colors.secondary;
    case 'secondary':
      return theme.colors.tertiary;
    case 'tertiary':
      return theme.colors.requiredInstruction;
    default:
      return theme.colors.secondary;
  }
};

export const useStyles = makeStylesWithProps<{
  color: Color;
}>(
  (theme) =>
    createStyles({
      root: {
        backfaceVisibility: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.spacing(2),
        height: theme.spacing(3),
        padding: 0,
        color: ({ color }) => getColorPalette(color, theme).default,
      },
      enabled: {
        backgroundColor: ({ color }) => getColorPalette(color, theme)['50'],
      },
      selected: {
        backgroundColor: ({ color }) => getColorPalette(color, theme).default,
      },
      disabled: {
        cursor: 'not-allowed',
        background: theme.colors.neutral['5'],
      },
      label: {
        color: ({ color }) => getColorPalette(color, theme).default,
        padding: theme.spacing(0, 1.5),
      },
      labelSelected: {
        padding: theme.spacing(0, 1.5),
        color: theme.colors.neutral.F,
      },
      labelDisabled: {
        padding: theme.spacing(0, 1.5),
        color: theme.colors.neutral['3'],
      },
      clickable: {
        cursor: 'pointer',
        '&:hover': {
          '& > p': {
            color: theme.colors.neutral.F,
          },
          background: ({ color }) => getColorPalette(color, theme)['75'],
        },
      },
    }),
  { name: 'SCA__Chip' }
);
