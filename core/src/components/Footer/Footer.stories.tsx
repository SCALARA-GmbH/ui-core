import { withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Footer, useTheme } from '../..';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [withKnobs, withActions]
};

export const FooterOverviewVS = (): JSX.Element => {
  const copyright = `${new Date().getUTCFullYear()} SCALARA`;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Footer copyright={copyright}>
        <a href="/legal/imprint">imprint</a>
        <a href="/legal/privacy">privacy</a>
      </Footer>
    </div>
  );
};
FooterOverviewVS.storyName = 'Overview';
