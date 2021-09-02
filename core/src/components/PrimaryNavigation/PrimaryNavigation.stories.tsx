import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { PrimaryNavigation, toast, ToastContainer, useTheme } from '../..';
import { IconName } from '../Icon/Icon';
import Navigation from '../Navigation/Navigation';
import NavigationItem from '../Navigation/NavigationItem';
import NavigationItemGroup from '../Navigation/NavigationItemGroup';

import PrimaryNavigationAvatar from './PrimaryNavigationAvatar';
import PrimaryNavigationItem from './PrimaryNavigationItem';

export default {
  title: 'Components/PrimaryNavigation',
  component: PrimaryNavigation,
  decorators: [withKnobs]
};

const Labels = [
  { key: 'real-estate', name: 'Real Estate' },
  { key: 'finance', name: 'Finances' },
  { key: 'communication', name: 'Communication' },
  { key: 'contacts', name: 'Contacts' }
] as const;

export const PrimaryNavigationStory = (): JSX.Element => {
  const theme = useTheme();

  const click = action('clicked navigation item');
  const [selected, setSelected] = React.useState<string>(Labels[0].key);

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
      <PrimaryNavigation>
        {Labels.map((label) => (
          <PrimaryNavigationItem
            onClick={() => handleClick(label.key)}
            label={label.name}
            key={label.key}
            selected={selected === label.key}
            iconName={label.key}
          />
        ))}
      </PrimaryNavigation>
    </div>
  );
};
PrimaryNavigationStory.storyName = 'Overview';

const PrimaryLabels = [
  {
    key: 'real-estate',
    name: 'Real Estate',
    icon: 'real-estate',
    title: 'Real Estate',
    secondaryLabels: ['Units', 'Buildings']
  },
  {
    key: 'finance',
    icon: 'finance',
    name: 'Finances',
    title: 'Accounting',
    secondaryLabels: [
      'Accounts',
      'Transactions',
      'Business plan',
      'Fiscal year'
    ]
  },
  {
    key: 'communication',
    icon: 'communication',
    name: 'Communication',
    title: 'Communication',
    secondaryLabels: ['Issues']
  },
  {
    key: 'contacts',
    icon: 'contacts',
    name: 'Contacts',
    title: 'Contacts',
    secondaryLabels: ['Invitations', 'Business partners']
  }
];
type PrimaryLabelTypes = typeof PrimaryLabels;
export type PrimaryLabel = PrimaryLabelTypes[number];

export const TwoLayerNavigationStory = (): JSX.Element => {
  const theme = useTheme();

  const click = action('clicked navigation item');
  const secondClick = action('clicked secondary navigation item');
  const [selected, setSelected] = React.useState<string>(PrimaryLabels[0].key);
  const [selectedSecond, setSelectedSecond] = React.useState<string>(
    PrimaryLabels[0].secondaryLabels[0]
  );

  const primaryLabelMap = new Map<string, PrimaryLabel>();
  PrimaryLabels.forEach((label) => {
    primaryLabelMap[label.key] = label;
  });

  const handleClick = (key: string) => {
    setSelected(key);
    if (key === 'account') {
      setSelectedSecond('Profile');
    } else {
      setSelectedSecond(primaryLabelMap[key].secondaryLabels[0]);
    }
    click(key);
  };

  const handleSecondClick = (label: string) => {
    if (label === 'Accounts') toast.success('You clicked on accounts');
    setSelectedSecond(label);
    secondClick(label);
  };

  const renderSecondNavigation = () => {
    return selected === 'account' ? (
      <Navigation header={'My Account'} secondary>
        <NavigationItemGroup>
          <NavigationItem
            label={'Profile'}
            key={'Profile'}
            selected={selectedSecond === 'Profile'}
            onClick={() => handleSecondClick('Profile')}
          />
        </NavigationItemGroup>
        <NavigationItemGroup hideForMobile bottom>
          <NavigationItem
            label={'Log out'}
            iconName={'logout'}
            onClick={() => toast.success('Logged out')}
          />
        </NavigationItemGroup>
      </Navigation>
    ) : (
      <Navigation header={primaryLabelMap[selected].name} secondary>
        <NavigationItemGroup title={primaryLabelMap[selected].title}>
          {primaryLabelMap[selected].secondaryLabels.map((label) => (
            <NavigationItem
              label={label}
              key={label}
              onClick={() => handleSecondClick(label)}
              selected={label === selectedSecond}
            />
          ))}
        </NavigationItemGroup>
      </Navigation>
    );
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <ToastContainer />
      <PrimaryNavigation>
        {PrimaryLabels.map((label) => (
          <PrimaryNavigationItem
            label={label.name}
            key={label.key}
            selected={label.key === selected}
            iconName={label.icon as IconName}
            onClick={() => handleClick(label.key)}
          />
        ))
          .concat(
            <PrimaryNavigationAvatar
              label={'My Account'}
              key={'account'}
              selected={selected === 'account'}
              bottom
              image={''}
              onClick={() => handleClick('account')}
              divider
            />
          )
          .concat(
            <PrimaryNavigationItem
              label={'Log out'}
              key={'logout'}
              iconName={'logout'}
              onClick={() => toast.success('Logged out')}
              bottom
              hideInDesktop
            />
          )}
      </PrimaryNavigation>
      {renderSecondNavigation()}
    </div>
  );
};
TwoLayerNavigationStory.storyName = 'Primary and Secondary Navigation';
