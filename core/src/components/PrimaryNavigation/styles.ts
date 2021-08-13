import { makeStyles } from '../ThemeProvider/styles';
import { getFontWeight } from '../Typography/styles';

export const useStyles = makeStyles(
  ({ colors, spacing, shadows, transitions }) => ({
    drawerPaper: {
      width: spacing(35),
      backgroundColor: colors.neutral['0'],
      border: 'none',
      boxShadow: shadows[0],
      zIndex: 9998
    },
    drawerOpen: {
      width: spacing(35),
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      }),
      width: spacing(7)
    },
    item: {
      height: spacing(7),
      padding: spacing(1.5, 1),
      '&:hover': {
        backgroundColor: colors.neutral['1']
      }
    },
    logo: {
      overflowX: 'hidden',
      padding: spacing(1.25)
    },
    selected: {
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
