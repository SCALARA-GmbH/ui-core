import { select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Grid, Card } from '../..';
import { Hierarchy, Variant } from '../Button/types';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [withKnobs],
};

export const CardStory = (): JSX.Element => (
  <Grid xs={1} sm={2} style={{ padding: 16 }}>
    {['outlined', 'filled'].map((variant: Variant) =>
      ['primary', 'secondary'].map((hierarchy: Hierarchy) => (
        <Card
          key={`${variant}-${hierarchy}`}
          title={'Lorem ipsum'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
          img={'http://lorempixel.com/400/200/'}
          label={'Lorem'}
          onClick={() => alert('you clicked me')}
          hierarchy={hierarchy}
          variant={variant}
        />
      )),
    )}
  </Grid>
);
CardStory.storyName = 'Overview';

export const LabStory = (): JSX.Element => (
  <Card
    hierarchy={select('Hierarchy', ['normal', 'primary', 'secondary', 'error'], 'normal')}
    variant={select('Variant', ['filled', 'outlined'], 'outlined')}
    label={text('Button', 'Lorem')}
    title={text('Title', 'Lorem ipsum')}
    text={text(
      'Text',
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    )}
    onClick={() => console.log('clicked')}
    img={text('Image', 'http://lorempixel.com/400/200/')}
  />
);
LabStory.storyName = 'Playground';
