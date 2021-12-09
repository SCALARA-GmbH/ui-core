import { TableHead } from '@material-ui/core';
import * as React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const DataTableHead: React.FunctionComponent<Props> = ({
  children,
  className,
}) => {
  return <TableHead className={className}>{children}</TableHead>;
};

export default DataTableHead;
