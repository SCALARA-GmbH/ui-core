import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles((theme) =>
  createStyles({
    backgroundColor: {
      backgroundColor: theme.colors.background.primary,
    },
    menuItem: {
      display: 'flex',
      padding: theme.spacing(1, 5, 1, 2),
      alignItems: 'center',
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: theme.spacing(1.5),
    },
    hover: {
      '&:hover': {
        color: theme.colors.primary.default,
      },
    },
    anchor: {
      position: 'fixed',
      right: 0,
    },
    toolbarMixin: theme.mixins.toolbar,
  }),
);
