import {
  InputAdornment,
  InputBase,
  InputBaseComponentProps,
} from '@mui/material';
import cx from 'classnames';
import * as React from 'react';
import { useRef, useState } from 'react';

import { mergeRefs, Typography } from '../..';
import { TextColor } from '../Typography/types';

import { useStyles } from './styles';

export interface TextFieldProps {
  ariaLabel?: string;
  className?: string;
  color?: TextColor;
  disabled?: boolean;
  endAdornment?: InputBaseComponentProps['endAdornment'];
  error?: boolean;
  errorText?: string;
  helperText?: string;
  inputProps?: InputBaseComponentProps;
  label?: string;
  multiline?: InputBaseComponentProps['multiline'];
  name: string;
  onBlur?: InputBaseComponentProps['onBlur'];
  onClick?: (
    event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement, MouseEvent>
  ) => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: InputBaseComponentProps['onFocus'];
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onMouseDown?: InputBaseComponentProps['onMouseDown'];
  pattern?: string;
  placeholder?: string;
  required?: HTMLInputElement['required'];
  startAdornment?: InputBaseComponentProps['startAdornment'];
  style?: React.CSSProperties;
  testId?: string;
  type?:
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'number'
    | 'date';
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      ariaLabel = '',
      className = '',
      color = 'initial',
      disabled = false,
      endAdornment,
      error = false,
      errorText,
      helperText,
      inputProps,
      label = '',
      multiline = false,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onMouseDown,
      placeholder = '',
      pattern,
      required = false,
      startAdornment,
      testId,
      type = 'text',
    },
    ref
  ) => {
    const [internalError, setInternalError] = useState<boolean>(error);
    const innerRef = useRef<HTMLInputElement>();
    const classes = useStyles();

    const modifiedInputProps: InputBaseComponentProps = {
      'data-testid': testId,
      'aria-label': ariaLabel,
      pattern,
      onInvalid: (event) => {
        event.preventDefault();
        setInternalError(true);
      },
      onMouseDown: (event) => {
        if (onMouseDown) {
          onMouseDown(event);
        }
      },
      onClick,
      ...inputProps,
    };

    return (
      <div className={cx(classes.root, className)}>
        <label htmlFor={name}>
          <Typography
            testId={`${testId}-label`}
            color={disabled ? 'disabled' : 'label'}
            variant={'c4'}
            className={classes.label}
            preserveHeight
            span
          >
            {label}
          </Typography>
        </label>
        <InputBase
          classes={{
            input: cx(classes.input, {
              [classes.error]: error || internalError,
              [classes.multiline]: multiline,
            }),
            multiline: classes.noPadding,
          }}
          id={name}
          disabled={disabled}
          error={error || internalError}
          inputProps={modifiedInputProps}
          multiline={multiline}
          endAdornment={
            endAdornment ? (
              <InputAdornment className={classes.endAdornment} position={'end'}>
                {endAdornment}
              </InputAdornment>
            ) : undefined
          }
          name={name}
          onBlur={(e) => {
            if (onBlur) {
              onBlur(e);
            }
          }}
          onFocus={(e) => {
            if (onFocus) {
              onFocus(e);
            }
          }}
          onChange={(e) => {
            if (internalError) {
              setInternalError(false);
            }
            if (onChange) {
              onChange(e);
            }
          }}
          placeholder={placeholder}
          required={required}
          startAdornment={startAdornment}
          inputRef={mergeRefs([ref, innerRef])}
          type={type}
        />
        <Typography
          testId={`${testId}-bottomText`}
          className={classes.bottomText}
          color={error || internalError ? 'error' : color}
          variant={'c5'}
        >
          {error || internalError ? errorText : helperText}
        </Typography>
      </div>
    );
  }
);

export default TextField;
