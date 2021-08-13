import { Table, TableContainer } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';

interface Props {
  children?: React.ReactNode;
  ariaLabel: string;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderColor: theme.colors.border.main
    }
  }),
  { name: 'SCA__DataTable' }
);

const DataTable: React.FunctionComponent<Props> = ({ children, ariaLabel }) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table aria-label={ariaLabel} className={classes.root}>
        {children}
      </Table>
    </TableContainer>
  );
};

export default DataTable;
