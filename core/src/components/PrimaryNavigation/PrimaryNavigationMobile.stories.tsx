import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { useTheme } from '../..';

import PrimaryNavigationItem from './PrimaryNavigationItem';
import PrimaryNavigationMobile from './PrimaryNavigationMobile';

export default {
  title: 'Components/PrimaryNavigationMobile',
  component: PrimaryNavigationMobile,
  decorators: [withKnobs],
};

const Labels = [
  { key: 'real-estate', name: 'Real Estate' },
  { key: 'finance', name: 'Finances' },
  { key: 'communication', name: 'Communication' },
  { key: 'contacts', name: 'Contacts' },
] as const;

export const PrimaryNavigationMobileStory = (): JSX.Element => {
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
        width: '100%',
      }}
    >
      <PrimaryNavigationMobile
        LogoComponentProps={{ text: true, size: 'small' }}
      >
        {Labels.map((label) => (
          <PrimaryNavigationItem
            label={label.name}
            key={label.key}
            selected={label.key === selected}
            onClick={() => handleClick(label.key)}
            iconName={label.key}
          />
        ))}
      </PrimaryNavigationMobile>
    </div>
  );
};
PrimaryNavigationMobileStory.storyName = 'Overview';
