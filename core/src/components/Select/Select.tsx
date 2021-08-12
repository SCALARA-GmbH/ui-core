import {
  createStyles,
  InputBase,
  InputBaseComponentProps,
  ListItemText,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';

import { Avatar, Icon, makeStyles, ThemeProvider, Typography } from '../..';
import { AvatarProps } from '../Avatar/Avatar';
import { TextColor } from '../Typography/types';

import { useStyles } from './styles';

const iconUseStyle = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
      marginTop: '5px',
    },
  }),
);

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
  onChange?: (event: React.ChangeEvent<{ name?: string; value: string }>) => void;
  options: SelectOption[];
  required?: HTMLInputElement['required'];
  style?: React.CSSProperties;
  testId?: string;
  value?: string;
}

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
  required = false,
  style = {},
  testId,
  onBlur,
  onChange,
  value,
}) => {
  const [internalError, setInternalError] = React.useState<boolean>(error);
  const classes = useStyles({ color, disabled });
  const isElevated = value !== undefined && value !== null;

  return (
    <div className={className}>
      <div
        className={classNames(classes.inputWrapper, {
          [classes.inputWrapperFilled]: value !== undefined && value !== null,
        })}
        style={style}
      >
        <Typography
          testId={`${testId}-label`}
          className={classNames(classes.label, { [classes.labelElevated]: isElevated })}
          variant={isElevated ? 'c3' : 'c1'}
        >
          {required ? `${label}*` : label}
        </Typography>
        <MuiSelect
          IconComponent={({ className }) => {
            const iconClasses = iconUseStyle();
            return (
              <div className={iconClasses.root}>
                <Icon name={'arrow-down'} className={className} />
              </div>
            );
          }}
          aria-label={label || name}
          disabled={disabled}
          id={name}
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
          renderValue={(selected) => options.find(({ value }) => value === selected)?.title}
          input={
            <InputBase
              classes={{
                input: classes.inputBaseInput,
                error: classes.errorBaseInput,
              }}
              className={classes.input}
              disabled={disabled}
              error={error || internalError}
              inputProps={{
                'data-testid': `${testId}-input`,
                ...inputProps,
              }}
              onInvalid={(event) => {
                event.preventDefault();
                setInternalError(true);
              }}
            />
          }
        >
          {!required && (
            <MenuItem disableRipple disableTouchRipple value={undefined}>
              <em>&nbsp;</em>
            </MenuItem>
          )}
          {options?.map((option) => (
            <MenuItem
              title={option.title}
              key={`${option.value}`}
              disableRipple
              disableTouchRipple
              value={option.value}
            >
              <ThemeProvider type={'light'}>
                {option.avatarProps && (
                  <div className={classes.optionImage}>
                    <Avatar size={'small'} {...option.avatarProps} />
                  </div>
                )}
                <ListItemText
                  className={classes.optionImage}
                  disableTypography
                  primary={<Typography>{option.title}</Typography>}
                  secondary={<Typography variant={'c3'}>{option.subtitle}</Typography>}
                />
              </ThemeProvider>
            </MenuItem>
          ))}
        </MuiSelect>
      </div>
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
