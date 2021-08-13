import classNames from 'classnames';
import * as React from 'react';

import GridItem from '../GridItem';
import Typography from '../Typography';

import { useStyles } from './styles';

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * If true, table row filters it out before rendering when mobile
   */
  hideOnMobile?: boolean;
  /**
   * If true, hides subtitle text
   */
  hideSubtitle?: boolean;
  /**
   * If true, hides title text
   */
  hideTitle?: boolean;
  style?: React.CSSProperties;
  subtitle?: string;
  testId?: string;
  title?: string;
}

const TableCell: React.FunctionComponent<TableCellProps> = ({
  children,
  className = '',
  hideSubtitle = false,
  hideTitle = false,
  style = {},
  subtitle,
  testId = '',
  title
}) => {
  const classes = useStyles();

  return (
    <GridItem
      className={classNames(classes.root, className)}
      data-testid={testId}
      style={style}
      justifySelf={'stretch'}
    >
      {!hideTitle && (
        <Typography preserveHeight variant={'c1'}>
          {title}
        </Typography>
      )}
      {!hideSubtitle && (
        <Typography preserveHeight variant={'c2'} color={'label'}>
          {subtitle}
        </Typography>
      )}
      {children}
    </GridItem>
  );
};

export default TableCell;
