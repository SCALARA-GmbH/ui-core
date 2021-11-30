import { AlertTitle as MuiAlertTitle } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';
import classNames from 'classnames';
import React from 'react';

import { Icon } from '../Icon';

import { useStyles } from './styles';

interface Props {
  action: React.ReactNode;
  children?: React.ReactNode;
  className?: '';
  closeText?: '';
  icon?: React.ReactNode /* todo: here */;
  iconMapping?: {
    error?: React.ReactNode;
    info?: React.ReactNode;
    success?: React.ReactNode;
    warning?: React.ReactNode;
  };
  onClose?: () => void;
  role?: string;
  severity: 'success' | 'info' | 'warning' | 'error';
  variant?: 'filled' | 'outlined' | 'standard';
  title?: string;
}

const Alert: React.FunctionComponent<Props> = ({
  action,
  children,
  className,
  closeText,
  icon,
  iconMapping,
  onClose,
  role,
  severity = 'error',
  variant = 'filled',
  title,
}) => {
  const classes = useStyles();

  return (
    <MuiAlert
      action={action}
      className={classNames(className, classes.root, {
        [classes.error]: severity === 'error',
        [classes.info]: severity === 'info',
        [classes.success]: severity === 'success',
        [classes.warning]: severity === 'warning',
      })}
      closeText={closeText}
      icon={icon}
      iconMapping={{ warning: <Icon name={'attention'} />, ...iconMapping }}
      onClose={onClose}
      role={role}
      severity={severity}
      variant={variant}
    >
      {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
      {children}
    </MuiAlert>
  );
};

export default Alert;
