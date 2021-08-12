import { createStyles, makeStylesWithProps, Theme } from '../..';
import { Color } from '../../types';

function getColor({ color, theme }: { color?: Color; theme: Theme }) {
  switch (color) {
    case 'initial':
      return theme.colors.background.disabled;
    case 'primary':
      return theme.colors.primary.default;
    case 'secondary':
      return theme.colors.secondary.default;
    case 'error':
      return theme.colors.error.main;
    case 'success':
      return theme.colors.success.main;
    default:
      return color;
  }
}

export const useStyles = makeStylesWithProps<{
  color: Color;
  disableGutters: boolean;
}>((theme) =>
  createStyles({
    horizontal: {
      borderBottom: ({ color }) => `1px solid ${getColor({ color, theme })}`,
      margin: ({ disableGutters }) => {
        if (disableGutters) {
          return 0;
        }
        return theme.spacing(2, 0);
      },
    },
    vertical: {
      borderRight: ({ color }) => `1px solid ${getColor({ color, theme })}`,
      margin: ({ disableGutters }) => {
        if (disableGutters) {
          return 0;
        }
        return theme.spacing(0, 2);
      },
    },
  }),
);
