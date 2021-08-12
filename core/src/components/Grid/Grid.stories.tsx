import { Paper } from '@material-ui/core';
import { select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Grid, GridItem, Typography, useTheme } from '../..';
import useGridItemStyles from '../GridItemHook';

export default {
  title: 'Basics/Grid',
  component: Grid,
  decorators: [withKnobs],
};

export const GridStory = (): JSX.Element => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.colors.primary.default,
    border: `1px solid ${theme.colors.secondary.default}`,
    color: theme.colors.neutral.F,
    height: 64,
  };
  return (
    <Grid xs={5} justifyContent={'stretch'}>
      <GridItem xs={5}>
        <Typography style={style}>xs5</Typography>
      </GridItem>
      <GridItem xs={2}>
        <Typography style={style}>xs2</Typography>
      </GridItem>
      <GridItem xs={2}>
        <Typography style={style}>xs2</Typography>
      </GridItem>
      <GridItem xs={3}>
        <Typography style={style}>xs3</Typography>
      </GridItem>
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </Grid>
  );
};
GridStory.storyName = 'Overview';

export const GridStyleHookStory = (): JSX.Element => {
  const theme = useTheme();

  const xs2Class = useGridItemStyles({ xs: { start: 'span 2', end: 'auto' } });
  const xs3Class = useGridItemStyles({ xs: { start: 'span 3', end: 'auto' } });
  const xs5Class = useGridItemStyles({ xs: { start: 'span 5', end: 'auto' } });
  const style = {
    backgroundColor: theme.colors.primary.default,
    border: `1px solid ${theme.colors.secondary.default}`,
    color: theme.colors.neutral.F,
    height: 64,
  };

  return (
    <Grid xs={5} justifyContent={'stretch'}>
      <Typography style={style} className={xs5Class}>
        xs5
      </Typography>
      <Typography style={style} className={xs2Class}>
        xs2
      </Typography>
      <Typography style={style} className={xs2Class}>
        xs2
      </Typography>
      <Typography style={style} className={xs3Class}>
        xs3
      </Typography>
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </Grid>
  );
};
GridStyleHookStory.storyName = 'Hooks';

export const GridPlaygroundStory = (): JSX.Element => (
  <Grid
    alignContent={select(
      'AlignContent',
      ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'],
      'start',
    )}
    alignItems={select('AlignItems', ['start', 'end', 'center', 'stretch'], 'stretch')}
    justifyContent={select(
      'JustifyContent',
      ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'],
      'start',
    )}
    justifyItems={select('JustifyItems', ['start', 'end', 'center', 'stretch'], 'stretch')}
    style={{ backgroundColor: '#CCEAFF' }}
    xs={select('xs', ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined], 3)}
    sm={select('sm', ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined], undefined)}
    md={select('md', ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined], undefined)}
    lg={select('lg', ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined], undefined)}
    xl={select('xl', ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined], undefined)}
  >
    {[0, 1, 2, 3, 4, 5].map((value) => (
      <GridItem key={value} style={{ backgroundColor: '#99D4FF' }}>
        <Paper style={{ width: 160, height: 160 }}>Paper 160x160</Paper>
      </GridItem>
    ))}
  </Grid>
);
GridPlaygroundStory.storyName = 'Playground';
