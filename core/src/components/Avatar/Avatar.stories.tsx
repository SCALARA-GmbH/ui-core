import { withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { useTheme } from '../..';
import { SIZES } from '../../types';

import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [withKnobs, withActions]
};

export const AvatarOverviewSBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200,
          padding: 8
        }}
      >
        {SIZES.map((size) => (
          <Avatar
            registered
            image={'elmar.jpeg'}
            key={size}
            size={size}
            editable
            onClick={() => console.log('onClick')}
            tooltip={'You can click me'}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200,
          padding: 8
        }}
      >
        {SIZES.map((size) => (
          <Avatar
            image={'armin.png'}
            key={size}
            size={size}
            editable
            onClick={() => console.log('onClick')}
            tooltip={'You can click me'}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200,
          padding: 8
        }}
      >
        {SIZES.map((size) => (
          <Avatar
            key={size}
            size={size}
            editable
            onClick={() => console.log('onClick')}
            tooltip={'You can click me'}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200,
          padding: 8
        }}
      >
        {SIZES.map((size) => (
          <Avatar
            key={size}
            size={size}
            editable
            onClick={() => console.log('onClick')}
            tooltip={'You can click me'}
            registered
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200,
          padding: 8
        }}
      >
        {SIZES.map((size) => (
          <Avatar
            key={size}
            size={size}
            type="company"
            editable
            onClick={() => console.log('onClick')}
            tooltip={'You can click me'}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200,
          padding: 8
        }}
      >
        {SIZES.map((size) => (
          <Avatar
            key={size}
            size={size}
            type="company"
            editable
            onClick={() => console.log('onClick')}
            tooltip={'You can click me'}
            registered
          />
        ))}
      </div>
    </div>
  );
};
AvatarOverviewSBS.storyName = 'Overview';

export const AvatarEditOverview = (): JSX.Element => {
  return (
    <Avatar
      editable
      onClick={() => console.log('onClick')}
      tooltip={'You can click me'}
      size={'large'}
      type="company"
    />
  );
};
AvatarEditOverview.storyName = 'Editable';

export const AvatarRegisteredOverview = (): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: 8
      }}
    >
      {SIZES.map((size) => (
        <Avatar
          key={size}
          size={size}
          registered
          type="person"
          image={
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          }
        />
      ))}
    </div>
  );
};
AvatarRegisteredOverview.storyName = 'Registered';
