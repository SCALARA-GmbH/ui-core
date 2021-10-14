import { withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Footer, Typography } from '../..';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [withKnobs, withActions],
};

export const FooterOverviewVS = (): JSX.Element => {
  return (
    <Footer>
      <Typography align={'left'} variant={'c3'} style={{ flexGrow: 1 }}>
        {`${String.fromCharCode(169)} ${new Date().getUTCFullYear()} SCALARA`}
      </Typography>
      <Typography
        color={'primary'}
        align={'center'}
        linkColor={'clickable'}
        linkVariant={'c3'}
        variant={'c3'}
      >
        <a href="#">Imprint</a>
      </Typography>
      <Typography
        color={'primary'}
        align={'center'}
        linkColor={'clickable'}
        linkVariant={'c3'}
        variant={'c3'}
      >
        <a href="#">Privacy</a>
      </Typography>
    </Footer>
  );
};
FooterOverviewVS.storyName = 'Overview';
