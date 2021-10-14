import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Typography } from '../..';

import Frame from './Frame';

export default {
  title: 'Basics/Frame',
  component: Frame,
  decorators: [withKnobs],
};

export const FrameStory = (): JSX.Element => (
  <Frame
    disableGutters={boolean('DisableGutters', false)}
    orientation={select(
      'Orientation',
      ['horizontal', 'vertical'],
      'horizontal'
    )}
  >
    <Typography gutterBottom multiline>
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
      urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
      urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.
    </Typography>

    <Typography gutterBottom multiline>
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
      urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec.
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
      urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec.
    </Typography>

    <Typography gutterBottom multiline>
      {'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis \n' +
        'iaculis nulla iaculis vitae. Donec. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna.' +
        '\n Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec.'}
    </Typography>
  </Frame>
);
FrameStory.storyName = 'Overview';
