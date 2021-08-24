import {
  InputBase,
  InputBaseComponentProps,
  ListItemText,
  MenuItem,
  Select as MuiSelect
} from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { Avatar, Icon, makeStyles, Typography, useTheme } from '../..';
import { AvatarProps } from '../Avatar/Avatar';
import { TextColor } from '../Typography/types';

import { useStyles } from './styles';

export interface SelectOption {
  avatarProps?: AvatarProps;
  subtitle?: string;
  title: string;
  value: string;
}

export interface SelectProps {
  className?: string;
  color?: TextColor;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  inputProps?: InputBaseComponentProps;
  label?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => void;
  options: SelectOption[];
  style?: React.CSSProperties;
  testId?: string;
  value?: string;
  ariaLabel?: string;
  required?: boolean;
  placeholder?: string;
}

const useIconStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'absolute',
      right: 0,
      padding: theme.spacing(0, 1),
      transition: theme.transitions.create('transform')
    }
  }),
  { name: 'SCA__Select-Icon' }
);
const ArrowDownIcon = ({ className }: { className: string }) => {
  const classes = useIconStyles();
  const theme = useTheme();
  return (
    <Icon
      name={'arrow-down'}
      className={cx(classes.root, className)}
      style={{ color: theme.colors.icon.control }}
    />
  );
};

const Select: React.FunctionComponent<SelectProps> = ({
  className = '',
  color = 'initial',
  disabled = false,
  error = false,
  errorText,
  helperText,
  inputProps,
  label = '',
  name,
  options,
  placeholder,
  testId,
  onBlur,
  onChange,
  value,
  required,
  ariaLabel
}) => {
  const [internalError, setInternalError] = React.useState<boolean>(error);
  const classes = useStyles({ color, disabled });

  return (
    <div className={cx(className, classes.root)}>
      <label className={classes.label} id={name}>
        <Typography color={disabled ? 'disabled' : 'label'} variant={'c4'}>
          {label}
        </Typography>
      </label>
      <MuiSelect
        labelId={name}
        displayEmpty
        IconComponent={ArrowDownIcon}
        aria-label={ariaLabel}
        disabled={disabled}
        data-testid={testId}
        value={value ?? ''}
        onBlur={onBlur}
        onChange={(e) => {
          if (internalError) {
            setInternalError(false);
          }
          onChange?.(e as React.ChangeEvent<{ name?: string; value: string }>);
        }}
        required={required}
        renderValue={(selected) => (
          <span className={classes.value}>
            {options.find(({ value }) => value === selected)?.title ||
              placeholder}
          </span>
        )}
        MenuProps={{
          classes: {
            paper: classes.paper,
            list: classes.list
          }
        }}
        input={
          <InputBase
            required={required}
            classes={{
              input: cx(classes.input, {
                [classes.error]: error || internalError,
                [classes.disabled]: disabled
              })
            }}
            disabled={disabled}
            error={error || internalError}
            inputProps={{
              'data-testid': `${testId}-input`,
              ...inputProps
            }}
            onInvalid={(event) => {
              event.preventDefault();
              setInternalError(true);
            }}
          />
        }
      >
        <MenuItem value="" disabled className={classes.item}>
          <Typography variant={'c3'} color={'label'}>
            {placeholder}
          </Typography>
        </MenuItem>
        {options?.map((option) => (
          <MenuItem
            title={option.title}
            key={option.value}
            disableRipple
            disableTouchRipple
            value={option.value}
            className={classes.itemRoot}
          >
            <span
              className={cx(classes.item, {
                [classes.selected]: option.value === value
              })}
            >
              {option.avatarProps && (
                <div className={classes.optionImage}>
                  <Avatar size={'small'} {...option.avatarProps} />
                </div>
              )}
              <ListItemText
                className={classes.optionImage}
                disableTypography
                primary={<Typography variant={'c3'}>{option.title}</Typography>}
                secondary={
                  <Typography variant={'c5'}>{option.subtitle}</Typography>
                }
              />
            </span>
          </MenuItem>
        ))}
      </MuiSelect>
      {(error || internalError || helperText) && (
        <Typography
          testId={`${testId}-bottomText`}
          className={classes.bottomText}
          color={error || internalError ? 'error' : color}
          variant={'c3'}
        >
          {error || internalError ? errorText : helperText}
        </Typography>
      )}
    </div>
  );
};

export default Select;
