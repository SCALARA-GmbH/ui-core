import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { useTheme } from '../..';

import IconBubble from './IconBubble';

export default {
  title: 'Assets/IconBubble',
  component: IconBubble,
  decorators: [withKnobs]
};

export const IconBubbleStory = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        flexDirection: 'row',
        height: '1024px',
        width: '640px'
      }}
    >
      <IconBubble name={'unlock-accounts'} />
    </div>
  );
};
IconBubbleStory.storyName = 'Overview';
