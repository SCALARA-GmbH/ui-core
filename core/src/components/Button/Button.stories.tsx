import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button, Typography, useTheme } from '../..';
import Grid from '../Grid';
import useGridItemClass from '../GridItemHook';

import { Hierarchies, Variants } from './types';

export default {
  title: 'Elements/Controls/Button',
  component: Button,
  decorators: [withKnobs]
};

export const ButtonStoryVS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        display: 'flex',
        padding: 8
      }}
    >
      {Hierarchies.map((hierarchy) => (
        <div
          key={hierarchy}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 16
          }}
        >
          <Typography
            align={'center'}
            style={{ minHeight: '32px', alignSelf: 'center' }}
            variant={'c4'}
          >
            contained
          </Typography>
          <Typography
            align={'center'}
            style={{ minHeight: '32px', alignSelf: 'center' }}
            variant={'c4'}
          >
            {hierarchy}
          </Typography>
          <Button
            ariaLabel={'This is a contained button'}
            style={{ margin: 8 }}
            label={'Button'}
            variant={'contained'}
            hierarchy={hierarchy}
          />
          <Button
            style={{ margin: 8 }}
            label={'Button'}
            variant={'contained'}
            disabled
          />
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 16
        }}
      >
        <Typography
          style={{ minHeight: '64px', alignSelf: 'center' }}
          variant={'c4'}
        >
          outlined
        </Typography>

        <Button
          ariaLabel={'This is an outline button'}
          style={{ margin: 8 }}
          label={'Button'}
          variant={'outlined'}
          hierarchy={'primary'}
        />
        <Button
          style={{ margin: 8 }}
          label={'Button'}
          variant={'outlined'}
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 16
        }}
      >
        <Typography
          style={{ minHeight: '64px', alignSelf: 'center' }}
          variant={'c4'}
        >
          text
        </Typography>

        <Button
          ariaLabel={'This is a text button'}
          style={{ margin: 8 }}
          label={'Button'}
          variant={'text'}
          hierarchy={'primary'}
        />
        <Button
          style={{ margin: 8 }}
          label={'Button'}
          variant={'text'}
          disabled
        />
      </div>
    </div>
  );
};
ButtonStoryVS.storyName = 'Overview';

export const FullWidthStory = (): JSX.Element => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Button
      style={{ margin: 4 }}
      label={'Small'}
      variant={'outlined'}
      fullWidth
    />
    <Button style={{ margin: 4 }} label={'Small'} variant={'contained'} />
  </div>
);
FullWidthStory.storyName = 'FullWidth';

export const GridStory = (): JSX.Element => {
  const classGridItem = useGridItemClass({ xs: { start: '2', end: 'span 7' } });
  return (
    <Grid xs={12} style={{ margin: 4 }}>
      <Button
        style={{ margin: 4 }}
        className={classGridItem}
        variant={'contained'}
        label={'Button In Grid'}
      />
      <Button
        style={{ margin: 4 }}
        className={classGridItem}
        variant={'contained'}
        label={'Button In Grid fullWidth'}
        fullWidth
      />
    </Grid>
  );
};
GridStory.storyName = 'In Grid';

export const LabStory = (): JSX.Element => (
  <Button
    hierarchy={select('Hierarchy', Hierarchies, 'primary')}
    variant={select('Variant', Variants, 'contained')}
    label={text('Text', 'Button')}
    disabled={boolean('Disabled', false)}
  />
);
LabStory.storyName = 'Playground';
