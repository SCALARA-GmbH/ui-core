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

const PrimaryNavigation: React.FunctionComponent<Props> = ({
  LogoComponent = Logo,
  LogoComponentProps,
  selectedKey,
  children,
  onClick
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={cx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: cx(classes.drawerPaper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
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
                setOpen(false);
                onClick?.(child.props.selectKey);
              }}
            >
              {child}
            </ListItem>
          </li>
        ))}
      </List>
    </Drawer>
  );
};

export default PrimaryNavigation;
