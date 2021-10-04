import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { IconButton, useTheme } from '../..';
import Grid from '../Grid';
import useGridItemClass from '../GridItemHook';

export default {
  title: 'Elements/Controls/IconButton',
  component: IconButton,
  decorators: [withKnobs]
};

export const IconButtonStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid green',
          boxSizing: 'border-box'
        }}
      >
        <IconButton
          label={'Button'}
          style={{ margin: 8 }}
          tooltip={'Tooltip'}
          iconSize={'medium'}
        />
        <IconButton
          label={'Button'}
          iconName={'error'}
          style={{ margin: 8 }}
          tooltip={'Tooltip'}
        />
        <IconButton
          iconName={'error'}
          style={{ margin: 8 }}
          tooltip={'Tooltip'}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          label={'Button'}
          style={{ margin: 8 }}
          tooltip={'Tooltip'}
          disabled
        />
        <IconButton
          label={'Button'}
          iconName={'error'}
          style={{ margin: 8 }}
          tooltip={'Tooltip'}
          disabled
        />
        <IconButton
          iconName={'error'}
          style={{ margin: 8 }}
          tooltip={'Tooltip'}
          disabled
        />
      </div>
    </div>
  );
};
IconButtonStorySBS.storyName = 'Overview';

export const GridStory = (): JSX.Element => {
  const classGridItem = useGridItemClass({ xs: { start: '2', end: 'span 7' } });
  return (
    <Grid xs={12} style={{ margin: 4 }}>
      <IconButton
        label={'Button'}
        iconName={'error'}
        style={{ margin: 8 }}
        tooltip={'Tooltip'}
        className={classGridItem}
      />
    </Grid>
  );
};
GridStory.storyName = 'In Grid';
