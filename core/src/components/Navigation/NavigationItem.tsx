import { ListItem, ListItemText } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import Typography from '../Typography';

import { useStyles } from './styles';

export interface NavigationItemProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  selected,
  onClick,
  disabled
}) => {
  const classes = useStyles({ disabled });
  return (
    <ListItem
      className={cx(classes.item, {
        [classes.selected]: selected,
        [classes.deselected]: !selected
      })}
      button
      disabled={disabled}
      disableRipple
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        // note: this is fixed in mui v5 and does not have to be set manually
        event.preventDefault();
        if (!disabled) onClick?.();
      }}
    >
      <ListItemText>
        <Typography variant={'c1'} span>
          {label}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default NavigationItem;
