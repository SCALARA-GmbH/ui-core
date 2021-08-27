import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { PrimaryNavigationDesktop, useTheme } from '../..';

import PrimaryNavigationItem from './PrimaryNavigationItem';

export default {
  title: 'Components/PrimaryNavigationDesktop',
  component: PrimaryNavigationDesktop,
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
      <PrimaryNavigationDesktop>
        {Labels.map((label) => (
          <PrimaryNavigationItem
            label={label.name}
            key={label.key}
            onClick={() => handleClick(label.key)}
            iconName={label.key}
            selected={label.key === selected}
          />
        )).concat(
          <PrimaryNavigationItem
            bottom
            label={'My Account'}
            key={'account'}
            onClick={() => handleClick('account')}
            iconName={'person'}
            selected={selected === 'account'}
          />
        )}
      </PrimaryNavigationDesktop>
    </div>
  );
};
PrimaryNavigationStory.storyName = 'Overview';
