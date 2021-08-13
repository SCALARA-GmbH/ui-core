import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { mergeRefs, Typography } from '../..';

import { useStyles } from './styles';

export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  name: string;
  error?: boolean;
  required?: boolean;
  errorText?: string;
  inputProps?: MuiCheckboxProps['inputProps'];
  onChange?: MuiCheckboxProps['onChange'];
  checked?: MuiCheckboxProps['checked'];
  testId?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = '',
      checked = false,
      error = false,
      required = false,
      errorText,
      inputProps,
      style = {},
      testId,
      label,
      ariaLabel,
      name,
      disabled = false,
      onChange
    },
    ref
  ) => {
    const classes = useStyles();
    const innerRef = useRef<HTMLInputElement>();
    const [value, setValue] = useState<boolean>();
    const [focus, setFocus] = useState<boolean>();
    const [internalError, setInternalError] = useState<boolean>(error);
    const isChecked = inputProps?.checked || value || checked;

    useEffect(() => {
      if (innerRef?.current) {
        /**
         * Detect if value is set by ref e.g. by use-form-hook
         */
        setValue(innerRef.current.checked);
      }
    }, [innerRef?.current]);

    return (
      <div
        className={classNames(classes.root, className, {
          [classes.focus]: focus
        })}
        style={style}
      >
        <MuiCheckbox
          disableRipple
          classes={{
            root: internalError || error ? classes.error : classes.checkbox,
            checked: classes.checked
          }}
          id={name}
          disabled={disabled}
          name={name}
          icon={<span className={classes.icon} />}
          checkedIcon={<span className={classes.checkedIcon} />}
          required={required}
          inputRef={mergeRefs([ref, innerRef])}
          data-testid={testId}
          checked={isChecked}
          onChange={(event) => {
            if (internalError) {
              setInternalError(false);
            }
            setValue(event.target.checked);
            onChange?.(event, event.target.checked);
          }}
          onInvalid={(event) => {
            event.preventDefault();
            setInternalError(true);
          }}
          onFocusVisible={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          inputProps={{
            'aria-label': ariaLabel,
            ...inputProps
          }}
        />
        <div className={classes.text}>
          <Typography variant={'c3'} color={disabled ? 'disabled' : 'subtitle'}>
            {required ? `${label}*` : label}
          </Typography>

          <Typography
            testId={`${testId}-error`}
            color={error || internalError ? 'error' : 'initial'}
            variant={'c5'}
          >
            {(error || internalError) && errorText}
          </Typography>
        </div>
      </div>
    );
  }
);

export default Checkbox;
