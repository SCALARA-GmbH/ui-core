import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';

import NavigationDesktop from './NavigationDesktop';
import { NavigationItemGroupProps } from './NavigationItemGroup';

import { NavigationMobile } from './index';

export interface Props {
  children:
    | React.ReactElement<NavigationItemGroupProps>[]
    | React.ReactElement<NavigationItemGroupProps>;
  header?: string;
  disabled?: boolean;
  secondary?: boolean;
}

const Navigation: React.FunctionComponent<Props> = ({
  header,
  children,
  disabled,
  secondary
}) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  return desktop ? (
    <NavigationDesktop
      disabled={disabled}
      secondary={secondary}
      header={header}
    >
      {children}
    </NavigationDesktop>
  ) : (
    <NavigationMobile secondary={secondary} disabled={disabled}>
      {children}
    </NavigationMobile>
  );
};

export default Navigation;
