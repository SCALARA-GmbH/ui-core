import { AppBar, Drawer, List, ListItem, Toolbar } from '@material-ui/core';
import cx from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
import * as React from 'react';

import { IconButton, Logo, useTheme } from '../../index';
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

const PrimaryNavigationMobile: React.FunctionComponent<Props> = ({
  LogoComponent = Logo,
  LogoComponentProps,
  selectedKey,
  children,
  onClick
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <LogoComponent
            className={classes.logoMobile}
            {...LogoComponentProps}
            color={'white'}
            size={'small'}
          />
          <span className={classes.mobileMenuButton}>
            <Hamburger toggled={open} toggle={setOpen} size={18} />
          </span>
        </Toolbar>
      </AppBar>
      <Drawer
        transitionDuration={333}
        BackdropProps={{ invisible: true }}
        variant="temporary"
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        classes={{
          paper: classes.drawerPaperMobile
        }}
        ModalProps={{
          // Better open performance on mobile.
          keepMounted: true,
          // solves zIndex issues with appbar
          disablePortal: true
        }}
      >
        <List className={classes.list}>
          {React.Children.map<
            React.ReactNode,
            React.ReactElement<NavigationItemProps>
          >(children, (child) => (
            <li>
              <ListItem
                className={cx(classes.itemMobile, {
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
                {React.cloneElement(child, {
                  mobile: true,
                  selected: selectedKey === child.props.selectKey
                })}
              </ListItem>
            </li>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default PrimaryNavigationMobile;
