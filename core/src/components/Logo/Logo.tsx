import classNames from 'classnames';
import * as React from 'react';

import { Icon } from '../..';
import { Color } from '../ThemeProvider/types';

import { useStyles } from './styles';

export interface LogoProps {
  className?: string;
  text?: boolean;
  style?: React.CSSProperties;
  testId?: string;
  onClick?: () => void;
  color?: Color;
}

const Logo: React.FunctionComponent<LogoProps> = ({
  className = '',
  text = false,
  style = {},
  testId = '',
  onClick,
  color
}) => {
  const classes = useStyles({ clickable: !!onClick });
  return (
    <div
      className={classNames(classes.root, className)}
      style={style}
      data-testid={testId}
      onClick={onClick}
    >
      {!text && <Icon name={'scalara-logo'} color={color} />}
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
