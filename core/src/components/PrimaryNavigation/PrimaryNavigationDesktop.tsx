import { Drawer, List } from '@material-ui/core';
import * as React from 'react';

import { Logo } from '../../index';
import { LogoProps } from '../Logo/Logo';

import { PrimaryNavigationItemProps } from './PrimaryNavigationItem';
import { useStyles } from './styles';

export interface Props {
  LogoComponent?: React.ComponentType<LogoProps>;
  LogoComponentProps?: LogoProps;
  children:
    | React.ReactElement<PrimaryNavigationItemProps>[]
    | React.ReactElement<PrimaryNavigationItemProps>;
}

const PrimaryNavigationDesktop: React.FunctionComponent<Props> = ({
  LogoComponent = Logo,
  LogoComponentProps,
  children
}) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <LogoComponent
        {...LogoComponentProps}
        className={classes.logo}
        color={'white'}
      />
      <List className={classes.list}>
        {React.Children.map<
          React.ReactNode,
          React.ReactElement<PrimaryNavigationItemProps>
        >(children, (child) => (
          <li>{child}</li>
        ))}
      </List>
    </Drawer>
  );
};

export default PrimaryNavigationDesktop;
