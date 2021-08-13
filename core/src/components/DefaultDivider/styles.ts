import { makeStyles } from '../ThemeProvider/styles';

export const useStyles = makeStyles(({ colors }) => ({
  root: {
    backgroundColor: colors.border.main
  }
}));
