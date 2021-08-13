import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Icon, Typography, useTheme } from '../..';
import { SIZES } from '../../types';

import { IconName } from './Icon';
import { icons, Svg } from './Icons';

const icons24 = Object.entries(icons).filter(([, value]) => value.size === 24);
const icons40 = Object.entries(icons).filter(([, value]) => value.size === 40);
const icons72 = Object.entries(icons).filter(([, value]) => value.size === 72);

export default {
  title: 'Assets/Icon',
  component: Icon,
  decorators: [withKnobs]
};

const allIcons: { icons: [string, Svg][]; title: string }[] = [
  { icons: icons24, title: '24x24 px' },
  { icons: icons40, title: '40x40 px' },
  { icons: icons72, title: '72x72 px' }
];

export const IconStory = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        flexDirection: 'row',
        height: '1024px',
        width: '640px'
      }}
    >
      {allIcons.map((iconList) => (
        <div key={iconList.title} style={{ padding: '8px' }}>
          <Typography>{iconList.title}</Typography>
          {iconList.icons.map(([key]) => (
            <div key={key} style={{ margin: 4 }}>
              <Typography
                align={'left'}
                style={{ flex: 1 }}
                variant={'c1'}
                color={'hint'}
              >
                {key}
              </Typography>
              <div
                style={{ display: 'flex', alignItems: 'center', padding: 8 }}
              >
                {SIZES.map((size) => (
                  <Icon
                    key={`${key}-${size}`}
                    style={{ margin: 4 }}
                    name={key as IconName}
                    size={size}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
IconStory.storyName = 'Overview';
