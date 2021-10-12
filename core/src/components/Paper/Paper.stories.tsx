import * as React from 'react';

import { Paper, Typography, useTheme } from '../..';

export default {
  title: 'Basics/Paper',
  component: Paper,
};

export const PaperStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <Paper style={{ padding: 16, margin: 16 }}>
        <Typography>I am a nice paper</Typography>
      </Paper>
      <Paper style={{ padding: 16, margin: 16 }} elevated>
        <Typography>I am elevated</Typography>
      </Paper>
      <Paper style={{ padding: 16, margin: 16 }} hoverable>
        <Typography>I will elevate on hover</Typography>
      </Paper>
    </div>
  );
};
PaperStorySBS.storyName = 'Overview';
