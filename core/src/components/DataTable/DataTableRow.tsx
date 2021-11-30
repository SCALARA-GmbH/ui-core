import { TableRow } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      '&:hover': {
        backgroundColor: theme.colors.background.hover,
      },
      '&:focus-visible': {
        outline: `2px solid ${theme.colors.secondary.default}`,
        outlineOffset: `1px`,
        boxShadow: theme.shadows[1],
      },
    },
  }),
  { name: 'SCA__DataTableRow' }
);

const DataTableRow: React.FunctionComponent<Props> = ({
  children,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <TableRow className={classes.root} onClick={onClick}>
      {children}
    </TableRow>
  );
};

export default DataTableRow;
