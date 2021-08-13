import * as React from 'react';

import { makeStyles, Theme, Typography, useTheme } from '../../..';

const useStyles = makeStyles(({ spacing, shadows }: Theme) => ({
  root: {
    display: 'flex',
    padding: spacing(3)
  },
  shadow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 125,
    width: 125,
    margin: spacing(4),
    boxShadow: shadows[0]
  }
}));

const ShadowDemo: React.FunctionComponent = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <div className={classes.root}>
        <div className={classes.shadow}>
          <Typography>Shadow</Typography>
        </div>
      </div>
    </div>
  );
};

export default ShadowDemo;
