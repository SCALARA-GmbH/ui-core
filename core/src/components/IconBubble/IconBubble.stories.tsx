import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { useTheme } from '../..';

import IconBubble, { Hierarchies } from './IconBubble';

export default {
  title: 'Assets/IconBubble',
  component: IconBubble,
  decorators: [withKnobs],
};

export const IconBubbleStory = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          backgroundColor: theme.colors.background.primary,
          display: 'flex',
          flexDirection: 'row',
          width: '1024px',
        }}
      >
        {Hierarchies.map((hierarchy) => (
          <IconBubble
            key={hierarchy}
            name={'unlock-accounts'}
            size={'large'}
            hierarchy={hierarchy}
          />
        ))}
      </div>
      <div
        style={{
          backgroundColor: theme.colors.background.primary,
          display: 'flex',
          flexDirection: 'row',
          width: '1024px',
        }}
      >
        {Hierarchies.map((hierarchy) => (
          <IconBubble
            key={hierarchy}
            name={'cashbox'}
            size={'medium'}
            hierarchy={hierarchy}
          />
        ))}
      </div>
      <div
        style={{
          backgroundColor: theme.colors.background.primary,
          display: 'flex',
          flexDirection: 'row',
          width: '1024px',
        }}
      >
        {Hierarchies.map((hierarchy) => (
          <IconBubble
            key={hierarchy}
            name={'delete'}
            size={'small'}
            hierarchy={hierarchy}
          />
        ))}
      </div>
    </>
  );
};
IconBubbleStory.storyName = 'Overview';
