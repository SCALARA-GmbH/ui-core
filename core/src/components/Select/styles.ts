import { createStyles, makeStyles } from '../..';
import { getFontStyle } from '../Typography/styles';

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      paper: {
        borderRadius: 0,
        border: `1px solid ${theme.colors.border.main}`,
        boxShadow: theme.shadows[0],
      },
      item: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        cursor: 'pointer',
        padding: theme.spacing(0, 3),
        minHeight: theme.spacing(7),
        '&&': {
          backgroundColor: theme.colors.background.primary,
        },
        '&:hover': {
          backgroundColor: theme.colors.neutral['6'],
        },
        '&.Mui-disabled': {
          opacity: 1,
        },
        '&.Mui-selected': {
          backgroundColor: theme.colors.neutral['6'],
        },
        '&.Mui-selected:hover': {
          backgroundColor: theme.colors.neutral['6'],
        },
      },
      placeholder: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        cursor: 'pointer',
        padding: theme.spacing(0, 3),
        minHeight: theme.spacing(6),
        '&&': {
          backgroundColor: theme.colors.background.primary,
        },
        '&.Mui-disabled': {
          opacity: 1,
        },
      },
      selected: {
        backgroundColor: theme.colors.neutral['6'],
      },
      list: {
        backgroundColor: theme.colors.background.primary,
        padding: theme.spacing(0, 0, 1.5, 0),
      },
      disabled: {
        pointerEvents: 'none',
        backgroundColor: theme.colors.background.disabled,
        color: theme.colors.disabled,
      },
      filled: {
        backgroundColor: theme.colors.neutral['6'],
        color: theme.colors.text.main,
        '&:focus': {
          backgroundColor: theme.colors.neutral['5'],
        },
      },
      empty: {
        backgroundColor: theme.colors.neutral['6'],
        color: theme.colors.text.label,
        '&:focus': {
          backgroundColor: theme.colors.neutral['5'],
        },
      },
      input: {
        display: 'flex',
        alignItems: 'center',
        ...getFontStyle('c3'),
        padding: theme.spacing(0, 2),
        minHeight: theme.spacing(6),
        transition: theme.transitions.create('background-color'),
        borderRadius: 0,
        '&:hover': {
          backgroundColor: theme.colors.neutral['5'],
        },
      },
      error: {
        boxShadow: theme.shadows[2],
        borderRadius: 0,
        '&:invalid': {
          boxShadow: theme.shadows[2],
          borderRadius: 0,
        },
      },
      label: {
        marginBottom: theme.spacing(0.5),
      },
      bottomText: {
        minHeight: 18,
      },
      optionImage: {
        paddingRight: theme.spacing(1),
      },
    }),
  { name: 'SCA__Select' }
);
