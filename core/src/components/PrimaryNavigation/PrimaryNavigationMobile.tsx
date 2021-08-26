import { AppBar, Drawer, List } from '@material-ui/core';
import cx from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
import * as React from 'react';

import { Typography, useTheme } from '../../index';
import { Icon } from '../Icon';
import { LogoProps } from '../Logo/Logo';

import { NavigationItemProps } from './PrimaryNavigationItem';
import { useStyles } from './styles';

export interface Props {
  LogoComponent?: React.ComponentType<LogoProps>;
  LogoComponentProps?: LogoProps;
  children:
    | React.ReactElement<NavigationItemProps>[]
    | React.ReactElement<NavigationItemProps>;
}

const PrimaryNavigationMobile: React.FunctionComponent<Props> = ({
  LogoComponent,
  LogoComponentProps,
  children
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar position="absolute" className={classes.appBar}>
        <div className={classes.toolbar}>
          {React.Children.map<
            React.ReactNode,
            React.ReactElement<NavigationItemProps>
          >(children, (child) =>
            child.props.selected ? (
              <span
                className={cx(classes.appBarSelectedItem, {
                  [classes.hide]: open
                })}
              >
                <Icon
                  color={theme.colors.icon.navigation}
                  name={child.props.iconName}
                >
                  {child.props.label}
                </Icon>
                <Typography className={classes.deselectedItem}>
                  {child.props.label}
                </Typography>
              </span>
            ) : null
          )}
          {LogoComponent && (
            <LogoComponent
              className={classes.logoMobile}
              {...LogoComponentProps}
              color={'white'}
              size={'small'}
            />
          )}
          <span className={classes.mobileMenuButton}>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={18}
              color={theme.colors.icon.navigation}
            />
          </span>
        </div>
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
        <div className={classes.mobileSpace} />
        <List className={classes.list}>
          {React.Children.map<
            React.ReactNode,
            React.ReactElement<NavigationItemProps>
          >(children, (child) => (
            <li>
              {React.cloneElement(child, {
                mobile: true
              })}
            </li>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default PrimaryNavigationMobile;
