import * as React from 'react';

import { Divider, useTheme } from '../..';

export default {
  title: 'Elements/Divider',
  component: Divider
};

export const DividerStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.main,
        display: 'flex'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 16,
          width: 200
        }}
      >
        <Divider orientation={'horizontal'} />
        <Divider orientation={'horizontal'} color={'primary'} />
        <Divider orientation={'horizontal'} color={'secondary'} />
        <Divider orientation={'horizontal'} color={'error'} />
        <Divider orientation={'horizontal'} color={'success'} />
      </div>
      <div
        style={{
          display: 'flex',
          padding: 16
        }}
      >
        <Divider orientation={'vertical'} />
        <Divider orientation={'vertical'} color={'primary'} />
        <Divider orientation={'vertical'} color={'secondary'} />
        <Divider orientation={'vertical'} color={'error'} />
        <Divider orientation={'vertical'} color={'success'} />
      </div>
    </div>
  );
};
DividerStorySBS.storyName = 'Overview';
