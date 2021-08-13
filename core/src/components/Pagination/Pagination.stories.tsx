import * as React from 'react';

import { Grid, Pagination } from '../..';

export default {
  title: 'Components/Pagination',
  component: Pagination
};

export const PaginationStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <Grid xs={1}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Grid>
    </div>
  );
};
PaginationStory.storyName = 'Overview';

export const PaginationOutlinedStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <Grid xs={1}>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
      </Grid>
    </div>
  );
};
PaginationOutlinedStory.storyName = 'Outlined';

export const PaginationRoundedStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <Grid xs={1}>
        <Pagination count={10} shape="rounded" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Grid>
    </div>
  );
};
PaginationRoundedStory.storyName = 'Rounded';

export const PaginationSizesStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <Grid xs={1}>
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </Grid>
    </div>
  );
};
PaginationSizesStory.storyName = 'Sizes';

export const PaginationButtonsStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <Grid xs={1}>
        <Pagination count={10} showFirstButton showLastButton />
        <Pagination count={10} hidePrevButton hideNextButton />
      </Grid>
    </div>
  );
};
PaginationButtonsStory.storyName = 'Hide Buttons';

export const PaginationRangeStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <Grid xs={1}>
        <Pagination count={11} defaultPage={6} siblingCount={0} />
        <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
        <Pagination
          count={11}
          defaultPage={6}
          siblingCount={0}
          boundaryCount={2}
        />
        <Pagination count={11} defaultPage={6} boundaryCount={2} />
      </Grid>
    </div>
  );
};
PaginationRangeStory.storyName = 'Range';
