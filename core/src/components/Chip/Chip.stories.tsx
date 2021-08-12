import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Chip, makeStyles, useTheme } from '../..';

import { COLORS } from './styles';

export default {
  title: 'Components/Chip',
  component: Chip,
  decorators: [withKnobs],
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

export const ChipStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}>
      {COLORS.map((color) => (
        <div key={color} style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Chip className={classes.root} label={'Basic'} color={color} />
          <Chip className={classes.root} label={'Disabled'} color={color} disabled />
          <Chip className={classes.root} label={'Clickable'} onClick={() => alert(`onClick ${color}`)} color={color} />
          <Chip className={classes.root} label={'Selected'} selected color={color} />
        </div>
      ))}
    </div>
  );
};
ChipStorySBS.storyName = 'Overview';
