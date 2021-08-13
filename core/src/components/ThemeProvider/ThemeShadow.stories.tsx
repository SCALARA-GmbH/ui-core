import * as React from 'react';

import ShadowDemo from './themes/ShadowDemo';

export default {
  title: 'Basics/Shadow'
};

export const ShadowStorySBS: React.FunctionComponent & {
  storyName: string;
} = () => <ShadowDemo />;
ShadowStorySBS.storyName = 'Overview';
