import { Drawer, List, ListItem } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';
import { cloneElement } from 'react';

import DefaultDivider from '../DefaultDivider';
import Typography from '../Typography';

import { NavigationSectionProps } from './NavigationSection';
import { useStyles } from './styles';

export interface Props {
  children:
    | React.ReactElement<NavigationSectionProps>[]
    | React.ReactElement<NavigationSectionProps>;
  header?: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
  selectedKey?: string;
  isSecondary?: boolean;
}

const Navigation: React.FunctionComponent<Props> = ({
  header,
  children,
  onClick,
  disabled,
  selectedKey,
  isSecondary
}) => {
  const classes = useStyles({ disabled, isSecondary });
  const childrenWithProps = React.Children.map<
    React.ReactElement<NavigationSectionProps>,
    React.ReactElement<NavigationSectionProps>
  >(children, (child) => {
    return React.cloneElement(child, {
      disabled,
      onClick,
      selectedKey
    });
  });
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
      {childrenWithProps}
    </Drawer>
  );
};

export default Navigation;
