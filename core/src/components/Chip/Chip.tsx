import classNames from 'classnames';
import * as React from 'react';

import { Typography } from '../../index';
import { Wrap } from '../Typography/Typography';

import { Color, useStyles } from './styles';

export interface ChipProps {
  className?: string;
  color?: Color;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  onClick?: () => void;
  ariaLabel?: string;
  selected?: boolean;
}

const Chip: React.FunctionComponent<ChipProps> = ({
  className = '',
  color = 'primary',
  onClick,
  disabled,
  ariaLabel = '',
  label = '',
  selected = false,
}) => {
  const classes = useStyles({ color });
  return (
    <div
      className={classNames(
        classes.root,
        {
          [classes.clickable]: !!onClick,
          [classes.selected]: selected,
          [classes.disabled]: disabled,
          [classes.enabled]: !disabled,
        },
        className,
      )}
      role={onClick && 'button'}
      aria-label={ariaLabel}
      aria-pressed={selected}
      onClick={(event) => {
        if (disabled) return;
        event.stopPropagation();
        onClick?.();
      }}
    >
      <Typography
        className={classNames({
          [classes.label]: !disabled && !selected,
          [classes.labelDisabled]: disabled,
          [classes.labelSelected]: selected,
        })}
        variant={'c5'}
        wrap={Wrap.NO_WRAP}
        color={'initial'}
      >
        {label}
      </Typography>
    </div>
  );
};

export default Chip;
