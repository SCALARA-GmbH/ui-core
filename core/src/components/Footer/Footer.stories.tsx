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
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Footer>
        {`${String.fromCharCode(169)} ${new Date().getUTCFullYear()} SCALARA`}
        <a href="#">imprint</a>
        <a href="#">privacy</a>
      </Footer>
    </div>
  );
};
FooterOverviewVS.storyName = 'Overview';
