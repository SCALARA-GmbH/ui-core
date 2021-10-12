import { createStyles, makeStylesWithProps } from '../..';

export const useStyles = makeStylesWithProps<{ clickable: boolean }>(
  ({ colors, spacing }) =>
    createStyles({
      root: {
        backgroundColor: colors.background.primary,
        cursor: (props) => (props.clickable ? 'pointer' : 'default'),
        padding: spacing(2),
        transition: 'background-color 0.2s',
      },
    })
);
