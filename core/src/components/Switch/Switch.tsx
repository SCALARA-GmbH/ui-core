import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';

import { Icon, Typography } from '../../index';
import { IconProps } from '../Icon/Icon';

import { useStyles } from './styles';

export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  iconName?: IconProps['name'];
  testId?: string;
  checked?: MuiSwitchProps['checked'];
  defaultChecked?: MuiSwitchProps['defaultChecked'];
  onChange?: MuiSwitchProps['onChange'];
  label?: string;
}

const Switch: React.FunctionComponent<SwitchProps> = ({
  checked,
  className = '',
  defaultChecked,
  iconName,
  label,
  onChange,
  style = {},
  testId = ''
}) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.root, className)}
      style={style}
      data-testid={testId}
    >
      <MuiSwitch
        classes={{
          checked: classes.checked,
          switchBase: classes.switchBase,
          track: classes.track
        }}
        checked={checked}
        defaultChecked={defaultChecked}
        inputProps={{ 'aria-label': label }}
        onChange={onChange}
      />
      {iconName && <Icon name={iconName} className={classes.icon} />}
      {label && <Typography>{label}</Typography>}
    </div>
  );
};

export default Switch;
