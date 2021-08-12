import * as React from 'react';
import { useEffect, useState } from 'react';

import { IconButton, TextField } from '../..';
import { TextFieldProps } from '../TextField/TextField';

export interface SearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  name: string;
  onChange?: (value: string) => void;
  disabled?: TextFieldProps['disabled'];
  helperText?: TextFieldProps['helperText'];
  placeholder?: TextFieldProps['placeholder'];
  label?: TextFieldProps['label'];
  textFieldProps?: Omit<
    TextFieldProps,
    'className' | 'helperText' | 'label' | 'style' | 'onChange' | 'testId' | 'endAdornment' | 'startAdornment'
  >;
}

const SearchField: React.FunctionComponent<SearchFieldProps> = ({
  className,
  label,
  disabled,
  helperText,
  onChange,
  placeholder,
  style,
  testId,
  textFieldProps,
  name,
}) => {
  const [innerValue, setInnerValue] = useState('');

  useEffect(() => {
    onChange?.(innerValue);
  }, [innerValue]);

  return (
    <TextField
      name={name}
      className={className}
      style={style}
      testId={testId}
      helperText={helperText}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      onChange={(event) => setInnerValue(event.target.value)}
      startAdornment={<IconButton iconName={'search'} onClick={() => onChange?.(innerValue)} />}
      endAdornment={innerValue !== '' && <IconButton iconName={'close'} onClick={() => setInnerValue('')} />}
      inputProps={{ value: innerValue }}
      {...textFieldProps}
    />
  );
};

export default SearchField;
