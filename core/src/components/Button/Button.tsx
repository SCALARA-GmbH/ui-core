import classNames from 'classnames';
import * as React from 'react';

import { Typography } from '../..';
import { Wrap } from '../Typography/Typography';

import { useLabelStyles, useStyles } from './styles';
import { Hierarchy, Variant } from './types';

export interface ButtonProps {
  ariaLabel?: string;
  className?: string;
  hierarchy?: Hierarchy;
  testId?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'center' | 'right';
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  ariaLabel = '',
  className = '',
  hierarchy = 'primary',
  disabled = false,
  fullWidth = false,
  onClick,
  style = {},
  testId = '',
  textAlign = 'center',
  type = 'button',
  variant = 'outlined',
  label = '',
}) => {
  const classes = useStyles({ hierarchy, fullWidth, textAlign, variant });
  const labelClasses = useLabelStyles({ hierarchy, variant });
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const renderLabel = (): React.ReactElement => {
    switch (variant) {
      case 'outlined':
        return (
          <Typography
            className={classNames(labelClasses.root, labelClasses.outlined, {
              [labelClasses.outlineEnabled]: !disabled && !hovered,
              [labelClasses.disabled]: disabled,
              [labelClasses.outlineHovered]: hovered,
            })}
            disabled={disabled}
            variant={'c1'}
            span
            wrap={Wrap.NO_WRAP}
          >
            {label}
          </Typography>
        );
      case 'text':
        return (
          <Typography
            className={classNames(labelClasses.root, {
              [labelClasses.textEnabled]: !disabled && !hovered,
              [labelClasses.disabled]: disabled,
              [labelClasses.textHovered]: hovered && !focused,
            })}
            disabled={disabled}
            variant={'c3'}
            span
            wrap={Wrap.NO_WRAP}
          >
            {label}
          </Typography>
        );
      case 'contained':
        return (
          <Typography
            className={classNames(labelClasses.root, labelClasses.contained)}
            disabled={disabled}
            variant={'c1'}
            span
            wrap={Wrap.NO_WRAP}
          >
            {label}
          </Typography>
        );
    }
  };

  return (
    <button
      aria-label={ariaLabel || label}
      className={classNames(classes.root, classes[variant], className)}
      data-testid={testId}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
        setHovered(true);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
      style={style}
      type={type}
    >
      {renderLabel()}
    </button>
  );
};

export default Button;
