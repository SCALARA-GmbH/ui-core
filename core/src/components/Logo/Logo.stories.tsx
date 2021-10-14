import * as React from 'react';

import { Logo, makeStyles, useTheme } from '../..';

export default {
  title: 'Elements/Logo',
  component: Logo,
};

const useStyles = makeStyles(
  ({ spacing }) => ({
    padding: {
      padding: spacing(1),
    },
  }),
  { name: 'SCA__LogoStory' }
);

export const LogoStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Logo className={classes.padding} />
      <Logo text className={classes.padding} />
    </div>
  );
};
LogoStorySBS.storyName = 'Overview';
