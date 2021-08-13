import { TableCell } from '@material-ui/core';
import * as React from 'react';

import { makeStylesWithProps } from '../ThemeProvider/styles';
import Typography from '../Typography';

interface Props {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  widthPercentage?: number;
  text: string;
}

const useStyles = makeStylesWithProps<{ width?: number }>(
  ({ spacing, colors }) => ({
    root: {
      width: ({ width }) => width && `${width}%`,
      padding: spacing(2.5, 1.5, 1, 1.5),
      borderBottom: `1px solid ${colors.border.main}`
    }
  }),
  { name: 'SCA__DataTableHeadCell' }
);

const DataTableHeadCell: React.FunctionComponent<Props> = ({
  text,
  align,
  widthPercentage
}) => {
  const classes = useStyles({ width: widthPercentage });
  return (
    <TableCell className={classes.root} component={'th'} align={align}>
      <Typography color={'label'} variant={'c4'}>
        {text}
      </Typography>
    </TableCell>
  );
};

export default DataTableHeadCell;
