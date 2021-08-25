import { ListItemIcon, ListItemText } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { makeStyles, Typography } from '../../index';
import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';

export interface NavigationItemProps {
  label: string;
  iconName: IconName;
  selectKey: string;
  mobile?: boolean;
  selected?: boolean;
}

const useStyles = makeStyles(({ colors, transitions }) => ({
  selected: {
    transition: transitions.create('color', {
      easing: transitions.easing.easeIn,
      duration: transitions.duration.short
    }),
    color: colors.neutral.F
  },
  deselected: {
    color: colors.neutral['4']
  }
}));

const PrimaryNavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  iconName,
  mobile,
  selected
}) => {
  const classes = useStyles();

  const className = cx({
    [classes.selected]: selected,
    [classes.deselected]: !selected
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
