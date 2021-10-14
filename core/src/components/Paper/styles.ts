import { createStyles, makeStylesWithProps } from '../..';

export const useStyles = makeStylesWithProps<{
  elevated: boolean;
  hoverable: boolean;
}>(({ colors, shadows }) =>
  createStyles({
    root: {
      backgroundColor: colors.background.primary,
      boxShadow: ({ elevated }) => (elevated ? shadows[2] : shadows[1]),
      cursor: ({ hoverable }) => (hoverable ? 'pointer' : 'initial'),
      transition: 'box-shadow 0.2s',
    },
  })
);
