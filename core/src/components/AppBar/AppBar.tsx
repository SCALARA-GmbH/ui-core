import { Drawer, List, ListItem } from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import cx from 'classnames';
import * as React from 'react';
import { ComponentType } from 'react';

import { Avatar, Icon, Logo, Typography } from '../../index';
import { Size } from '../../types';
import { IconName } from '../Icon/Icon';
import IconButton from '../IconButton';
import { LogoProps } from '../Logo/Logo';

import { useStyles } from './styles';

export interface MenuItemType {
  iconName?: IconName;
  title?: string;
  label: string;
  id: number;
}

export interface ProfileComponentPropsType {
  image?: string;
  size?: Size;
  alt?: string;
  className?: string;
  onClick?: () => void;
  testId?: string;
  type?: 'company' | 'person';
  tooltip?: string;
}

export interface Props {
  ProfileComponent?: ComponentType<ProfileComponentPropsType>;
  ProfileComponentProps?: ProfileComponentPropsType;
  menuItems: MenuItemType[];
  onClick?: (id: number) => void;
  LogoComponent?: React.ComponentType<LogoProps>;
  LogoComponentProps?: LogoProps;
  logoSize?: Size;
  menuTrayLabel: string;
  selectedId: number;
  className?: string;
}

/**
 * @deprecated use PrimaryNavigation and Navigation instead
 */
const AppBar: React.FunctionComponent<Props> = ({
  menuItems,
  ProfileComponent = Avatar,
  ProfileComponentProps,
  LogoComponent = Logo,
  LogoComponentProps,
  onClick,
  menuTrayLabel,
  selectedId,
  className
}) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const leftSideList = (className: string, itemClassName: string) => (
    <List className={className}>
      {menuItems.map((item) => (
        <ListItem
          disableRipple
          disableTouchRipple
          button
          key={item.id}
          onClick={() => {
            onClick?.(item.id);
            setMobileOpen(false);
          }}
          className={itemClassName}
          data-testid={'mobile-left'}
          aria-label={item.label}
        >
          {item.iconName && <Icon name={item.iconName} />}
          {item.title && (
            <Typography
              className={classes.leftItemButtons}
              color={item.id === selectedId ? 'primary' : 'initial'}
            >
              {item.title}
            </Typography>
          )}
        </ListItem>
      ))}
    </List>
  );

  return (
    <MuiAppBar
      position="static"
      className={cx(className, classes.backgroundColor)}
    >
      <Toolbar>
        <LogoComponent
          {...LogoComponentProps}
          className={cx(LogoComponentProps?.className, classes.logoRightBorder)}
        />
        <div className={classes.mobileLeft}>
          <IconButton
            onClick={() => setMobileOpen(true)}
            iconName={'menu'}
            ariaLabel={menuTrayLabel}
          />
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            classes={{ paper: classes.backgroundColor }}
          >
            <div className={cx(classes.drawerHeader, classes.toolbarMixin)}>
              <IconButton
                iconName={'arrow-left'}
                onClick={() => setMobileOpen(false)}
              />
            </div>
            {leftSideList(classes.backgroundColor, classes.mobileItems)}
          </Drawer>
        </div>
        {leftSideList(classes.desktopLeft, classes.desktopItems)}
        <div className={classes.grow} />
        <ProfileComponent {...ProfileComponentProps} />
      </Toolbar>
    </MuiAppBar>
  );
};
export default AppBar;
