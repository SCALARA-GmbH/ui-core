import classNames from 'classnames';
import * as React from 'react';

import { Columns } from '../Grid/Grid';
import { AlignSelf, JustifySelf } from '../Grid/types';

import { useStyles } from './styles';

export interface GridItemProps {
  alignSelf?: AlignSelf;
  className?: string;
  children: React.ReactNode;
  justifySelf?: JustifySelf;
  xs?: Omit<Columns, 'auto'>;
  sm?: Omit<Columns, 'auto'>;
  md?: Omit<Columns, 'auto'>;
  lg?: Omit<Columns, 'auto'>;
  xl?: Omit<Columns, 'auto'>;
  style?: React.CSSProperties;
}

const GridItem: React.FunctionComponent<GridItemProps> = ({
  alignSelf = 'stretch',
  children,
  className = '',
  justifySelf = 'stretch',
  style = {},
  xs = 1,
  sm,
  md,
  lg,
  xl,
}) => {
  const classes = useStyles({
    alignSelf,
    justifySelf,
    xs: xs,
    sm: sm || xs,
    md: md || sm || xs,
    lg: lg || md || sm || xs,
    xl: xl || lg || md || sm || xs,
  });

  return (
    <div className={classNames(classes.root, className)} style={style}>
      {children}
    </div>
  );
};

export default GridItem;
