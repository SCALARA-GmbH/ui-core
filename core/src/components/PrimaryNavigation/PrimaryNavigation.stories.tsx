import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { PrimaryNavigation, useTheme } from '../..';

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
