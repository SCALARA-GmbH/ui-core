import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Popover, useTheme } from '../..';
import { IconName } from '../Icon/Icon';
import { usePopoverPositionUpdate } from '../Popover';
import PrimaryNavigationDesktop from '../PrimaryNavigation/PrimaryNavigationDesktop';
import PrimaryNavigationItem from '../PrimaryNavigation/PrimaryNavigationItem';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import NavigationItemGroup from './NavigationItemGroup';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  decorators: [withKnobs]
};

const Labels: string[] = [
  'Accounts',
  'Transactions',
  'Business plan',
  'Fiscal year'
];

export const NavigationStory = (): JSX.Element => {
  const theme = useTheme();

  const click = action('clicked navigation item');
  const [selected, setSelected] = React.useState<string>(Labels[0]);

  const handleClick = (label: string) => {
    setSelected(label);
    click(label);
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex'
      }}
    >
      <Navigation header={'Finances'}>
        <NavigationItemGroup title={'Accounting'}>
          {Labels.map((label) => (
            <NavigationItem
              label={label}
              key={label}
              onClick={() => handleClick(label)}
              selected={label === selected}
            />
          ))}
        </NavigationItemGroup>
      </Navigation>
    </div>
  );
};
NavigationStory.storyName = 'Overview';

export const NavigationDisabledStory = (): JSX.Element => {
  const theme = useTheme();

  const click = action('clicked navigation item');

  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  const handleClick = (label: string) => {
    setSelected(label);
    click(label);
  };

  const [open, setOpen] = React.useState(false);
  const { update, popoverRef, anchorElement } = usePopoverPositionUpdate();

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex'
      }}
      onMouseMove={(event: React.MouseEvent<HTMLElement>) =>
        update({ x: event.clientX, y: event.clientY })
      }
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Navigation disabled header={'Disabled Finances'}>
        <NavigationItemGroup title={'Accounting'}>
          {Labels.map((label) => (
            <NavigationItem
              label={label}
              key={label}
              onClick={() => handleClick(label)}
              selected={selected === label}
            />
          ))}
        </NavigationItemGroup>
      </Navigation>
      <Popover
        open={open}
        popoverRef={popoverRef}
        anchorElement={anchorElement}
        variant={'info'}
      >
        <>
          Schalten Sie zunächst Ihr
          <br /> Hauptbuch frei
        </>
      </Popover>
    </div>
  );
};
NavigationDisabledStory.storyName = 'Disabled';

const PrimaryLabels = [
  { key: 'real-estate', name: 'Real Estate' },
  { key: 'finance', name: 'Finances' },
  { key: 'communication', name: 'Communication' },
  { key: 'contacts', name: 'Contacts' }
];

export const TwoLayerNavigationStory = (): JSX.Element => {
  const theme = useTheme();

  const click = action('clicked navigation item');
  const secondClick = action('clicked secondary navigation item');
  const [selected, setSelected] = React.useState<string>(PrimaryLabels[0].key);
  const [selectedSecond, setSelectedSecond] = React.useState<string>(Labels[0]);

  const handleClick = (label: string) => {
    setSelected(label);
    click(label);
  };

  const handleSecondClick = (label: string) => {
    setSelectedSecond(label);
    secondClick(label);
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <PrimaryNavigationDesktop LogoComponentProps={{ text: true }}>
        {PrimaryLabels.map((label) => (
          <PrimaryNavigationItem
            label={label.name}
            key={label.key}
            selected={label.key === selected}
            iconName={label.key as IconName}
            onClick={() => handleClick(label.key)}
          />
        ))}
      </PrimaryNavigationDesktop>
      <Navigation header={'Finances'} onClick={handleSecondClick} secondary>
        <NavigationItemGroup title={'Accounting'}>
          {Labels.map((label) => (
            <NavigationItem
              label={label}
              key={label}
              selected={label === selectedSecond}
            />
          ))}
        </NavigationItemGroup>
        <NavigationItemGroup bottom>
          <NavigationItem
            label={'Log out'}
            iconName={'logout'}
            selected={selected === 'logout'}
          />
        </NavigationItemGroup>
      </Navigation>
    </div>
  );
};
TwoLayerNavigationStory.storyName = 'Primary and Secondary Navigation';
