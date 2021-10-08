import classNames from 'classnames';
import * as React from 'react';

import Typography from '../Typography';

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
    <div
      className={classNames(className, classes.root)}
      data-testid={{ testId }}
    >
      {React.Children.map(children, (child) =>
        typeof child === 'string' ? (
          <Typography className={classes.child} align={'center'} variant={'c3'}>
            {child}
          </Typography>
        ) : (
          <Typography
            className={classes.child}
            color={'primary'}
            align={'center'}
            linkColor={'clickable'}
            linkVariant={'c3'}
            variant={'c3'}
          >
            {child}
          </Typography>
        )
      )}
    </div>
  );
};

export default Footer;
