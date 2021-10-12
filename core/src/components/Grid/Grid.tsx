import classNames from 'classnames';
import * as React from 'react';

import { useStyles } from './styles';
import {
  AlignContent,
  AlignItems,
  JustifyContent,
  JustifyItems,
} from './types';

export type Columns = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  children: React.ReactNode;
  className?: string;
  xs?: Columns;
  sm?: Columns;
  md?: Columns;
  lg?: Columns;
  xl?: Columns;
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  style?: React.CSSProperties;
}

const Grid: React.FunctionComponent<GridProps> = ({
  children,
  className = '',
  alignContent = 'start',
  alignItems = 'stretch',
  justifyContent = 'start',
  justifyItems = 'stretch',
  style = {},
  xs = 'auto',
  sm,
  md,
  lg,
  xl,
}) => {
  const getColumns = (breakpoint: Columns): Omit<Columns, 'auto'> => {
    if (breakpoint === 'auto') {
      return Math.min(React.Children.count(children), 12);
    }
    return breakpoint;
  };

  const classes = useStyles({
    alignContent,
    alignItems,
    xs: getColumns(xs),
    sm: getColumns(sm || xs),
    md: getColumns(md || sm || xs),
    lg: getColumns(lg || md || sm || xs),
    xl: getColumns(xl || lg || md || sm || xs),
    justifyContent,
    justifyItems,
  });
  return (
    <div className={classNames(classes.root, className)} style={style}>
      {children}
    </div>
  );
};

export default Grid;
