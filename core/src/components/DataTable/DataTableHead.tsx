import { TableHead } from '@mui/material';
import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

const DataTableHead: React.FunctionComponent<Props> = ({ children }) => {
  return <TableHead>{children}</TableHead>;
};

export default DataTableHead;
