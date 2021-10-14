import { List, useMediaQuery, useTheme } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import Typography from '../Typography';

import { NavigationItemProps } from './NavigationItem';
import { useStyles } from './styles';

export interface NavigationItemGroupProps {
  bottom?: boolean;
  title?: string;
  disabled?: boolean;
  hideForMobile?: boolean;
  children:
    | React.ReactElement<NavigationItemProps>[]
    | React.ReactElement<NavigationItemProps>;
}

const NavigationItemGroup: React.FunctionComponent<NavigationItemGroupProps> = ({
  title,
  disabled,
  children,
  bottom,
  hideForMobile,
}) => {
  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('lg'));

  const classes = useStyles({ disabled });

  return (
    <div
      className={cx({
        [classes.test]: true,
        [classes.bottom]: bottom,
        [classes.hide]: mobile && hideForMobile,
      })}
    >
      {title && (
        <div className={classes.title}>
          <Typography color={disabled ? 'disabled' : 'initial'} variant={'c1'}>
            {title}
          </Typography>
        </div>
      )}
      <List className={classes.list}>
        {React.Children.map<
          React.ReactNode,
          React.ReactElement<NavigationItemProps>
        >(children, (child) => (
          <li>{React.cloneElement(child, { disabled })}</li>
        ))}
      </List>
    </div>
  );
};

export default NavigationItemGroup;
