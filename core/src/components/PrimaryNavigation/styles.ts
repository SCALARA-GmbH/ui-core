import { makeStyles } from '../ThemeProvider/styles';
import { getTooltipStyle } from '../Tooltip/Tooltip';

export const useStyles = makeStyles(
  ({ colors, spacing, shadows, transitions, mixins, zIndex }) => ({
    mobileRoot: {
      zIndex: zIndex.primaryNavigation,
    },
    drawerPaper: {
      width: mixins.primaryNavigationDesktopWidth,
      backgroundColor: colors.neutral['0'],
      border: 'none',
      boxShadow: shadows[0],
    },
    drawerPaperMobile: {
      width: '100%',
      backgroundColor: colors.neutral['0'],
      border: 'none',
      boxShadow: shadows[0],
      top: spacing(6),
      height: '100vh',
    },
    mobileDrawer: {
      display: 'flex',
      flexDirection: 'row',
    },
    drawer: {
      width: mixins.primaryNavigationDesktopWidth,
      zIndex: zIndex.primaryNavigation,
    },
    item: {
      height: spacing(9),
      padding: spacing(1.5, 1),
      '&:hover': {
        backgroundColor: colors.neutral['1'],
      },
      '&:hover > $deselectedItem': {
        color: colors.neutral.F,
      },
    },
    mobileSpace: {
      height: spacing(6),
    },
    itemMobile: {
      height: spacing(7),
      padding: spacing(1, 1.5),
      '&:hover': {
        color: colors.neutral.F,
        backgroundColor: colors.neutral['1'],
      },
      '&:hover > $deselectedItem': {
        color: colors.neutral.F,
      },
    },
    logo: {
      overflowX: 'hidden',
      padding: spacing(1),
      marginBottom: spacing(2.5),
    },
    selected: {
      transition: transitions.create('box-shadow', {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.short,
      }),
      backgroundColor: colors.neutral['1'],
      boxShadow: `4px 0px 0px 0px ${colors.secondary['75']} inset`,
      cursor: 'default',
    },
    deselected: {
      transition: transitions.create('box-shadow', {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.short,
      }),
      backgroundColor: 'initial',
    },
    selectedItem: {
      transition: transitions.create('color', {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.short,
      }),
      color: colors.neutral.F,
    },
    deselectedItem: {
      color: colors.neutral['4'],
    },
    list: {
      padding: 0,
    },
    tooltip: {
      visibility: 'hidden',
      transition: transitions.create('opacity', {
        easing: transitions.easing.easeIn,
        duration: transitions.duration.short,
      }),
      opacity: 0,
      'div:hover > &': {
        opacity: 1,
        visibility: 'visible',
      },
      marginTop: -spacing(4.5),
      left: spacing(7.5),
      position: 'fixed',
      ...getTooltipStyle({ colors, shadows, spacing }),
    },
    mobileMenuButton: {
      '&:hover': {
        backgroundColor: colors.neutral['1'],
      },
      marginLeft: 'auto',
      alignItems: 'center',
      display: 'flex',
    },
    appBar: {
      position: 'absolute',
      zIndex: zIndex.primaryNavigation - 1,
    },
    toolbarMobile: {
      paddingLeft: spacing(0.25),
      paddingRight: spacing(0),
    },
    toolbarTablet: {
      paddingLeft: spacing(1.5),
      paddingRight: spacing(0),
    },
    toolbar: {
      height: mixins.primaryNavigationMobileHeight,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    appBarSelectedItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      opacity: 1,
      transition: transitions.create('opacity', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.short,
      }),
    },
    logoTablet: {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    logoMobile: {
      position: 'fixed',
      top: spacing(1),
      left: spacing(1.5),
      opacity: 1,
      transition: transitions.create('opacity', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.short,
      }),
    },
    transparent: {
      opacity: 0,
    },
    bottom: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      bottom: 0,
      width: mixins.primaryNavigationDesktopWidth,
      marginBottom: spacing(1),
      justifyContent: 'center',
    },
    bottomMobile: {
      width: '100%',
    },
    dividerBottom: {
      position: 'fixed',
      bottom: spacing(10),
      width: mixins.primaryNavigationDesktopWidth,
      backgroundColor: colors.neutral['2'],
    },
    hide: {
      display: 'none',
    },
    dividerBottomMobile: {
      marginTop: spacing(6),
      backgroundColor: colors.neutral['2'],
    },
    text: {
      paddingLeft: spacing(2),
    },
    appBarSelectedItemText: {
      paddingLeft: spacing(0.25),
    },
  }),
  { name: 'SCA__PrimaryNavigation' }
);
