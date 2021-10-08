import { useMediaQuery } from '@material-ui/core';
// import classNames from 'classnames';
import cx from 'classnames';
import * as React from 'react';

import { useTheme } from '../ThemeProvider/styles';
import Typography from '../Typography';

import { useStyles } from './styles';

export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  children?: React.ReactNode | React.ReactNode[];
  copyright: string;
}

/* todo: children: rename to e.g. links, additionalContent? */
const Footer: React.FunctionComponent<FooterProps> = ({
  className = '',
  style = {},
  testId = '',
  children,
  copyright
}) => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.root}>
        <div className={classes.footer}>
          <Typography
            className={classes.copyright}
            align={'center'}
            variant={'c3'}
          >
            {`${String.fromCharCode(169)} ${copyright}`}
          </Typography>
          <div className={classes.children}>
            {React.Children.map(children, (child) => {
              return (
                <div className={classes.child}>
                  <Typography
                    color={'primary'}
                    align={'center'}
                    linkColor={'clickable'}
                    linkVariant={'c3'}
                  >
                    {child}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
      <footer className={classes.root}>
        <div className={classes.footer}>
          <Typography
            className={classes.copyright}
            align={'center'}
            variant={'c3'}
          >
            {`${String.fromCharCode(169)} ${copyright}`}
          </Typography>
          <div className={classes.children}>
            {React.Children.map(children, (child) => {
              return (
                <div className={classes.child}>
                  <Typography
                    color={'primary'}
                    align={'center'}
                    linkColor={'clickable'}
                    linkVariant={'c3'}
                  >
                    {child}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
