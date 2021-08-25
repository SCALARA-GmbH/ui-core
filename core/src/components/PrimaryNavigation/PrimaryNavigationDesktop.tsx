import { Drawer, List, ListItem } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { Logo } from '../../index';
import { LogoProps } from '../Logo/Logo';

import { NavigationItemProps } from './PrimaryNavigationItem';
import { useStyles } from './styles';

export interface Props {
  LogoComponent?: React.ComponentType<LogoProps>;
  LogoComponentProps?: LogoProps;
  children:
    | React.ReactElement<NavigationItemProps>[]
    | React.ReactElement<NavigationItemProps>;

  onClick?: (value: string) => void;
  selectedKey?: string;
}

const PrimaryNavigationDesktop: React.FunctionComponent<Props> = ({
  LogoComponent = Logo,
  LogoComponentProps,
  selectedKey,
  children,
  onClick
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
          React.ReactElement<NavigationItemProps>
        >(children, (child) => (
          <li>
            <ListItem
              className={cx(classes.item, {
                [classes.selected]: selectedKey === child.props.selectKey,
                [classes.deselected]: selectedKey !== child.props.selectKey
              })}
              button
              disableRipple
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                // note: this is fixed in mui v5 and does not have to be set manually
                event.preventDefault();
                onClick?.(child.props.selectKey);
              }}
            >
              <span className={classes.tooltip}>{child.props.label}</span>
              {child}
            </ListItem>
          </li>
        ))}
      </List>
    </Drawer>
  );
};

export default PrimaryNavigationDesktop;
