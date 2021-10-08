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
          flexDirection: 'column',
          justifyContent: 'center',
          height: 'auto'
        },
        [theme.breakpoints.up('sm')]: {
          width: 704
        },
        [theme.breakpoints.up('md')]: {
          width: 960
        },
        [theme.breakpoints.up('lg')]: {
          width: 1024,
          padding: theme.spacing(0, 1, 0, 312 / 8 - 3)
        },
        [theme.breakpoints.up('xl')]: {
          width: 1440,
          padding: theme.spacing(0, 3, 0, 328 / 8 - 3)
        }
      },
      child: {
        margin: theme.spacing(0, 3),
        [theme.breakpoints.down('xs')]: {
          margin: theme.spacing(2.5, 'auto')
        },
        '&:first-child': {
          marginRight: 'auto',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1.5)
          }
        }
      }
    }),
  { name: 'SCA__Footer' }
);
