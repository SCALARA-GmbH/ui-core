import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from 'react';

import { Grid, Typography, useTheme } from '../../index';
import GridItem from '../GridItem';
import Switch from '../Switch';

import { getFontSize, getFontWeight } from './styles';
import {
  CONTENT_VARIANTS,
  TEXT_COLORS,
  TITLE_VARIANTS,
  VARIANTS
} from './types';
import { Wrap } from './Typography';

export default {
  title: 'Basics/Typography',
  component: Typography,
  decorators: [withKnobs]
};

export const TypographyStorySBS = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid
      xs={1}
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      {TITLE_VARIANTS.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant.toUpperCase()} Desktop {getFontSize(variant)}px{' '}
          {getFontWeight(variant)} weight. <br />
          With SCALARA you can concentrate on the essentials.
        </Typography>
      ))}
      {CONTENT_VARIANTS.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant.toUpperCase()} Desktop {getFontSize(variant)}px{' '}
          {getFontWeight(variant)} weight
          <br />
          The platform enables efficient, smooth and transparent communication
          between managers, owners, tenants and even service providers. With
          SCALARA you can concentrate on the essentials.{' '}
          <a href={'https://scalara.de/'} target="_blank" rel="noreferrer">
            SCALARA
          </a>{' '}
          Our highest requirement is to develop a technically correct and
          legally compliant software.
        </Typography>
      ))}
    </Grid>
  );
};
TypographyStorySBS.storyName = 'Overview';

export const TypographyDisabledStory = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid
      xs={1}
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      {TITLE_VARIANTS.map((v) => (
        <Typography key={v} disabled variant={v}>
          {v.toUpperCase()} Desktop {getFontSize(v)}px
        </Typography>
      ))}
      {CONTENT_VARIANTS.map((v) => (
        <Typography key={v} disabled variant={v}>
          {v.toUpperCase()} Desktop {getFontSize(v)}px
          <br />
          Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec{' '}
          <a
            href={'https://reactjs.org/docs/getting-started.html'}
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>{' '}
          tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
          vitae. Donec.
        </Typography>
      ))}
    </Grid>
  );
};
TypographyDisabledStory.storyName = 'Disabled';

export const TypographyUnderlinedStory = (): JSX.Element => {
  const theme = useTheme();
  const [underlined, setUnderlined] = useState(true);
  const [underlinedAnimated, setUnderlinedAnimated] = useState(false);

  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <Switch
        label={'underlined'}
        checked={underlined}
        onChange={(event) => setUnderlined(event.target.checked)}
      />
      <Switch
        label={'underlinedAnimated'}
        checked={underlinedAnimated}
        onChange={(event) => setUnderlinedAnimated(event.target.checked)}
      />
      <Grid xs={2} style={{ padding: 16 }}>
        {TEXT_COLORS.map((c) => (
          <GridItem key={c}>
            <Typography
              color={c}
              underlined={underlined}
              underlinedAnimated={underlinedAnimated}
            >
              {c}
            </Typography>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
TypographyUnderlinedStory.storyName = 'Underlined';

export const TypographyColorsStory = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Grid
      xs={2}
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      {TEXT_COLORS.map((c) => (
        <Typography key={c} color={c} gutterBottom>
          {c}
          <br />
          Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec
          tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
          vitae. Donec.
        </Typography>
      ))}
    </Grid>
  );
};
TypographyColorsStory.storyName = 'Colors';

export const LabStory = (): JSX.Element => (
  <div>
    <Typography
      align={select(
        'Align',
        ['inherit', 'left', 'center', 'right', 'justify'],
        'inherit'
      )}
      color={select('Color', TEXT_COLORS, 'initial')}
      variant={select('Variant', VARIANTS, 'c1')}
      fullWidth={boolean('FullWidth', false)}
      gutterBottom={boolean('GutterBottom', true)}
      underlined={boolean('Underlined', false)}
      wrap={select(
        'wrap',
        [Wrap.NO_WRAP, Wrap.PRESERVE_BREAK_LINES, Wrap.DEFAULT],
        Wrap.DEFAULT
      )}
    >
      {text(
        'Text',
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      )}
    </Typography>
  </div>
);
LabStory.storyName = 'Playground';
