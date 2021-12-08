import { TableHead } from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';

import { useStyles } from './styles';

interface Props {
  children?: React.ReactNode;
}

const DataTableHead: React.FunctionComponent<Props> = ({ children }) => {
  const styles = useStyles();
  return <TableHead className={classNames(styles.root)}>{children}</TableHead>;
};

export default DataTableHead;
