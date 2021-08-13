import { Menu, MenuItem, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import cx from 'classnames';
import * as React from 'react';

import { Icon, Typography } from '../../index';
import { IconName } from '../Icon/Icon';

import { useStyles } from './styles';

export interface MenuItemType {
  iconName?: IconName;
  title?: string;
  label: string;
  id: number;
}
export interface Props {
  className?: string;
  menuHandle: HTMLDivElement | null;
  onClose?: () => void;
  menuItems: MenuItemType[];
  onClick?: (id: number) => void;
  selectedId?: number;
}

const SideMenu: React.FunctionComponent<Props> = ({
  className,
  menuHandle,
  onClose,
  menuItems,
  onClick,
  selectedId
}) => {
  const classes = useStyles();

  if (menuHandle)
    menuHandle.className = cx(classes.anchor, classes.toolbarMixin);

  return (
    <Menu
      className={className}
      TransitionComponent={Slide}
      TransitionProps={{ direction: 'left' } as TransitionProps}
      classes={{ paper: classes.backgroundColor }}
      anchorEl={menuHandle}
      PaperProps={{ square: true }}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      keepMounted
      marginThreshold={0}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={!!menuHandle}
      onClose={onClose}
      transitionDuration={'auto'}
    >
      {menuItems.map((menuItem) => (
        <MenuItem
          className={classes.menuItem}
          key={menuItem.id}
          onClick={() => onClick?.(menuItem.id)}
          aria-label={menuItem.label}
          id={menuItem.label}
        >
          <div className={cx(classes.icon, classes.hover)}>
            {menuItem.iconName && <Icon name={menuItem.iconName} />}
          </div>
          {menuItem.title && (
            <Typography
              variant={'c2'}
              align={'center'}
              className={classes.hover}
              color={menuItem.id === selectedId ? 'primary' : 'initial'}
            >
              {menuItem.title}
            </Typography>
          )}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default SideMenu;
