import { Tooltip } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

import { Icon as IconComponent, Typography } from '../..';
import { Size } from '../../types';
import { IconName } from '../Icon/Icon';

import { useLabelStyles, useStyles } from './styles';

export interface IconProps {
  size?: Size;
  name: IconName;
  testId?: string;
}

export interface IconButtonProps {
  ariaLabel?: string;
  className?: string;
  testId?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  Icon?: React.ComponentType<IconProps>;
  iconName: IconName;
  tooltip?: string;
  label?: string;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  ariaLabel = '',
  className = '',
  disabled = false,
  onClick = () => null,
  style = {},
  testId = '',
  type = 'button',
  Icon = IconComponent,
  iconName,
  tooltip,
  label,
}) => {
  const classes = useStyles({ disabled });
  const labelClasses = useLabelStyles();
  const [hovered, setHovered] = React.useState(false);

  const renderComponent = () => {
    return (
      <button
        aria-label={ariaLabel}
        className={classNames(classes.root, classes.button, className)}
        data-testid={testId}
        disabled={disabled}
        aria-disabled={disabled}
        onClick={(event) => {
          event.stopPropagation();
          onClick?.();
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        style={style}
        type={type}
      >
        <span className={classes.span}>
          <Icon className={classes.icon} name={iconName} testId={`${testId}-icon`} />
          {label && (
            <Typography
              span
              variant={'c3'}
              align={'center'}
              className={classNames(labelClasses.root, {
                [labelClasses.enabled]: !disabled && !hovered,
                [labelClasses.disabled]: disabled,
                [labelClasses.hovered]: hovered,
              })}
            >
              {label}
            </Typography>
          )}
        </span>
      </button>
    );
  };

  if (tooltip && !disabled && !label) {
    return <Tooltip title={tooltip}>{renderComponent()}</Tooltip>;
  }
  return renderComponent();
};

export default IconButton;
