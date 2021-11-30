import * as React from 'react';

import { useTheme } from '../ThemeProvider/styles';

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
      <Alert severity={'error'}>{loremIpsum}</Alert>
      <Alert severity={'info'}>{loremIpsum}</Alert>
      <Alert severity={'success'}>{loremIpsum}</Alert>
      <Alert severity={'warning'}>{loremIpsum}</Alert>
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
        {loremIpsum}
      </Alert>
      <Alert severity={'info'} title={'Info'}>
        {loremIpsum}
      </Alert>
      <Alert severity={'success'} title={'Success'}>
        {loremIpsum}
      </Alert>
      <Alert severity={'warning'} title={'Warning'}>
        {loremIpsum}
      </Alert>
    </div>
  );
};
WithTitle.storyName = 'With title';
