import * as React from 'react';
import { useState } from 'react';

import { useTheme } from '../ThemeProvider/styles';

import Radio, { RadioOption } from './Radio';

export default {
  title: 'Elements/Controls/Radio',
  component: Radio,
};

export const RadioStory = (): JSX.Element => {
  const options: RadioOption[] = [
    { title: 'Pī', value: '0' },
    { title: 'Zuān', value: '1' },
    { title: 'Bēng', value: '2' },
    { title: 'Pào', value: '3' },
    { title: 'Héng', value: '4' },
  ];

  const theme = useTheme();
  const [value, setValue] = useState<string>('3');

  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}>
      <Radio onChange={(event, value) => setValue(value)} options={options} value={value} />
    </div>
  );
};
RadioStory.storyName = 'Overview';

export const RadioWithSubtitleStory = (): JSX.Element => {
  const lorem =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

  const options: RadioOption[] = [
    { title: 'The Shawshank Redemption', subtitle: lorem, value: '0' },
    { title: 'The Godfather', subtitle: lorem, value: '1' },
    { title: 'The Godfather: Part II', subtitle: lorem, value: '2' },
    { title: 'The Dark Knight', subtitle: lorem, value: '3' },
    { title: '12 Angry Men', subtitle: lorem, value: '4' },
  ];

  const theme = useTheme();
  const [value, setValue] = useState<string>('3');

  return (
    <div style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}>
      <Radio onChange={(event, value) => setValue(value)} options={options} value={value} />
    </div>
  );
};
RadioWithSubtitleStory.storyName = 'Subtitle';
