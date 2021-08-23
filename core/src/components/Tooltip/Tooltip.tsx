import { Tooltip as MuiTooltip } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';
import { getFontStyle } from '../Typography/styles';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.colors.neutral['1'],
    color: theme.colors.neutral['6'],
    borderTopRightRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
    borderTopLeftRadius: theme.spacing(1),
    borderBottomLeftRadius: theme.spacing(0),
    padding: theme.spacing(1, 2),
    ...getFontStyle('c2')
  }
}));

interface Props {
  className?: string;
  children: React.ReactElement;
  title: string;
}

const Tooltip: React.FunctionComponent<Props> = ({
  className,
  children,
  title
}) => {
  const classes = useStyles();
  return (
    <MuiTooltip
      className={className}
      classes={classes}
      title={title}
      placement="right-start"
    >
      <span>{children}</span>
    </MuiTooltip>
  );
};

export default Tooltip;
