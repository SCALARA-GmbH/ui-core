import { Drawer, List } from '@material-ui/core';
import * as React from 'react';

import DefaultDivider from '../DefaultDivider';
import Typography from '../Typography';

import { NavigationItemGroupProps } from './NavigationItemGroup';
import { useStyles } from './styles';

export interface Props {
  children:
    | React.ReactElement<NavigationItemGroupProps>[]
    | React.ReactElement<NavigationItemGroupProps>;
  header?: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
  secondary?: boolean;
}

const Navigation: React.FunctionComponent<Props> = ({
  header,
  children,
  disabled,
  secondary
}) => {
  const classes = useStyles({ disabled, secondary });

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <Typography variant={'t3'} className={classes.header}>
        {header}
      </Typography>
      <DefaultDivider className={classes.divider} />
      <List className={classes.list}>
        {React.Children.map<
          React.ReactNode,
          React.ReactElement<NavigationItemGroupProps>
        >(children, (child) => React.cloneElement(child, { disabled }))}
      </List>
    </Drawer>
  );
};

export default Navigation;
