import classNames from 'classnames';
import * as React from 'react';

import { Color, Orientation } from '../../types';

import { useStyles } from './styles';

export interface DividerProps {
  className?: string;
  color?: Color;
  disableGutters?: boolean;
  orientation?: Orientation;
  style?: React.CSSProperties;
  testId?: string;
}

/**
 * @deprecated use material ui divider
 * @param className
 * @param color
 * @param disableGutters
 * @param orientation
 * @param style
 * @param testId
 * @constructor
 */
const Divider: React.FunctionComponent<DividerProps> = ({
  className = '',
  color = 'initial',
  disableGutters = false,
  orientation = 'vertical',
  style = {},
  testId = '',
}) => {
  const classes = useStyles({ color, disableGutters });
  return (
    <div
      className={classNames(classes.root, className, classes[orientation])}
      style={style}
      data-testid={testId}
    />
  );
};

export default Divider;
