import { action, withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { SideMenu } from '../..';
import ThemeProvider from '../ThemeProvider';

import AppBar from './AppBar';

export default {
  title: 'Components/AppBar',
  component: AppBar,
  decorators: [withKnobs, withActions],
};

export const AppBarStory = (): JSX.Element => {
  const [leftMenuSelected, setLeftMenuSelected] = React.useState<number>(0);
  const [rightSelectedId, setRightSelectedId] = React.useState<number>();
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const [menuHandle, setMenuHandle] = React.useState<HTMLDivElement | null>(
    null
  );
  const clickOnItem = action('menu item click');
  const handleClickLeft = (id: number) => {
    clickOnItem(`clicked on left ${id}`);
    setLeftMenuSelected(id);
  };

  const handleClickProfile = () => {
    clickOnItem(`clicked on profile`);
    setMenuHandle(anchorRef.current);
  };

  const handleSideMenuClick = (id: number) => {
    clickOnItem(`clicked on right side menu ${id}`);
    setRightSelectedId(id);
    setMenuHandle(null);
  };

  const handleLogoClick = () => {
    clickOnItem('logo click');
  };

  const renderMenu = () => (
    <SideMenu
      selectedId={rightSelectedId}
      onClick={handleSideMenuClick}
      onClose={() => setMenuHandle(null)}
      menuHandle={menuHandle}
      menuItems={[
        {
          id: 0,
          title: 'PROFILE',
          label: 'SIGN OUT',
          iconName: 'person-outline',
        },
        { id: 1, title: 'SIGN OUT', label: 'SIGN OUT', iconName: 'logout' },
      ]}
    />
  );

  return (
    <ThemeProvider type={'dark'}>
      <div ref={anchorRef} />
      {renderMenu()}
      <AppBar
        ProfileComponentProps={{
          onClick: handleClickProfile,
          image:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHOVO2QjkzNEA/profile-displayphoto-shrink_200_200/0/1581937441755?e=1612396800&v=beta&t=28v-zA2TLatECb9OnybCacuw1bSbz-6qqohADJ633Ns',
        }}
        LogoComponentProps={{
          onClick: handleLogoClick,
          size: 'small',
        }}
        onClick={handleClickLeft}
        menuItems={[
          { title: 'REALY LOOOOOONG RELATIONS', id: 0, label: 'RELATIONS' },
          { title: 'CONTACTS', id: 1, label: 'CONTACTS' },
          { title: 'MESSAGES', id: 2, label: 'MESSAGES' },
        ]}
        selectedId={leftMenuSelected}
        menuTrayLabel={'Left Menu'}
      />
    </ThemeProvider>
  );
};
AppBarStory.storyName = 'Overview';

export const AppBarIconStory = (): JSX.Element => {
  const [leftMenuSelected, setLeftMenuSelected] = React.useState<number>(0);
  const [rightSelectedId, setRightSelectedId] = React.useState<number>();
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const [menuHandle, setMenuHandle] = React.useState<HTMLDivElement | null>(
    null
  );
  const clickOnItem = action('menu item click');
  const handleClickLeft = (id: number) => {
    clickOnItem(`clicked on left ${id}`);
    setLeftMenuSelected(id);
  };

  const handleClickProfile = () => {
    clickOnItem(`clicked on profile`);
    setMenuHandle(anchorRef.current);
  };

  const handleSideMenuClick = (id: number) => {
    clickOnItem(`clicked on right side menu ${id}`);
    setRightSelectedId(id);
    setMenuHandle(null);
  };

  const handleLogoClick = () => {
    clickOnItem('logo click');
  };

  const renderMenu = () => (
    <SideMenu
      onClick={handleSideMenuClick}
      onClose={() => setMenuHandle(null)}
      menuHandle={menuHandle}
      menuItems={[
        {
          id: 0,
          title: 'PROFILE',
          label: 'SIGN OUT',
          iconName: 'person-outline',
        },
        { id: 1, title: 'SIGN OUT', label: 'SIGN OUT', iconName: 'logout' },
      ]}
      selectedId={rightSelectedId}
    />
  );

  return (
    <ThemeProvider type={'dark'}>
      <div ref={anchorRef} />
      {renderMenu()}
      <AppBar
        ProfileComponentProps={{
          onClick: handleClickProfile,
        }}
        LogoComponentProps={{
          onClick: handleLogoClick,
          size: 'small',
        }}
        onClick={handleClickLeft}
        menuItems={[
          {
            title: 'RELATIONS',
            id: 0,
            label: 'RELATIONS',
            iconName: 'attachment',
          },
          { title: 'CONTACTS', id: 1, label: 'CONTACTS', iconName: 'edit' },
        ]}
        selectedId={leftMenuSelected}
        menuTrayLabel={'Left Menu'}
      />
    </ThemeProvider>
  );
};
AppBarIconStory.storyName = 'WithIcons';

export const AppBarOnlyIconStory = (): JSX.Element => {
  const [leftMenuSelected, setLeftMenuSelected] = React.useState<number>(0);
  const [rightSelectedId, setRightSelectedId] = React.useState<number>();
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const [menuHandle, setMenuHandle] = React.useState<HTMLDivElement | null>(
    null
  );
  const clickOnItem = action('menu item click');
  const handleClickLeft = (id: number) => {
    clickOnItem(`clicked on left ${id}`);
    setLeftMenuSelected(id);
  };

  const handleClickProfile = () => {
    clickOnItem(`clicked on profile`);
    setMenuHandle(anchorRef.current);
  };

  const handleSideMenuClick = (id: number) => {
    clickOnItem(`clicked on right side menu ${id}`);
    setRightSelectedId(id);
    setMenuHandle(null);
  };

  const handleLogoClick = () => {
    clickOnItem('logo click');
  };

  const renderMenu = () => (
    <SideMenu
      onClick={handleSideMenuClick}
      onClose={() => setMenuHandle(null)}
      menuHandle={menuHandle}
      menuItems={[
        {
          id: 0,
          label: 'PROFILE',
          iconName: 'person-outline',
          title: 'PROFILE',
        },
        { id: 1, label: 'SIGN OUT', iconName: 'logout', title: 'SIGN OUT' },
      ]}
      selectedId={rightSelectedId}
    />
  );

  return (
    <ThemeProvider type={'dark'}>
      <div ref={anchorRef} />
      {renderMenu()}
      <AppBar
        ProfileComponentProps={{
          onClick: handleClickProfile,
          type: 'company',
        }}
        LogoComponentProps={{
          onClick: handleLogoClick,
          size: 'small',
        }}
        menuItems={[
          { id: 0, label: 'RELATIONS', iconName: 'attachment' },
          { id: 1, label: 'CONTACTS', iconName: 'edit' },
        ]}
        onClick={handleClickLeft}
        selectedId={leftMenuSelected}
        menuTrayLabel={'Left Menu'}
      />
    </ThemeProvider>
  );
};
AppBarOnlyIconStory.storyName = 'OnlyIcons';
