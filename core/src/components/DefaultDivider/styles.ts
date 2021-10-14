import { makeStyles } from '../ThemeProvider/styles';

export const useStyles = makeStyles(
  ({ colors }) => ({
    root: {
      width: '100%',
      backgroundColor: colors.border.main,
    },
  }),
  { name: 'SCA__Divider' }
);
