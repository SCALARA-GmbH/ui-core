import * as React from 'react';

import { useTheme } from '../ThemeProvider/styles';
import Typography from '../Typography';

import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const AlertOverview = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <Alert severity={'error'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
      <Alert severity={'info'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
      <Alert severity={'success'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
      <Alert severity={'warning'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
    </div>
  );
};
AlertOverview.storyName = 'Overview';

export const WithTitle = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <Alert severity={'error'} title={'Error'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
      <Alert severity={'info'} title={'Info'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
      <Alert severity={'success'} title={'Success'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
      <Alert severity={'warning'} title={'Warning'}>
        <Typography variant={'c3'}>{loremIpsum}</Typography>
      </Alert>
    </div>
  );
};
WithTitle.storyName = 'With title';
