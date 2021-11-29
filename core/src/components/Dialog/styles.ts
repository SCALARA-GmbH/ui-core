import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(({ colors, spacing, breakpoints }) =>
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
      padding: spacing(4, 4, 0, 4),
      minHeight: spacing(4),
    },
    multiStep: {
      justifyContent: 'space-between',
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: spacing(8),
    },
    titleWithSubtitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: spacing(5),
    },
    subtitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: spacing(5),
    },
    titleIcon: {
      marginRight: '24px',
    },
    content: {
      padding: spacing(0, 10, 0, 10),
      [breakpoints.up('xl')]: {
        padding: spacing(0, 12.5, 0, 12.5),
      },
    },
    offsetBackButton: {
      marginLeft: spacing(4),
    },
    closeButton: {
      float: 'right',
    },
  })
);
