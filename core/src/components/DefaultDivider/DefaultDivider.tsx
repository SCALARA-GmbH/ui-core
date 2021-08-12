import { Divider } from '@material-ui/core';
import * as React from 'react';

import { useStyles } from './styles';

const DefaultDivider: React.FunctionComponent = () => {
  const classes = useStyles();
  return <Divider className={classes.root} />;
};

export default DefaultDivider;
