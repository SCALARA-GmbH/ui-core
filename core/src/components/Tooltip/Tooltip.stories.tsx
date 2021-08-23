import * as React from 'react';

import { Typography } from '../../index';
import { useTheme } from '../ThemeProvider/styles';

import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip
};

const ForwardRefTypography = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>((props, ref) => (
  <div ref={ref}>
    <Typography>{props.children}</Typography>
  </div>
));

export const TooltipStory = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.colors.background.primary, padding: 16 }}
    >
      <Tooltip title={'you hovered'}>
        <Typography>hover over me</Typography>
      </Tooltip>
    </div>
  );
};
TooltipStory.storyName = 'Overview';
