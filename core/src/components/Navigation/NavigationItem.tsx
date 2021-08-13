import { ListItemText } from '@material-ui/core';
import * as React from 'react';

import Typography from '../Typography';

export interface NavigationItemProps {
  label: string;
  selectKey: string;
}

const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label
}) => {
  return (
    <ListItemText>
      <Typography variant={'c1'} span>
        {label}
      </Typography>
    </ListItemText>
  );
};

export default NavigationItem;
