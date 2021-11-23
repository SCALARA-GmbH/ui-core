import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: theme.spacing(7),
        columnGap: theme.spacing(6),
        background: theme.colors.background.primary,
        color: theme.colors.neutral['2'],
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
          flexFlow: 'column wrap',
          height: 'auto',
          rowGap: theme.spacing(5),
          '& > *': {
            margin: 'auto',
          },
          padding: theme.spacing(2.125, 0),
        },
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(0, 3),
        },

        [theme.breakpoints.up('lg')]: {
          padding: theme.spacing(0, 4),
        },
        [theme.breakpoints.up('xl')]: {
          padding: theme.spacing(0, 6),
        },
      },
    }),
  { name: 'SCA__Footer' }
);
