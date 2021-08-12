import { makeStylesWithProps, createStyles } from '../..';

export const useStyles = makeStylesWithProps<{
  onClick?: () => void;
}>(({ breakpoints, colors, spacing }) =>
  createStyles({
    root: {
      display: 'flex',
      transition: 'background-color 0.2s',
      alignItems: 'center',
      backgroundColor: colors.background.primary,
      [breakpoints.up('xs')]: {
        padding: spacing(2),
      },
      [breakpoints.up('md')]: {
        padding: spacing(3),
      },
    },
    clickable: {
      '&:hover': {
        cursor: ({ onClick }) => (onClick ? 'pointer' : 'initial'),
        backgroundColor: colors.background.primary,
      },
    },
    grid: {
      flex: 1,
    },
  }),
);
