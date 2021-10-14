import cx from 'classnames';
import * as React from 'react';
import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';

import { Icon } from '../Icon';
import { makeStyles, useTheme } from '../ThemeProvider/styles';
import { Color, Theme } from '../ThemeProvider/types';

type Name = 'success' | 'error' | 'warning';
interface Props {
  name?: Name;
}

const getColor = (color: Name, theme: Theme): Color => {
  switch (color) {
    case 'success':
      return theme.colors.success.main;
    case 'error':
      return theme.colors.error.main;
    case 'warning':
      return theme.colors.warning.main;
  }
};

const useStyles = makeStyles(
  ({ spacing, colors }) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: '72px',
      minWidth: '300px',
      maxWidth: '452px',
      width: '100%',
      padding: spacing(3, 5, 3, 2.5),
    },
    error: {
      borderLeft: `4px solid ${colors.error.main}`,
    },
    warning: {
      borderLeft: `4px solid ${colors.warning.main}`,
    },
    success: {
      borderLeft: `4px solid ${colors.success.main}`,
    },
    children: {
      color: colors.text.main,
      flexGrow: 1,
    },
    icon: {
      paddingRight: spacing(2.5),
      flexShrink: 0,
    },
  }),
  { name: 'Toast' }
);

const ToastIcon: React.FunctionComponent<Props> = ({ children, name }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      className={cx(classes.root, {
        [classes.success]: name === 'success',
        [classes.error]: name === 'error',
        [classes.warning]: name === 'warning',
      })}
    >
      {name && (
        <Icon
          name={name}
          color={getColor(name, theme)}
          className={classes.icon}
        />
      )}
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export const success = (
  content: React.ReactNode,
  options?: ToastOptions | undefined
): React.ReactText =>
  toast.success(<ToastIcon name={'success'}>{content}</ToastIcon>, options);

export const warning = (
  content: React.ReactNode,
  options?: ToastOptions | undefined
): React.ReactText =>
  toast.warning(<ToastIcon name={'warning'}>{content}</ToastIcon>, options);

export const error = (
  content: React.ReactNode,
  options?: ToastOptions | undefined
): React.ReactText =>
  toast.error(<ToastIcon name={'error'}>{content}</ToastIcon>, options);

export const neutral = (
  content: React.ReactNode,
  options?: ToastOptions | undefined
): React.ReactText => toast(<ToastIcon>{content}</ToastIcon>, options);

export default { error, warning, success, neutral };
