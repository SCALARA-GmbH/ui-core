import classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';

import { useStyles } from './styles';

export interface PaperProps {
  className?: string;
  children?: React.ReactNode;
  elevated?: boolean;
  hoverable?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  testId?: string;
}

/**
 * @deprecated use Area instead
 */
const Paper: React.FunctionComponent<PaperProps> = ({
  children,
  className = '',
  elevated = false,
  hoverable = false,
  style = {},
  onClick,
  testId = '',
}) => {
  const [innerElevated, setInnerElevated] = useState(false);
  const classes = useStyles({ elevated: innerElevated || elevated, hoverable });
  return (
    <div
      className={classNames(classes.root, className)}
      data-testid={testId}
      onMouseEnter={() => {
        if (hoverable) {
          setInnerElevated(true);
        }
      }}
      onMouseLeave={() => setInnerElevated(false)}
      style={style}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
