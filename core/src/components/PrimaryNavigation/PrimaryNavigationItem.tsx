import { ListItemIcon } from '@material-ui/core';
import * as React from 'react';

import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';
import { makeStyles } from '../ThemeProvider/styles';

export interface NavigationItemProps {
  label: string;
  iconName: IconName;
  selectKey: string;
}

const useStyle = makeStyles(
  ({ spacing }) => ({
    icon: {
      minWidth: 0,
      paddingRight: spacing(1.5)
    }
  }),
  { name: 'SCA__PrimaryNavigation-Item' }
);

const PrimaryNavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  iconName
}) => {
  const classes = useStyle();
  return (
    <ListItemIcon className={classes.icon} aria-label={label}>
      <Icon name={iconName} />
    </ListItemIcon>
  );
};

export default PrimaryNavigationItem;
