import { TableBody } from '@material-ui/core';
import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

const DataTableBody: React.FunctionComponent<Props> = ({ children }) => {
  return <TableBody>{children}</TableBody>;
};

export default DataTableBody;
