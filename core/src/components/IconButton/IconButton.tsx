import { Tooltip } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';

import { Icon as IconComponent, Typography, useTheme } from '../..';
import { Size } from '../../types';
import { IconName } from '../Icon/Icon';
import { Color } from '../ThemeProvider/types';

import { useLabelStyles, useStyles } from './styles';

export const Variants = ['primary', 'secondary'] as const;
type VariantTypes = typeof Variants;
export type Variant = VariantTypes[number];

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
  variant?: Variant;
  iconColor?: Color;
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
  iconColor,
  label,
  variant = 'primary'
}) => {
  const classes = useStyles();
  const labelClasses = useLabelStyles();
  const theme = useTheme();
  const [hovered, setHovered] = React.useState(false);

  const renderComponent = () => {
    return (
      <button
        aria-label={ariaLabel}
        className={cx(classes.root, classes.button, className, {
          [classes.primary]: variant === 'primary',
          [classes.secondary]: variant === 'secondary'
        })}
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
          <Icon
            className={cx({
              [classes.disabled]: disabled
            })}
            name={iconName}
            color={
              iconColor || theme.type === 'dark'
                ? theme.colors.neutral.F
                : theme.colors.neutral['0']
            }
            testId={`${testId}-icon`}
          />
          {label && (
            <Typography
              span
              variant={'c3'}
              align={'center'}
              className={cx(labelClasses.root, {
                [labelClasses.enabled]: !disabled && !hovered,
                [labelClasses.disabled]: disabled,
                [labelClasses.hovered]: hovered
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
