import { makeStylesWithProps, Theme } from '../..';
import { ColorPalette } from '../ThemeProvider/types';

import { Hierarchy, Variant } from './types';

const backgroundStatePalette = ({
  hierarchy,
  theme,
}: {
  hierarchy?: Hierarchy;
  theme: Theme;
}): ColorPalette => {
  switch (hierarchy) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'destructive':
      return theme.colors.destructive;
    case 'optional-instruction':
      return theme.colors.optionalInstruction;
    case 'required-instruction':
      return theme.colors.requiredInstruction;
    default:
      return theme.colors.primary;
  }
};

export const useStyles = makeStylesWithProps<{
  hierarchy: Hierarchy;
  fullWidth: boolean;
  textAlign: 'left' | 'center' | 'right';
  variant: Variant;
}>(
  (theme) => ({
    root: {
      backfaceVisibility: 'hidden',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      height: theme.spacing(6),
      textAlign: (props) => props.textAlign,
      paddingBottom: '0px',
      width: ({ fullWidth }) => (fullWidth ? '100%' : 'fit-content'),
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    outlined: {
      paddingLeft: ({ fullWidth }) =>
        fullWidth ? theme.spacing(0) : theme.spacing(3),
      paddingRight: ({ fullWidth }) =>
        fullWidth ? theme.spacing(0) : theme.spacing(3),
      '&:enabled': {
        background: theme.colors.background.primary,
        color: theme.colors.neutral['0'],
        border: `2px solid ${theme.colors.background.secondary}`,
        '&:hover': {
          background:
            theme.type === 'dark'
              ? theme.colors.neutral.F
              : theme.colors.neutral['0'],
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.colors.secondary.default}`,
          outlineOffset: `1px`,
          boxShadow: theme.shadows[1],
        },
      },
      '&:disabled': {
        border: `2px solid ${theme.colors.neutral['4']}`,
        color: theme.colors.neutral['4'],
        background: theme.colors.background.primary,
      },
    },
    text: {
      paddingLeft: ({ fullWidth }) =>
        fullWidth ? theme.spacing(0) : theme.spacing(1.5),
      paddingRight: ({ fullWidth }) =>
        fullWidth ? theme.spacing(0) : theme.spacing(1.5),
      '&:enabled': {
        '&:hover': {
          background: theme.colors.neutral['6'],
        },
        '&:active': {
          background: theme.colors.neutral['6'],
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.colors.secondary.default}`,
          outlineOffset: `1px`,
          boxShadow: theme.shadows[1],
        },
      },
    },
    contained: {
      paddingLeft: ({ fullWidth }) =>
        fullWidth ? theme.spacing(0) : theme.spacing(3),
      paddingRight: ({ fullWidth }) =>
        fullWidth ? theme.spacing(0) : theme.spacing(3),
      '&:enabled': {
        background: (props) =>
          backgroundStatePalette({ theme, hierarchy: props.hierarchy }).default,
        '&:hover': {
          background: (props) =>
            backgroundStatePalette({ theme, hierarchy: props.hierarchy })['75'],
        },
        '&:active': {
          background: (props) =>
            backgroundStatePalette({ theme, hierarchy: props.hierarchy })['75'],
        },
        '&:focus-visible': {
          background: (props) =>
            backgroundStatePalette({ theme, hierarchy: props.hierarchy })
              .default,
          outline: `2px solid ${theme.colors.secondary.default}`,
          outlineOffset: `1px`,
          boxShadow: theme.shadows[1],
        },
      },
      '&:disabled': {
        background: theme.colors.neutral['4'],
      },
    },
  }),
  { name: 'SCA__Button' }
);

export const useLabelStyles = makeStylesWithProps<{
  hierarchy: Hierarchy;
  variant: Variant;
}>(
  (theme) => ({
    root: {
      display: 'inline-block',
      letterSpacing: '0.3px',
    },
    disabled: {
      color: theme.colors.neutral['4'],
    },
    outlineHovered: {
      color:
        theme.type === 'dark'
          ? theme.colors.neutral['0']
          : theme.colors.neutral.F,
    },
    outlineEnabled: {
      color:
        theme.type === 'dark'
          ? theme.colors.neutral.F
          : theme.colors.neutral['0'],
    },
    textEnabled: {
      color:
        theme.type === 'dark'
          ? theme.colors.neutral.F
          : theme.colors.neutral['2'],
    },
    textHovered: {
      color:
        theme.type === 'dark'
          ? theme.colors.neutral['0']
          : theme.colors.neutral['1'],
    },
    contained: {
      color: theme.colors.neutral.F,
    },
  }),
  { name: 'SCA__Button_Label' }
);
