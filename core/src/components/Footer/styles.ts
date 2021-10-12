import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        display: 'flex',
        alignItems: 'center',
        height: theme.spacing(7),
        color: theme.colors.neutral['2'],
        background: theme.colors.background.primary,
        margin: theme.spacing(2, 0, 2, 0),
        boxSizing: 'border-box',
        [theme.breakpoints.down('xs')]: {
          width: 320,
          height: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
          width: 704,
        },
        [theme.breakpoints.up('md')]: {
          width: 960,
        },
        [theme.breakpoints.up('lg')]: {
          padding: theme.spacing(0, 0, 0, 280 / 8),
          width: 1024,
        },
        [theme.breakpoints.up('xl')]: {
          width: 1440,
        },
      },
      content: {
        width: '100%',
        display: 'flex',
        columnGap: `${theme.spacing(6)}px`,
        [theme.breakpoints.down('xs')]: {
          flexFlow: 'column wrap',
          height: 'auto',
          rowGap: `${theme.spacing(5)}px`,
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
