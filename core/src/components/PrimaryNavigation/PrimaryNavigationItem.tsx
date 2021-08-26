import { ListItemIcon, ListItemText } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { Typography } from '../../index';
import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';

import { useStyles } from './styles';

export interface NavigationItemProps {
  label: string;
  iconName: IconName;
  selectKey: string;
  mobile?: boolean;
  selected?: boolean;
}

const PrimaryNavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  iconName,
  mobile,
  selected
}) => {
  const classes = useStyles();

  const className = cx({
    [classes.selectedItem]: selected,
    [classes.deselectedItem]: !selected
  });

  return (
    <>
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
    </>
  );
};

export default PrimaryNavigationItem;
