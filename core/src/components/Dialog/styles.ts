import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(({ colors, spacing }) =>
  createStyles({
    scrollPaper: {
      backgroundColor: colors.background.primary,
      verticalAlign: 'top',
    },
    titleBar: {
      alignItems: 'center',
      justifyContent: 'right',
      backgroundColor: colors.background.primary,
      display: 'flex',
      padding: spacing(2, 1, 2, 1),
      minHeight: spacing(4),
    },
    multiStep: {
      justifyContent: 'space-between',
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '83px',
    },
    titleIcon: {
      marginRight: '24px',
    },
    offsetBackButton: {
      marginLeft: spacing(4),
    },
    closeButton: {
      float: 'right',
    },
  })
);
