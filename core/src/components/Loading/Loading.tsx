import { CircularProgress } from '@mui/material';
import * as React from 'react';

const Loading: React.FunctionComponent = () => (
  <CircularProgress color={'primary'} />
);

export default React.memo(Loading);
