import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { Typography } from '../../index';
import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';

import { useStyles } from './styles';

export interface NavigationItemProps {
  label: string;
  iconName: IconName;
  mobile?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

const PrimaryNavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  iconName,
  mobile,
  selected,
  onClick
}) => {
  const classes = useStyles();

  const className = cx({
    [classes.selectedItem]: selected,
    [classes.deselectedItem]: !selected
  });

  return (
    <ListItem
      className={cx({
        [classes.selected]: selected,
        [classes.deselected]: !selected,
        [classes.itemMobile]: mobile,
        [classes.item]: !mobile
      })}
      button
      disableRipple
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        // note: this is fixed in mui v5 and does not have to be set manually
        event.preventDefault();
        onClick?.();
      }}
    >
      {!mobile && <span className={classes.tooltip}>{label}</span>}

      <ListItemIcon aria-label={label}>
        <Icon name={iconName} className={className} />
      </ListItemIcon>
      {mobile && (
        <ListItemText>
          <Typography variant={selected ? 'c1' : 'c2'} className={className}>
            {label}
          </Typography>
        </ListItemText>
      )}
    </ListItem>
  );
};

export default PrimaryNavigationItem;
