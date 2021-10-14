import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
} from '@material-ui/core';
import * as React from 'react';

import { Typography } from '../..';
import { SelectOption } from '../Select/Select';

import { useStyles } from './styles';

export interface RadioProps {
  className?: string;
  onBlur?: MuiRadioProps['onBlur'];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: SelectOption['value']
  ) => void;
  options: SelectOption[];
  style?: React.CSSProperties;
  testId?: string;
  value: SelectOption['value'];
}

export interface RadioOption {
  title: string;
  value: string;
  subtitle?: string;
}

const Radio: React.FunctionComponent<RadioProps> = ({
  className,
  onBlur,
  onChange,
  options,
  style = {},
  testId,
  value,
}) => {
  const classes = useStyles();
  return (
    <div className={className} style={style} data-testid={testId}>
      {options?.map((option) => (
        <div key={option.value} className={classes.radioWrapper}>
          <MuiRadio
            size={'small'}
            disableRipple
            className={classes.radio}
            classes={{
              checked: classes.checked,
              colorSecondary: classes.secondary,
            }}
            value={option.value}
            onChange={(event) => {
              onChange(event, event.target.value);
            }}
            onBlur={onBlur}
            data-testid={`${testId}-radio-${option.value}`}
            checked={`${value}` === `${option.value}`}
            inputProps={{
              'aria-label': option.title,
            }}
          />
          <div className={classes.text}>
            <Typography variant={'c3'} color={'subtitle'}>
              {option.title}
            </Typography>
            <Typography
              className={classes.subtitle}
              variant={'c5'}
              color={'subtitle'}
            >
              {option.subtitle}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Radio;
