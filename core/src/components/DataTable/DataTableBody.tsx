import { TableBody } from '@mui/material';
import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

const DataTableBody: React.FunctionComponent<Props> = ({ children }) => {
  return <TableBody>{children}</TableBody>;
};

export default DataTableBody;
