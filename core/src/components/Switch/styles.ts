import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(({ colors, shadows, spacing }) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      marginRight: spacing(1)
    },
    switchBase: {
      '&$checked': {
        color: colors.primary.default
      },
      '&$checked + $track': {
        backgroundColor: colors.primary.default
      }
    },
    checked: {},
    track: {
      backgroundColor: colors.background.primary,
      boxShadow: shadows[1]
    }
  })
);
