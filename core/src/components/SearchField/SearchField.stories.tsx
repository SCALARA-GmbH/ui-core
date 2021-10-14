import * as React from 'react';
import { useState } from 'react';

import { SearchField, Typography, useTheme } from '../..';

export default {
  title: 'Elements/Input/SearchField',
  component: SearchField,
};

export const SearchFieldStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const [value, setValue] = useState<string>('');
  return (
    <div style={{ backgroundColor: theme.colors.background.main, padding: 16 }}>
      <SearchField
        label={'Search'}
        placeholder={'lorem ipsum ...'}
        onChange={setValue}
      />
      <Typography>You current search is:</Typography>
      <Typography preserveHeight>{value}</Typography>
    </div>
  );
};
SearchFieldStorySBS.storyName = 'Overview';
