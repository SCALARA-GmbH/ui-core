import classNames from 'classnames';
import * as React from 'react';

import { useStyles } from './styles';

export interface FooterProps {
  testId?: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Footer: React.FunctionComponent<FooterProps> = ({
  className,
  testId = '',
  children
}) => {
  const classes = useStyles();

  return (
    // <div className={classNames(className, classes.root)} data-testid={testId}>
    <div className={classes.content}>{children}</div>
    // </div>
  );
};

export default Footer;
