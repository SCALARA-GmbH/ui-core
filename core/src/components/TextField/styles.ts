import { createStyles } from '@material-ui/core';

import { makeStyles } from '../ThemeProvider/styles';
import { getFontStyle } from '../Typography/styles';

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        position: 'relative',
        minHeight: theme.spacing(11.5),
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
      },
      noPadding: {
        padding: theme.spacing(0),
      },
      endAdornment: {
        margin: 0,
        height: '100%',
        maxHeight: 'none',
        backgroundColor:
          theme.type === 'light'
            ? theme.colors.neutral['6']
            : theme.colors.neutral['3'],
      },
      input: {
        ...getFontStyle('c3'),
        padding: theme.spacing(2, 2, 2, 2),
        color: theme.colors.text.main,
        '&::placeholder': {
          color: theme.colors.neutral['3'],
        },
        transition: theme.transitions.create('background-color'),
        borderRadius: 0,
        backgroundColor: theme.colors.neutral['6'],
        '&:disabled': {
          color: theme.colors.disabled,
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
        boxShadow: theme.shadows[2],
        borderRadius: 0,
        '&:invalid': {
          boxShadow: theme.shadows[2],
          borderRadius: 0,
        },
      },
      bottomText: {
        minHeight: 18,
      },
    }),
  { name: 'SCA__TextField' }
);
