import { makeStylesWithProps } from '../ThemeProvider/styles';
import { getFontWeight } from '../Typography/styles';

export const useStyles = makeStylesWithProps<{
  disabled?: boolean;
  secondary?: boolean;
}>(
  ({ colors, spacing }) => ({
    item: {
      height: spacing(6),
      padding: spacing(1.5, 3.75),
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
      padding: 0
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
    }
  }),
  { name: 'SCA_Navigation' }
);
