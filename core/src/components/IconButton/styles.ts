import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      primary: {
        '&:enabled': {
          color: theme.colors.neutral['2'],
          background: 'none',
          '&:hover': {
            background: theme.colors.neutral['6'],
          },
          '&:active': {
            background: theme.colors.neutral['6'],
          },
        },
        '&:disabled': {
          cursor: 'not-allowed',
          background: theme.colors.background.primary,
        },
      },
      secondary: {
        '&:enabled': {
          color: theme.colors.neutral['2'],
          background: 'none',
          '&:hover': {
            background: theme.colors.neutral['1'],
          },
          '&:active': {
            background: theme.colors.neutral['1'],
          },
        },
        '&:disabled': {
          cursor: 'not-allowed',
          background: theme.colors.background.primary,
        },
      },
      root: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backfaceVisibility: 'hidden',
        width: 'fit-content',
        minHeight: theme.spacing(6),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        '&:enabled': {
          '&:focus-visible': {
            outline: `2px solid ${theme.colors.secondary.default}`,
            outlineOffset: `1px`,
            boxShadow: theme.shadows[1],
          },
        },
      },
      span: {
        display: 'flex',
        alignItems: 'center',
        columnGap: theme.spacing(0.5),
      },
      button: {
        border: 'none',
        cursor: 'pointer',
        '&:disabled': {
          cursor: 'not-allowed',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      icon: {
        color: theme.colors.neutral['2'],
      },
      iconHovered: {
        color: theme.colors.neutral['1'],
      },
      disabled: {
        color: theme.colors.disabled,
      },
    }),
  { name: 'SCA__IconButton' }
);

export const useLabelStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'inline-block',
      letterSpacing: '0.3px',
    },
    disabled: {
      color: theme.colors.neutral['4'],
    },
    enabled: {
      color: theme.colors.neutral['2'],
    },
    hovered: {
      color: theme.colors.neutral['1'],
    },
  })
);
