import classNames from 'classnames';
import * as React from 'react';

import { Icon } from '../..';
import { Size } from '../../types';
import { Color } from '../ThemeProvider/types';

import { useStyles } from './styles';

export interface LogoProps {
  className?: string;
  text?: boolean;
  style?: React.CSSProperties;
  testId?: string;
  onClick?: () => void;
  color?: Color;
  size?: Size;
}

const Logo: React.FunctionComponent<LogoProps> = ({
  className = '',
  text = false,
  style = {},
  testId = '',
  onClick,
  color,
  size = 'medium',
}) => {
  const classes = useStyles({ clickable: !!onClick, size });
  return (
    <div
      className={classNames(classes.root, className)}
      style={style}
      data-testid={testId}
      onClick={onClick}
    >
      {!text && <Icon name={'scalara-logo'} color={color} size={size} />}
      {text && (
        <Icon
          name={'scalara-text'}
          className={classes.iconWithText}
          color={color}
        />
      )}
    </div>
  );
};

export default Logo;
