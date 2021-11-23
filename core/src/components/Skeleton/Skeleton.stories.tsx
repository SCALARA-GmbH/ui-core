import * as React from 'react';

import { Avatar, Skeleton, Typography } from '../..';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export const SkeletonStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
    </div>
  );
};
SkeletonStory.storyName = 'Overview';

export const SkeletonWrapperStory = (): JSX.Element => {
  return (
    <div style={{ padding: 16 }}>
      <div>
        <Skeleton>
          <Typography>Yes, I will be text someday</Typography>
        </Skeleton>
        <Skeleton>
          <Avatar />
        </Skeleton>
      </div>
    </div>
  );
};
SkeletonWrapperStory.storyName = 'Wrapper';
