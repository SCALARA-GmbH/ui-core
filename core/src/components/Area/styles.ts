import { makeStyles } from '../..';

export const useStyles = makeStyles(
  ({ colors, shadows }) => ({
    root: {
      backgroundColor: colors.background.primary,
    },
    border: {
      border: `1px solid ${colors.border.main}`,
    },
    elevated: {
      boxShadow: shadows[0],
    },
    hoverable: {
      cursor: 'pointer',
    },
  }),
  { name: 'SCA__Area' }
);
