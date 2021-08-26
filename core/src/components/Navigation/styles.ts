import { makeStylesWithProps } from '../ThemeProvider/styles';
import { getFontWeight } from '../Typography/styles';

export const useStyles = makeStylesWithProps<{
  disabled?: boolean;
  secondary?: boolean;
}>(
  ({ colors, spacing }) => ({
    item: {
      height: spacing(6),
      '&:hover': {
        backgroundColor: colors.neutral['6']
      }
    },
    selected: {
      backgroundColor: colors.neutral['6'],
      '& span': {
        fontWeight: getFontWeight('c1'),
        userSelect: 'none',
        color: colors.secondary.default
      },
      cursor: 'default'
    },
    deselected: {
      backgroundColor: 'initial',
      '& span': {
        fontWeight: getFontWeight('c2'),
        userSelect: 'none',
        color: ({ disabled }) =>
          disabled ? colors.disabled : colors.neutral['2']
      }
    },
    list: {
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    drawer: {
      width: spacing(28),
      flexShrink: 0
    },
    header: {
      userSelect: 'none',
      padding: spacing(1.75, 2.5, 2.25)
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      height: spacing(6),
      padding: spacing(3, 2.5, 0)
    },
    drawerPaper: {
      width: spacing(28),
      left: ({ secondary }) => (secondary ? spacing(7) : 0),
      zIndex: 9997,
      cursor: ({ disabled }) => (disabled ? 'not-allowed' : 'inherit')
    },
    bottom: {
      position: 'fixed',
      bottom: 0,
      width: spacing(28),
      paddingBottom: spacing(2.5)
    },
    icon: {
      padding: spacing(1.5, 1.5)
    },
    text: {
      padding: spacing(1.5, 3.75)
    }
  }),
  { name: 'SCA__Navigation' }
);
