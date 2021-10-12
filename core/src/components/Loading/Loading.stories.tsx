import * as React from 'react';

import { Loading, useTheme } from '../..';

export default {
  title: 'Basics/Loading',
  component: Loading,
};

export const LoadingStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.colors.background.main, padding: '16px' }}
    >
      <Loading />
    </div>
  );
};
LoadingStorySBS.storyName = 'Overview';
