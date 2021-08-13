import { createStyles, makeStylesWithProps } from '../..';

export const useStyles = makeStylesWithProps<{
  elevated: boolean;
  hoverable: boolean;
  border: boolean;
}>(({ colors, shadows }) =>
  createStyles({
    root: {
      backgroundColor: colors.background.primary,
      border: ({ border }) =>
        border ? `1px solid ${colors.border.main}` : 'none',
      boxShadow: ({ elevated }) => (elevated ? shadows[0] : 'none'),
      cursor: ({ hoverable }) => (hoverable ? 'pointer' : 'initial'),
      transition: 'box-shadow 0.2s'
    }
  })
);
