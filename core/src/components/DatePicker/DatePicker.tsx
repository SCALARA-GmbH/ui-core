import MuiDatePicker, {
  DatePickerProps as MuiDatePickerProps,
} from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import * as React from 'react';

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
  onChange,
  value,
}) => (
  <MuiDatePicker
    label="Basic example"
    value={value}
    onChange={(value) => (value ? onChange(value) : onChange(null))}
    renderInput={(params) => {
      console.log('params: ', params);
      return <TextField {...params} inputProps={{ color: 'error' }} />;
    }}
  />
);

export default DatePicker;
