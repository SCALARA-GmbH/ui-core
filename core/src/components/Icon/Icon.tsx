import classNames from 'classnames';
import * as React from 'react';

import { Size } from '../../types';
import { Color } from '../ThemeProvider/types';

import { icons } from './Icons';
import { useStyles } from './styles';

export type IconName = keyof typeof icons;

export interface IconProps {
  className?: string;
  name: IconName;
  size?: Size;
  style?: React.CSSProperties;
  testId?: string;
  color?: Color;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className = '',
  name,
  size = 'medium',
  style = {},
  testId = '',
  color,
}) => {
  const icon = icons[name];
  if (!icon) {
    console.warn(`Icon "${name}" does not exist`);
    return null;
  }
  const classes = useStyles({ size, svgSize: icon.size, color });

  return (
    <svg
      className={classNames(classes.root, className)}
      data-testid={testId}
      style={style}
      focusable={'false'}
      viewBox={icon.viewBox}
    >
      {icon.children}
    </svg>
  );
};

export default Icon;
