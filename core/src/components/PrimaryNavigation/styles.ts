import { makeStyles } from '../ThemeProvider/styles';
import { getTooltipStyle } from '../Tooltip/Tooltip';

export const useStyles = makeStyles(
  ({ colors, spacing, shadows, transitions }) => ({
    drawerPaper: {
      width: spacing(7),
      backgroundColor: colors.neutral['0'],
      border: 'none',
      boxShadow: shadows[0],
      zIndex: 9998
    },
    drawerPaperMobile: {
      width: '100%',
      backgroundColor: colors.neutral['0'],
      border: 'none',
      boxShadow: shadows[0],
      zIndex: 9997,
      top: spacing(6)
    },
    mobileDrawer: {
      display: 'flex',
      flexDirection: 'row'
    },
    drawer: {
      width: spacing(7)
    },
    item: {
      height: spacing(9),
      padding: spacing(1.5, 1),
      '&:hover': {
        backgroundColor: colors.neutral['1']
      }
    },
    itemMobile: {
      height: spacing(8),
      padding: spacing(1, 1),
      '&:hover': {
        backgroundColor: colors.neutral['1']
      }
    },
    logo: {
      overflowX: 'hidden',
      padding: spacing(1.25)
    },
    logoMobile: {
      marginLeft: 'auto'
    },
    selected: {
      transition: transitions.create('box-shadow', {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.short
      }),
      backgroundColor: colors.neutral['1'],
      boxShadow: `4px 0px 0px 0px ${colors.secondary.default} inset`,
      cursor: 'default'
    },
    deselected: {
      transition: transitions.create('box-shadow', {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.short
      }),
      backgroundColor: 'initial'
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
      marginTop: -spacing(4.5),
      left: spacing(7.5),
      position: 'fixed',
      zIndex: 99999,
      ...getTooltipStyle({ colors, shadows, spacing })
    },
    toolbar: {
      display: 'flex',
      flexDirection: 'row'
    },
    mobileMenuButton: {
      marginLeft: 'auto'
    },
    appBar: {
      position: 'absolute',
      zIndex: 9999
    }
  }),
  { name: 'SCA__PrimaryNavigation' }
);
