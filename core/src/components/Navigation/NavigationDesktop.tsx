import { Drawer, List } from '@material-ui/core';
import cx from 'classnames';
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
  disabled?: boolean;
  secondary?: boolean;
}

const NavigationDesktop: React.FunctionComponent<Props> = ({
  header,
  children,
  disabled,
  secondary
}) => {
  const classes = useStyles({ disabled });

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: cx(classes.drawerPaper, { [classes.secondary]: secondary })
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

export default NavigationDesktop;
