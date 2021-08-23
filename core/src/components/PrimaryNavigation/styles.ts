import { makeStyles } from '../ThemeProvider/styles';
import { getFontStyle, getFontWeight } from '../Typography/styles';

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
      '& svg': {
        color: colors.neutral['4']
      }
    },
    list: {
      padding: 0
    },
    tooltip: {
      visibility: 'hidden',
      transition: transitions.create('opacity', {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.short
      }),
      opacity: 0,
      'div:hover > &': {
        opacity: 1,
        visibility: 'visible'
      },
      position: 'fixed',
      zIndex: 99999,
      left: spacing(7.5),
      marginTop: -spacing(4.5),
      backgroundColor: colors.neutral['1'],
      color: colors.neutral['6'],
      borderTopRightRadius: spacing(1),
      borderBottomRightRadius: spacing(1),
      borderTopLeftRadius: spacing(1),
      borderBottomLeftRadius: spacing(0),
      padding: spacing(1, 2),
      boxShadow: shadows[1],
      ...getFontStyle('c2')
    }
  }),
  { name: 'SCA__PrimaryNavigation' }
);
