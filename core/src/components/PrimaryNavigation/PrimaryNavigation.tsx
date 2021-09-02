import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';

import Logo from '../Logo';

import PrimaryNavigationDesktop from './PrimaryNavigationDesktop';
import { PrimaryNavigationItemProps } from './PrimaryNavigationItem';
import PrimaryNavigationMobile from './PrimaryNavigationMobile';

interface Props {
  menuAriaLabel?: string;
  children:
    | React.ReactElement<PrimaryNavigationItemProps>[]
    | React.ReactElement<PrimaryNavigationItemProps>;
}

const PrimaryNavigation: React.FunctionComponent<Props> = ({
  children,
  menuAriaLabel
}) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));

  return desktop ? (
    <PrimaryNavigationDesktop>{children}</PrimaryNavigationDesktop>
  ) : (
    <PrimaryNavigationMobile
      tablet={tablet}
      LogoComponent={Logo}
      LogoComponentProps={{ text: true, size: 'medium' }}
      menuAriaLabel={menuAriaLabel}
    >
      {children}
    </PrimaryNavigationMobile>
  );
};

export default PrimaryNavigation;
