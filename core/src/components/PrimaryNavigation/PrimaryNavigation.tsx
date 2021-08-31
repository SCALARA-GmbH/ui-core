import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';

import Logo from '../Logo';

import PrimaryNavigationDesktop from './PrimaryNavigationDesktop';
import { PrimaryNavigationItemProps } from './PrimaryNavigationItem';
import PrimaryNavigationMobile from './PrimaryNavigationMobile';

interface Props {
  children:
    | React.ReactElement<PrimaryNavigationItemProps>[]
    | React.ReactElement<PrimaryNavigationItemProps>;
}

const PrimaryNavigation: React.FunctionComponent<Props> = ({ children }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));

  return desktop ? (
    <PrimaryNavigationDesktop LogoComponentProps={{ text: true }}>
      {children}
    </PrimaryNavigationDesktop>
  ) : (
    <PrimaryNavigationMobile
      LogoComponent={tablet ? Logo : undefined}
      LogoComponentProps={{ text: true, size: 'small' }}
    >
      {children}
    </PrimaryNavigationMobile>
  );
};

export default PrimaryNavigation;
