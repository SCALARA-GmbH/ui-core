import { fade } from '@material-ui/core';

import { createStyles, makeStyles, makeStylesWithProps } from '../..';

export const useStyles = makeStylesWithProps<{ disabled: boolean }>(
  (theme) =>
    createStyles({
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
          color: theme.colors.neutral['2'],
          background: 'none',
          '&:hover': {
            background: theme.colors.neutral['6']
          },
          '&:active': {
            background: theme.colors.neutral['6']
          },
          '&:focus-visible': {
            outline: `2px solid ${theme.colors.secondary.default}`,
            outlineOffset: `1px`,
            boxShadow: theme.shadows[1]
          }
        },
        '&:disabled': {
          cursor: 'not-allowed',
          background: theme.colors.background.primary
        }
      },
      span: {
        display: 'flex',
        alignItems: 'center'
      },
      button: {
        border: 'none',
        cursor: 'pointer',
        '&:disabled': {
          cursor: 'not-allowed'
        },
        '&:focus': {
          outline: 'none'
        }
      },
      icon: {
        color: (props) =>
          props.disabled
            ? theme.colors.disabled
            : theme.type === 'dark'
            ? theme.colors.neutral.F
            : theme.colors.neutral['0']
      }
    }),
  { name: 'SCA__IconButton' }
);

export const useLabelStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'inline-block',
      letterSpacing: '0.3px',
      marginLeft: theme.spacing(0.5)
    },
    disabled: {
      color: theme.colors.neutral['4']
    },
    enabled: {
      color: theme.colors.neutral['2']
    },
    hovered: {
      color: theme.colors.neutral['1']
    }
  })
);
