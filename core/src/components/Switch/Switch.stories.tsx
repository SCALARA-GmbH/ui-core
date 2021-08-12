import * as React from 'react';

import { Grid, Switch, useTheme } from '../..';

export default {
  title: 'Elements/Controls/Switch',
  component: Switch,
};

export const SwitchStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Grid xs={2} style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}>
      <Switch />
      <Switch defaultChecked />
      <Switch label={'Label'} />
      <Switch defaultChecked label={'Label'} />
      <Switch iconName={'information'} />
      <Switch defaultChecked iconName={'information'} />
      <Switch iconName={'information'} label={'Label'} />
      <Switch defaultChecked iconName={'information'} label={'Label'} />
    </Grid>
  );
};
SwitchStorySBS.storyName = 'Overview';
