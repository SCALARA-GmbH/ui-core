import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';
import Typography from '../Typography';

interface Props {
  count: number;
}

const useStyles = makeStyles(
  ({ spacing }) => ({
    root: {
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      background: '#000000',
      position: 'relative',
      marginRight: spacing(2),
    },
    count: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#FFFFFF',
    },
  }),
  { name: 'CountIcon' }
);

const CountIcon: React.FunctionComponent<Props> = ({ count }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.count} align={'center'}>
        {count}
      </Typography>
    </div>
  );
};

export default CountIcon;
