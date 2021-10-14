import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(({ colors, spacing }) =>
  createStyles({
    scrollPaper: {
      backgroundColor: colors.background.primary,
      verticalAlign: 'top',
    },
    titleWrapper: {
      alignItems: 'center',
      backgroundColor: colors.background.primary,
      display: 'flex',
      padding: spacing(2, 1, 2, 1),
      minHeight: spacing(4),
    },
    content: {
      borderTop: `2px solid ${colors.background.disabled}`,
      padding: spacing(3),
    },
    offsetBackButton: {
      marginLeft: spacing(4),
    },
  })
);
