import { withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Footer, Typography } from '../..';

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
    </div>
  );
};
FooterOverviewVS.storyName = 'Overview';
