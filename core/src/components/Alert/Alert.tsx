import { AlertTitle as MuiAlertTitle } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';
import classNames from 'classnames';
import React from 'react';

import { Icon } from '../Icon';
import Typography from '../Typography';

import { useStyles } from './styles';

interface Props {
  action?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  closeText?: string;
  icon?: React.ReactNode;
  iconMapping?: {
    error?: React.ReactNode;
    info?: React.ReactNode;
    success?: React.ReactNode;
    warning?: React.ReactNode;
  };
  onClose?: () => void;
  role?: string;
  severity: 'info' | 'warning' | 'error';
  variant?: 'filled' | 'outlined' | 'standard';
  title?: string;
  disableElevation?: boolean;
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
  disableElevation,
}) => {
  const classes = useStyles();

  return (
    <MuiAlert
      action={action}
      className={classNames(className, classes.root, {
        [classes.disableElevation]: disableElevation,
        [classes.error]: severity === 'error',
        [classes.info]: severity === 'info',
        [classes.warning]: severity === 'warning',
      })}
      closeText={closeText}
      icon={icon}
      iconMapping={{
        info: <Icon name={'information'} className={classes.iconInfo} />,
        error: <Icon name={'error24'} className={classes.iconError} />,
        warning: <Icon name={'attention'} className={classes.iconWarning} />,
        ...iconMapping,
      }}
      onClose={onClose}
      role={role}
      severity={severity}
      variant={variant}
    >
      {title && (
        <MuiAlertTitle>
          <Typography variant={'t3'}>{title}</Typography>
        </MuiAlertTitle>
      )}
      {children}
    </MuiAlert>
  );
};

export default Alert;
