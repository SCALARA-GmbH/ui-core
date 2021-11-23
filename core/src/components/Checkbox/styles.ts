import { alpha } from '@mui/material';

import { createStyles, makeStyles } from '../..';

const checkSvg =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='checkbox-/-04-checked' transform='translate(-18.000000, -18.000000)' fill='%23FFFFFF'%3E%3Cg id='Group' transform='translate(18.000000, 18.000000)'%3E%3Cpolygon id='Path' points='7 15 2 10 3.41 8.59 7 12.17 14.59 4.58 16 6'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        display: 'flex',
        alignItems: 'flex-start',
      },
      icon: {
        width: 18,
        height: 18,
        boxShadow: `inset 0 0 0 2px ${theme.colors.neutral['3']}`,
        'input:disabled ~ &': {
          boxShadow: `inset 0 0 0 2px ${theme.colors.disabled}`,
        },
      },
      checkedIcon: {
        borderRadius: 0,
        backgroundColor: theme.colors.secondary.default,
        '&:before': {
          display: 'block',
          width: 18,
          height: 18,
          backgroundImage: `url("${checkSvg}")`,
          content: '""',
        },
        'input:disabled ~ &': {
          backgroundColor: theme.colors.disabled,
        },
      },
      focus: {
        background: theme.colors.neutral['6'],
        outline: `2px solid ${theme.colors.secondary.default}`,
        outlineOffset: `1px`,
        boxShadow: `0px 0px 0px 7px ${alpha(
          theme.colors.secondary.default as string,
          0.15
        )} `,
      },
      checkbox: {
        padding: theme.spacing(0.5),
        color: theme.colors.neutral['3'],
        '&:hover': {
          backgroundColor: theme.colors.background.hover,
        },
        borderRadius: 0,
      },
      checked: {
        color: theme.colors.secondary.default,
      },
      error: {
        '&:hover': { backgroundColor: theme.colors.neutral['6'] },
        padding: theme.spacing(0.5),
        color: theme.colors.error.main,
      },
      text: {
        paddingLeft: theme.spacing(0.5),
        paddingTop: theme.spacing(0.25),
        display: 'flex',
        flexDirection: 'column',
      },
    }),
  { name: 'SCA__CheckBox' }
);
