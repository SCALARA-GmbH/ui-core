import * as React from 'react';

import { Grid, LinearProgress, useTheme } from '../..';

export default {
  title: 'Basics/LinearProgress',
  component: LinearProgress,
};

export const LinearProgressStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Grid xs={1} style={{ backgroundColor: theme.colors.background.main, padding: '16px', width: 200 }}>
      <LinearProgress variant={'indeterminate'} />
      <LinearProgress variant={'query'} />
      <LinearProgress variant={'buffer'} value={progress} valueBuffer={30} />
      <LinearProgress variant={'determinate'} value={progress} />
    </Grid>
  );
};
LinearProgressStorySBS.storyName = 'Overview';
