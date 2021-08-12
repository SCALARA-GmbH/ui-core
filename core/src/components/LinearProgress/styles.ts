import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles((theme) =>
  createStyles({
    linearProgressColor: {
      backgroundColor: theme.colors.background.primary,
    },
  }),
);
