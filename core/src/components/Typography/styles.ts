import { createStyles, makeStylesWithProps, Theme } from '../..';
import { Color } from '../ThemeProvider/types';

import { TextColor, Variant } from './types';

export const getColor = ({
  color,
  theme
}: {
  color?: TextColor;
  theme: Theme;
}): Color => {
  switch (color) {
    case 'initial':
      return theme.colors.text.main;
    case 'primary':
      return theme.colors.primary.default;
    case 'secondary':
      return theme.colors.secondary.default;
    case 'success':
      return theme.colors.success.main;
    case 'error':
      return theme.colors.error.main;
    case 'hint':
    case 'label':
      return theme.colors.text.label;
    case 'subtitle':
      return theme.colors.text.subtitle;
    case 'altLabel':
      return theme.colors.text.altLabel;
    case 'disabled':
      return theme.colors.disabled;
  }
};

export const getLineHeight = (variant: Variant): string => {
  switch (variant) {
    case 't1':
      return '36px';
    case 't2':
      return '26px';
    case 't3':
      return '24px';
    case 'c1':
      return '22px';
    case 'c2':
      return '22px';
    case 'c3':
      return '22px';
    case 'c4':
      return '20px';
    case 'c5':
      return '20px';
  }
  return '22px';
};

export const getFontSize = (variant: Variant): number => {
  switch (variant) {
    case 't1':
      return 28;
    case 't2':
      return 18;
    case 't3':
      return 16;
    case 'c1':
      return 14;
    case 'c2':
      return 14;
    case 'c3':
      return 14;
    case 'c4':
      return 12;
    case 'c5':
      return 12;
  }
  return 14;
};

export const getFontWeight = (variant: Variant): number | 'normal' => {
  switch (variant) {
    case 't1':
    case 't2':
    case 't3':
    case 'c1':
      return 700;
    case 'c2':
      return 600;
    case 'c3':
      return 400;
    case 'c4':
      return 600;
    case 'c5':
      return 400;
    default:
      return 'normal';
  }
};

export const getFontStyle = (
  variant: Variant
): {
  fontFamily: 'Open Sans';
  fontSize: number;
  fontWeight: number | 'normal';
  lineHeight: string;
} => {
  return {
    fontFamily: 'Open Sans',
    fontSize: getFontSize(variant),
    fontWeight: getFontWeight(variant),
    lineHeight: getLineHeight(variant)
  };
};

export const useStyles = makeStylesWithProps<{
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  color: TextColor;
  disabled?: boolean;
  fullWidth?: boolean;
  gutterBottom?: boolean;
  onClick?: () => void;
  preserveHeight?: boolean;
  selectable?: boolean;
  variant: Variant;
}>(
  (theme: Theme) =>
    createStyles({
      root: {
        letterSpacing: 0,
        color: ({ color, disabled }) =>
          disabled ? theme.colors.disabled : getColor({ color, theme }),
        cursor: ({ onClick }) => (onClick ? 'pointer' : 'inherit'),
        display: 'block',
        fontFamily: 'Open Sans',
        fontSize: ({ variant }) => getFontSize(variant),
        fontWeight: ({ variant }) => getFontWeight(variant),
        lineHeight: ({ variant }) => getLineHeight(variant),
        minHeight: ({ preserveHeight, variant }) =>
          preserveHeight ? getLineHeight(variant) : 0,
        margin: 0,
        marginBottom: ({ gutterBottom }) => (gutterBottom ? '0.8em' : 0),
        padding: 0,
        textAlign: ({ align }) => align,
        userSelect: ({ selectable }) => (selectable ? 'auto' : 'none'),
        width: ({ fullWidth }) => (fullWidth ? '100%' : 'auto'),
        '& a': {
          position: 'relative',
          color: theme.colors.secondary.default,
          fontWeight: 700,
          textDecoration: 'none',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '1px',
            transform: 'scale(0)',
            backgroundColor: theme.colors.secondary.default,
            transition: 'transform 300ms ease'
          },
          '&:hover::after': {
            transform: 'scale(1)',
            transformOrigin: 'center'
          }
        }
      },
      noWrap: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      withLineBreak: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'pre-wrap'
      }
    }),
  { name: 'SCA__Typography' }
);
