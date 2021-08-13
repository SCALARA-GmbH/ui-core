import classNames from 'classnames';
import * as React from 'react';

import { Orientation } from '../../types';
import { AlignContent, AlignItems, JustifyContent } from '../Grid/types';

import { useStyles } from './styles';

export interface DividerProps {
  children?: React.ReactNode;
  className?: string;
  disableGutters?: boolean;
  orientation?: Orientation;
  style?: React.CSSProperties;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
}

const Frame: React.FunctionComponent<DividerProps> = ({
  children,
  className = '',
  disableGutters = false,
  orientation = 'vertical',
  style = {},
  alignContent = 'start',
  alignItems = 'start',
  justifyContent = 'start'
}) => {
  const classes = useStyles({
    disableGutters,
    orientation,
    justifyContent,
    alignItems,
    alignContent
  });
  return (
    <div className={classNames(classes.root, className)} style={style}>
      {children}
    </div>
  );
};

export default Frame;
