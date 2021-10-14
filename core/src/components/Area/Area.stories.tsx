import * as React from 'react';

import { Typography, useTheme } from '../..';

import Area from './Area';

export default {
  title: 'Basics/Area',
  component: Area,
};

export const AreaStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <Area style={{ padding: 16, margin: 16 }}>
        <Typography>Area</Typography>
      </Area>
      <Area style={{ padding: 16, margin: 16 }} elevated border>
        <Typography>Area with shadow and border</Typography>
      </Area>
      <Area style={{ padding: 16, margin: 16 }} hoverable border>
        <Typography>I will elevate on hover</Typography>
      </Area>
      <Area style={{ padding: 16, margin: 16 }} border>
        <Typography>I have a border and I dont elevate </Typography>
      </Area>
    </div>
  );
};
AreaStorySBS.storyName = 'Overview';
