import { TableCell } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';
import Typography from '../Typography';
import { Variant } from '../Typography/types';

interface Props {
  children?: React.ReactNode;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  content: string | number;
  contentVariant?: Variant;
  header?: boolean;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      border: 'none',
      padding: theme.spacing(2.5, 1.5, 2.5, 1.5),
      '&:hover': {
        backgroundColor: theme.colors.background.hover,
      },
    },
  }),
  { name: 'SCA__DataTableCell' },
);

const DataTableCell: React.FunctionComponent<Props> = ({ content, align, header, contentVariant }) => {
  const classes = useStyles();
  return (
    <TableCell className={classes.root} component={header ? 'th' : 'td'} align={align}>
      <Typography variant={contentVariant}>{content}</Typography>
    </TableCell>
  );
};

export default DataTableCell;
