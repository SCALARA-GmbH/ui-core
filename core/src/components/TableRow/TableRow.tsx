import { useMediaQuery } from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';

import { IconButton, Grid } from '../..';
import { IconButtonProps } from '../IconButton/IconButton';
import { TableCellProps } from '../TableCell/TableCell';
import { useTheme } from '../ThemeProvider/styles';

import { useStyles } from './styles';

export interface TableRowProps {
  actionIconButtonProps?: IconButtonProps;
  className?: string;
  children?:
    | React.ReactElement<TableCellProps>
    | React.ReactElement<TableCellProps>[];
  onClick?: () => void;
  style?: React.CSSProperties;
  testId?: string;
}

const TableRow: React.FunctionComponent<TableRowProps> = ({
  actionIconButtonProps,
  children,
  className = '',
  onClick,
  style = {},
  testId = ''
}) => {
  const classes = useStyles({ onClick });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      className={classNames(
        classes.root,
        { [classes.clickable]: !!onClick },
        className
      )}
      data-testid={testId}
      style={style}
      onClick={onClick}
    >
      <Grid justifyContent={'stretch'} className={classes.grid}>
        {React.Children.map(children, (child) => {
          if (
            isMobile &&
            (child as React.ReactElement<TableCellProps>)?.props.hideOnMobile
          ) {
            return null;
          }
          return child;
        })}
      </Grid>
      {actionIconButtonProps && (
        <IconButton
          testId={`${testId}-action-icon-button`}
          {...actionIconButtonProps}
        />
      )}
    </div>
  );
};

export default TableRow;
