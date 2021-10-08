import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(
  (theme) => {
    const footer = {
      display: 'flex',
      alignItems: 'center',
      height: 56
    };
    const child = {
      height: 48,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 18 / 8),
      margin: theme.spacing(0, 12 / 8)
    };

    const children = {
      display: 'flex',
      alignItems: 'center'
    };

    const debug = {
      boxShadow: `inset 0 0 1px 1px ${theme.colors.shadow.main}`
    };

    return createStyles({
      root: {
        margin: theme.spacing(2, 0, 2, 0),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        color: theme.colors.neutral['2'],
        background: theme.colors.background.primary,
        ...debug
      },
      footer: {
        ...footer,
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
          padding: theme.spacing(0, 4, 0, 280 / 8 + 4)
        },
        [theme.breakpoints.up('xl')]: {
          width: 1440,
          padding: theme.spacing(0, 5, 0, 280 / 8 + 5)
        }
      },
      // footerXL: {
      //   ...footer,
      //   width: 1440,
      //   padding: theme.spacing(0, 5, 0, 280 / 8 + 5),
      //   boxSizing: 'border-box',
      //   ...debug
      // },
      // footerL: {
      //   ...footer,
      //   width: 1024,
      //   padding: theme.spacing(0, 4, 0, 280 / 8 + 4),
      //   boxSizing: 'border-box'
      // },
      // footerM: {
      //   ...footer,
      //   width: 960,
      //   boxSizing: 'border-box'
      // },
      // footerS: {
      //   ...footer,
      //   width: 704,
      //   boxSizing: 'border-box'
      // },
      // footerXS: {
      //   ...footer,
      //   width: 320,
      //   boxSizing: 'border-box',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   height: 'auto'
      // },
      copyright: {
        ...child,
        marginRight: 'auto',
        [theme.breakpoints.down('sm')]: {
          marginLeft: 'auto'
        }
      },
      children: {
        ...children,
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column'
        }
      },

      child: {
        ...child,
        [theme.breakpoints.down('sm')]: {
          margin: theme.spacing(0.5, 0)
        },
        '&:first-child': {
          backgroundColor: 'red !important'
        }
      }
    });
  },
  { name: 'SCA__Footer' }
);
