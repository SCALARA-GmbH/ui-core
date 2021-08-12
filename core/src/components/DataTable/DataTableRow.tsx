import { fade, TableRow } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';

interface Props {
  children?: React.ReactNode;
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
        boxShadow: `0px 0px 0px 7px ${fade(theme.colors.secondary.default as string, 0.15)} `,
      },
    },
  }),
  { name: 'SCA__DataTableRow' },
);

const DataTableRow: React.FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  return <TableRow className={classes.root}>{children}</TableRow>;
};

export default DataTableRow;
