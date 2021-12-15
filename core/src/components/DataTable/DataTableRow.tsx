import { TableRow } from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disableHover?: boolean;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      '&:focus-visible': {
        outline: `2px solid ${theme.colors.secondary.default}`,
        outlineOffset: `1px`,
        boxShadow: theme.shadows[1],
      },
    },
    hover: {
      '&:hover': {
        backgroundColor: theme.colors.background.hover,
      },
    },
  }),
  { name: 'SCA__DataTableRow' }
);

const DataTableRow: React.FunctionComponent<Props> = ({
  children,
  onClick,
  className,
  disableHover,
}) => {
  const classes = useStyles();
  return (
    <TableRow
      className={classNames(
        classes.root,
        { [classes.hover]: !disableHover },
        className
      )}
      onClick={onClick}
    >
      {children}
    </TableRow>
  );
};

export default DataTableRow;
