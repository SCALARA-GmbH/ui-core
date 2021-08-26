import { Drawer, List } from '@material-ui/core';
import * as React from 'react';

import DefaultDivider from '../DefaultDivider';
import Typography from '../Typography';

import { NavigationItemProps } from './NavigationItem';
import { useStyles } from './styles';

export interface Props {
  children:
    | React.ReactElement<NavigationItemProps>[]
    | React.ReactElement<NavigationItemProps>;
  header?: string;
  title?: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
  secondary?: boolean;
}

const Navigation: React.FunctionComponent<Props> = ({
  header,
  title,
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
      <DefaultDivider />
      <div className={classes.title}>
        <Typography color={disabled ? 'disabled' : 'initial'} variant={'c1'}>
          {title}
        </Typography>
      </div>
      <List className={classes.list}>
        {React.Children.map<
          React.ReactNode,
          React.ReactElement<NavigationItemProps>
        >(children, (child) => (
          <li>{React.cloneElement(child, { disabled })}</li>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation;
