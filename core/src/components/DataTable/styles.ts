import { createStyles, makeStyles } from '../..';

export const useStyles = makeStyles(
  () =>
    createStyles({
      root: {
        '& > tr:hover': { backgroundColor: 'transparent' },
      },
    }),
  { name: 'SCA__DataTableHead' }
);
