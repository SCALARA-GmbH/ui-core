import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@material-ui/pickers';
import * as React from 'react';

import { Icon, IconButton, TextField } from '../../index';
import { TextColor } from '../Typography/types';

export interface DatePickerProps {
  className?: string;
  clearLabel?: string;
  color?: TextColor;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  label?: string;
  maxDate?: MuiDatePickerProps['maxDate'];
  minDate?: MuiDatePickerProps['minDate'];
  name: string;
  onChange: (value: Date | null) => void;
  required?: HTMLInputElement['required'];
  shouldDisableDate?: MuiDatePickerProps['shouldDisableDate'];
  style?: React.CSSProperties;
  testId?: string;
  value?: MuiDatePickerProps['value'];
}

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  className = '',
  clearLabel,
  color,
  disabled = false,
  error = false,
  errorText,
  helperText,
  label,
  maxDate,
  minDate,
  name,
  onChange,
  required = false,
  shouldDisableDate,
  style = {},
  testId,
  value,
}) => (
  <MuiDatePicker
    autoOk
    className={className}
    disabled={disabled}
    onChange={onChange}
    value={value}
    format={'dd.MM.yyyy'}
    variant="inline"
    maxDate={maxDate || undefined}
    minDate={minDate || undefined}
    shouldDisableDate={shouldDisableDate}
    TextFieldComponent={(params) => (
      <TextField
        color={color}
        disabled={params.disabled}
        endAdornment={
          value &&
          !required && (
            <IconButton
              Icon={Icon}
              ariaLabel={clearLabel}
              testId={`${testId}-clear`}
              iconName={'close'}
              onClick={() => onChange(null)}
            />
          )
        }
        error={error}
        errorText={errorText}
        helperText={helperText}
        inputProps={{ value: params.value }}
        label={label}
        onKeyDown={params.onKeyDown}
        onClick={(event) => params.onClick?.(event as React.MouseEvent<HTMLDivElement, MouseEvent>)}
        ref={params.inputRef}
        required={required}
        style={style}
        testId={testId}
        name={name}
      />
    )}
  />
);

export default DatePicker;
