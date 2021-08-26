import cx from 'classnames';
import * as React from 'react';

import Typography from '../Typography';

import { NavigationItemProps } from './NavigationItem';
import { useStyles } from './styles';

export interface NavigationItemGroupProps {
  bottom?: boolean;
  title?: string;
  disabled?: boolean;
  children:
    | React.ReactElement<NavigationItemProps>[]
    | React.ReactElement<NavigationItemProps>;
}

const NavigationItemGroup: React.FunctionComponent<NavigationItemGroupProps> = ({
  title,
  disabled,
  children,
  bottom
}) => {
  const classes = useStyles({ disabled });
  return (
    <div className={cx({ [classes.bottom]: bottom })}>
      {title && (
        <div className={classes.title}>
          <Typography color={disabled ? 'disabled' : 'initial'} variant={'c1'}>
            {title}
          </Typography>
        </div>
      )}
      {React.Children.map<
        React.ReactNode,
        React.ReactElement<NavigationItemProps>
      >(children, (child) => (
        <li>{React.cloneElement(child, { disabled })}</li>
      ))}
    </div>
  );
};

export default NavigationItemGroup;
