import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles((theme) =>
  createStyles({
    backgroundColor: {
      backgroundColor: theme.colors.background.primary,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logoRightBorder: {
      padding: theme.spacing(0, 2, 0, 0),
      borderRight: `${theme.spacing(0.125)} solid ${
        theme.colors.background.disabled
      }`,
    },
    desktopLeft: {
      display: 'flex',
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    mobileLeft: {
      paddingLeft: theme.spacing(1),
      display: 'none',
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
      },
    },
    desktopItems: {
      padding: theme.spacing(0, 2),
      justifyContent: 'space-between',
    },
    mobileItems: {
      padding: theme.spacing(1, 3),
    },
    leftItemButtons: {
      paddingLeft: theme.spacing(1),
      '&:hover': {
        color: theme.colors.primary.default,
      },
    },
    drawerHeader: {
      backgroundColor: theme.colors.background.primary,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      justifyContent: 'flex-end',
    },
    toolbarMixin: theme.mixins.toolbar,
  })
);
