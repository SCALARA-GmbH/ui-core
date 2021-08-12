import { ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';

import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';
import { makeStyles } from '../ThemeProvider/styles';
import Typography from '../Typography';
import { Wrap } from '../Typography/Typography';

export interface NavigationItemProps {
  label: string;
  iconName: IconName;
  selectKey: string;
}

const useStyle = makeStyles(
  ({ spacing }) => ({
    icon: {
      minWidth: 0,
      paddingRight: spacing(1.5),
    },
  }),
  { name: 'SCA__PrimaryNavigation-Item' },
);

const PrimaryNavigationItem: React.FunctionComponent<NavigationItemProps> = ({ label, iconName }) => {
  const classes = useStyle();
  return (
    <>
      <ListItemIcon className={classes.icon}>
        <Icon name={iconName} />
      </ListItemIcon>
      <ListItemText>
        <Typography variant={'c1'} span wrap={Wrap.NO_WRAP}>
          {label}
        </Typography>
      </ListItemText>
    </>
  );
};

export default PrimaryNavigationItem;
