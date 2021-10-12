import { makeStylesWithProps } from '../ThemeProvider/styles';
import { getFontWeight } from '../Typography/styles';

export const useStyles = makeStylesWithProps<{
  disabled?: boolean;
}>(
  ({ colors, spacing, mixins, zIndex }) => ({
    item: {
      height: spacing(6),
      '&:hover': {
        backgroundColor: colors.background.hover,
      },
    },
    selected: {
      backgroundColor: colors.neutral['6'],
      '& span': {
        fontWeight: getFontWeight('c1'),
        userSelect: 'none',
        color: colors.secondary.default,
      },
      cursor: 'default',
    },
    deselected: {
      backgroundColor: 'initial',
      '& span': {
        fontWeight: getFontWeight('c2'),
        userSelect: 'none',
        color: ({ disabled }) =>
          disabled ? colors.disabled : colors.neutral['2'],
      },
    },
    list: {
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    drawer: {
      width: spacing(28),
      flexShrink: 0,
      zIndex: zIndex.secondaryNavigation,
    },
    header: {
      userSelect: 'none',
      padding: spacing(1.75, 2.5, 2.25),
    },
    divider: {
      marginBottom: spacing(3),
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      height: spacing(6),
      padding: spacing(0, 2.5),
    },
    secondary: {
      left: mixins.primaryNavigationDesktopWidth,
    },
    drawerPaper: {
      width: spacing(28),
      cursor: ({ disabled }) => (disabled ? 'not-allowed' : 'inherit'),
    },
    bottom: {
      position: 'fixed',
      bottom: 0,
      width: spacing(28),
      paddingBottom: spacing(2.5),
    },
    test: {
      color: 'red',
    },
    subMenuIcon: {
      paddingRight: spacing(1.25),
      color: colors.icon.navigation,
    },
    icon: {
      padding: spacing(1.5, 1.5),
    },
    text: {
      padding: spacing(1.5, 4),
    },
    hide: {
      display: 'none',
    },
    secondaryMobile: {
      top: mixins.primaryNavigationMobileHeight,
    },
    select: {
      zIndex: zIndex.secondaryNavigation,
      border: `1px solid ${colors.border.main}`,
      position: 'fixed',
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: spacing(6),
      backgroundColor: colors.background.primary,
      '&:hover': {
        backgroundColor: colors.background.hover,
      },
      cursor: ({ disabled }) => (disabled ? 'not-allowed' : 'pointer'),
    },
    selectMobile: {
      paddingRight: spacing(1),
      paddingLeft: spacing(1.25),
    },
    selectTablet: {
      paddingRight: spacing(1.5),
      paddingLeft: spacing(2.5),
    },
    open: {
      backgroundColor: colors.background.hover,
    },
    selectIcon: {
      marginLeft: 'auto',
    },
    mobileRoot: {
      width: '100%',
      zIndex: zIndex.secondaryNavigation,
    },
    drawerMobile: {
      width: '100%',
      position: 'fixed',
    },
    drawerPaperMobile: {
      width: '100%',
      top: spacing(6),
    },
    areaSecondary: {
      marginTop: mixins.primaryNavigationMobileHeight,
    },
    area: {
      paddingTop: spacing(3),
    },
    iconOpen: {
      transform: 'rotate(180deg)',
    },
  }),
  { name: 'SCA__Navigation' }
);
