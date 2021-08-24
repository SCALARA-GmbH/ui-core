import * as React from 'react';

import { Area } from '../..';

const PaperComponent: React.FunctionComponent = ({ children }) => (
  <Area border elevated>
    {children}
  </Area>
);

export default PaperComponent;
