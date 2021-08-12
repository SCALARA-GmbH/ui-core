import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom: spacing(3),
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 'calc(100% - 45px)',
      alignItems: 'center',
    },
    text: {
      flex: '1 100%',
    },
    avatar: {
      margin: spacing(0, 1),
    },
    marginRight: {
      marginRight: spacing(1),
    },
    marginBottom: {
      marginBottom: spacing(0.25),
    },
  }),
);
