import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@material-ui/core';
import * as React from 'react';

import { useStyles } from './styles';

interface LinearProgressProps {
  className?: string;
  value?: MuiLinearProgressProps['value'];
  valueBuffer?: MuiLinearProgressProps['valueBuffer'];
  variant?: MuiLinearProgressProps['variant'];
}

const LinearProgress: React.FunctionComponent<LinearProgressProps> = ({
  className,
  value,
  valueBuffer,
  variant,
}) => {
  const classes = useStyles();
  return (
    <MuiLinearProgress
      className={className}
      color={'primary'}
      classes={{
        colorPrimary: classes.linearProgressColor,
      }}
      valueBuffer={valueBuffer}
      variant={variant}
      value={value}
    />
  );
};

export default LinearProgress;
