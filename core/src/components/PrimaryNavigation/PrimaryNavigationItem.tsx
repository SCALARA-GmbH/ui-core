import { ListItemIcon } from '@material-ui/core';
import * as React from 'react';

import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';

export interface NavigationItemProps {
  label: string;
  iconName: IconName;
  selectKey: string;
}

const PrimaryNavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  iconName
}) => {
  return (
    <ListItemIcon aria-label={label}>
      <Icon name={iconName} />
    </ListItemIcon>
  );
};

export default PrimaryNavigationItem;
