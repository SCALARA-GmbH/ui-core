import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(({ spacing, breakpoints }) =>
  createStyles({
    root: {
      display: 'flex',
      paddingTop: spacing(3),
      flexDirection: 'column',
      [breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    },
    buttons: {
      margin: spacing(1, 0, 0, 0),
      [breakpoints.up('sm')]: {
        margin: spacing(0, 0, 0, 2),
      },
    },
    spacer: {
      flex: 1,
    },
  }),
);
