import { AppBar, Drawer, List } from '@material-ui/core';
import cx from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
import * as React from 'react';

import { Avatar, Typography, useTheme } from '../../index';
import { Icon } from '../Icon';
import { LogoProps } from '../Logo/Logo';

import { PrimaryNavigationItemProps } from './PrimaryNavigationItem';
import { useStyles } from './styles';

export interface Props {
  tablet?: boolean;
  menuAriaLabel?: string;
  LogoComponent?: React.ComponentType<LogoProps>;
  LogoComponentProps?: LogoProps;
  children:
    | React.ReactElement<PrimaryNavigationItemProps>[]
    | React.ReactElement<PrimaryNavigationItemProps>;
  onClick?: () => void;
  onClose?: () => void;
  open?: boolean;
}

const PrimaryNavigationMobile: React.FunctionComponent<Props> = ({
  tablet,
  LogoComponent,
  LogoComponentProps,
  children,
  menuAriaLabel,
  open,
  onClose,
  onClick,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.mobileRoot}>
      <AppBar position="absolute" className={classes.appBar}>
        <div
          className={cx(classes.toolbar, {
            [classes.toolbarMobile]: !tablet,
            [classes.toolbarTablet]: tablet,
          })}
        >
          {React.Children.map<
            React.ReactNode,
            React.ReactElement<PrimaryNavigationItemProps>
          >(children, (child) =>
            child.props.selected ? (
              <span
                className={cx(classes.appBarSelectedItem, {
                  [classes.transparent]: open,
                })}
              >
                {child.props.iconName && (
                  <Icon
                    color={theme.colors.icon.navigation}
                    name={child.props.iconName}
                  >
                    {child.props.label}
                  </Icon>
                )}
                {child.props.image !== undefined && (
                  <Avatar
                    active
                    image={child.props.image}
                    type={child.props.accountType}
                  />
                )}
                <Typography
                  className={cx(
                    classes.deselectedItem,
                    classes.appBarSelectedItemText
                  )}
                >
                  {child.props.label}
                </Typography>
              </span>
            ) : null
          )}
          {LogoComponent && tablet && (
            <LogoComponent
              className={classes.logoTablet}
              {...LogoComponentProps}
              color={'white'}
            />
          )}
          {LogoComponent && !tablet && (
            <LogoComponent
              className={cx(classes.logoMobile, {
                [classes.transparent]: !open,
              })}
              {...LogoComponentProps}
              color={'white'}
            />
          )}
          <span className={classes.mobileMenuButton}>
            <Hamburger
              toggled={open}
              toggle={onClick}
              size={18}
              color={theme.colors.icon.navigation}
              label={menuAriaLabel}
            />
          </span>
        </div>
      </AppBar>
      <Drawer
        BackdropProps={{ invisible: true }}
        variant="temporary"
        anchor="top"
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaperMobile,
        }}
        ModalProps={{
          // Better open performance on mobile.
          keepMounted: true,
          // solves zIndex issues with appbar
          disablePortal: true,
        }}
      >
        <div className={classes.mobileSpace} />
        <List className={classes.list}>
          {React.Children.map<
            React.ReactNode,
            React.ReactElement<PrimaryNavigationItemProps>
          >(children, (child) => (
            <li>{child}</li>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default PrimaryNavigationMobile;
