import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';

import Logo from '../Logo';

import PrimaryNavigationDesktop from './PrimaryNavigationDesktop';
import { NavigationItemProps } from './PrimaryNavigationItem';
import PrimaryNavigationMobile from './PrimaryNavigationMobile';

interface Props {
  selectedKey: string;
  children:
    | React.ReactElement<NavigationItemProps>[]
    | React.ReactElement<NavigationItemProps>;

  onClick?: (value: string) => void;
}

const PrimaryNavigation: React.FunctionComponent<Props> = ({
  selectedKey,
  children,
  onClick
}) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));

  return desktop ? (
    <PrimaryNavigationDesktop
      LogoComponentProps={{ text: true }}
      selectedKey={selectedKey}
      onClick={onClick}
    >
      {children}
    </PrimaryNavigationDesktop>
  ) : (
    <PrimaryNavigationMobile
      LogoComponent={tablet ? Logo : undefined}
      LogoComponentProps={{ text: true, size: 'small' }}
      selectedKey={selectedKey}
      onClick={onClick}
    >
      {children}
    </PrimaryNavigationMobile>
  );
};

export default PrimaryNavigation;
