import { List, ListItem } from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import Typography from '../Typography';

import { NavigationItemProps } from './NavigationItem';
import { useStyles } from './styles';

export interface NavigationSectionProps {
  children:
    | React.ReactElement<NavigationItemProps>[]
    | React.ReactElement<NavigationItemProps>;
  title?: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
  selectedKey?: string;
}

const NavigationSection: React.FunctionComponent<NavigationSectionProps> = ({
  selectedKey,
  title,
  children,
  onClick,
  disabled
}) => {
  const classes = useStyles({ disabled });
  return (
    <div>
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
          <li>
            <ListItem
              disabled={disabled}
              className={cx(classes.item, {
                [classes.selected]: selectedKey === child.props.selectKey,
                [classes.deselected]: selectedKey !== child.props.selectKey
              })}
              button
              disableRipple
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                // note: this is fixed in mui v5 and does not have to be set manually
                event.preventDefault();
                if (!disabled) onClick?.(child.props.selectKey);
              }}
            >
              {child}
            </ListItem>
          </li>
        ))}
      </List>
    </div>
  );
};

export default NavigationSection;
