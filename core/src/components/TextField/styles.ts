import { createStyles } from '@material-ui/core';

import { makeStyles } from '../ThemeProvider/styles';
import { getFontStyle } from '../Typography/styles';

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        position: 'relative',
        minHeight: '92px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      label: {
        marginBottom: theme.spacing(0.5),
      },
      multiline: {
        alignItems: 'flex-start',
        height: 'fit-content',
        padding: theme.spacing(2, 2, 2, 2),
      },
      adornedEnd: {
        padding: theme.spacing(2, 2, 2, 2),
      },
      notAdornedEnd: {
        padding: theme.spacing(2, 2, 2, 2),
      },
      endAdornment: {
        margin: 0,
        height: '100%',
        maxHeight: 'none',
        backgroundColor: theme.type === 'light' ? theme.colors.neutral['6'] : theme.colors.neutral['3'],
      },
      input: {
        ...getFontStyle('c3'),
        color: theme.colors.text.main,
        '&::placeholder': {
          color: theme.colors.neutral['3'],
        },
        transition: 'background-color 0.2s',
        borderRadius: 0,
        backgroundColor: theme.colors.neutral['6'],
        '&:disabled': {
          backgroundColor: theme.colors.background.disabled,
        },
        '&:hover:enabled': {
          backgroundColor: theme.colors.neutral['5'],
        },
        '&:focus:enabled': {
          backgroundColor: theme.colors.neutral['6'],
        },
      },
      error: {
        boxShadow: `0px 0px 0px 2px ${theme.colors.error.main} inset`,
        borderRadius: 0,
        '&:invalid': {
          boxShadow: `0px 0px 0px 2px ${theme.colors.error.main} inset`,
          borderRadius: 0,
        },
      },
      bottomText: {
        minHeight: 18,
      },
    }),
  { name: 'SCA__TextField' },
);
