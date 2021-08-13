import * as React from 'react';

import { Typography } from '../../index';

import { CssBaseline } from './CssBaseline';

export default {
  title: 'Basics/CssBaseline',
  component: CssBaseline
};

export const CssBaselineStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <div>
        <Typography>This is the baseline reset</Typography>
        <CssBaseline />
      </div>
    </div>
  );
};
CssBaselineStory.storyName = 'Overview';
