import { makeStyles } from '../ThemeProvider/styles';
import { getFontWeight } from '../Typography/styles';

export const useStyles = makeStyles(
  ({ colors, spacing, shadows, transitions }) => ({
    drawerPaper: {
      width: spacing(7),
      backgroundColor: colors.neutral['0'],
      border: 'none',
      boxShadow: shadows[0],
      zIndex: 9998
    },
    drawer: {
      width: spacing(7)
    },
    item: {
      height: spacing(9),
      padding: spacing(1.5, 1),
      '&:hover': {
        backgroundColor: colors.neutral['1'],
        '& svg': {
          color: colors.neutral.F
        }
      }
    },
    logo: {
      overflowX: 'hidden',
      padding: spacing(1.25)
    },
    selected: {
      transition: transitions.create('box-shadow', {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.short
      }),
      backgroundColor: colors.neutral['1'],
      boxShadow: `4px 0px 0px 0px ${colors.secondary.default} inset`,
      '& span': {
        fontWeight: getFontWeight('c1'),
        userSelect: 'none',
        color: colors.neutral.F
      },
      '& svg': {
        color: colors.neutral.F
      },
      cursor: 'default'
    },
    deselected: {
      transition: transitions.create('box-shadow', {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.short
      }),
      backgroundColor: 'initial',
      '& span': {
        fontWeight: getFontWeight('c2'),
        userSelect: 'none',
        color: colors.neutral['4']
      },
      '& svg': {
        color: colors.neutral['4']
      }
    },
    list: {
      padding: 0
    }
  }),
  { name: 'SCA__PrimaryNavigation' }
);
