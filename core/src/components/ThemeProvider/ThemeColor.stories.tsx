import * as React from 'react';

import ThemeDemo from './themes/ThemeDemo';

export default {
  title: 'Basics/Color',
};

export const ColorStoryVS: React.FunctionComponent & {
  storyName: string;
} = () => <ThemeDemo />;
ColorStoryVS.storyName = 'Overview';
