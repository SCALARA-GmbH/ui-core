import { makeStyles, createStyles } from '../..';

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {},
      radioWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
      },
      radio: {
        padding: theme.spacing(0.5),
        color: theme.colors.neutral['3'],
        '&:hover': {
          backgroundColor: theme.colors.background.hover,
        },
      },
      secondary: {
        '&$checked': {
          color: theme.colors.secondary.default,
          '&:hover': {
            backgroundColor: theme.colors.background.hover,
          },
        },
      },
      checked: {
        color: theme.colors.secondary.default,
        '&:hover': {
          backgroundColor: theme.colors.background.hover,
        },
      },
      text: {
        paddingTop: theme.spacing(0.375),
      },
      subtitle: {
        marginTop: theme.spacing(0.5),
      },
    }),
  { name: 'SCA__Radio' }
);
