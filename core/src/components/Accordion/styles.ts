import { createStyles, makeStylesWithProps } from '../..';

export const useStyles = makeStylesWithProps<{ open: boolean }>(({ colors, spacing }) =>
  createStyles({
    root: {
      padding: (props) => (props.open ? spacing(3, 0) : 0),
      transition: 'padding 0.2s',
    },
    header: {
      alignItems: 'flex-end',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      transition: 'background-color 0.2s',
      backgroundColor: colors.background.primary,
      '&:hover': {
        backgroundColor: colors.background.hover,
      },
      padding: spacing(5, 1, 1.25, 1.5),
    },
    headerContent: {
      flexDirection: 'column',
      display: 'flex',
      flex: 1,
    },
    action: {
      marginRight: spacing(1),
    },
    icon: {
      transition: 'transform 0.3s',
      transform: 'rotate(0deg)',
    },
    iconOpen: {
      transform: 'rotate(180deg)',
    },
    content: {
      borderTop: `2px solid ${colors.background.primary}`,
    },
  }),
);
