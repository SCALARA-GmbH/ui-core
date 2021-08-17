import { Divider } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { useStyles } from './styles';

export interface Props {
  className?: string;
}

const DefaultDivider: React.FunctionComponent<Props> = ({ className }) => {
  const classes = useStyles();
  return <Divider className={cx(classes.root, className)} />;
};

export default DefaultDivider;
