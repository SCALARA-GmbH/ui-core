import { Tooltip as MuiTooltip } from '@material-ui/core';
import { Spacing } from '@material-ui/core/styles/createSpacing';
import { Shadows } from '@material-ui/core/styles/shadows';
import * as React from 'react';

import { makeStyles } from '../ThemeProvider/styles';
import { Color, Colors } from '../ThemeProvider/types';
import { getFontStyle } from '../Typography/styles';

export const getTooltipStyle = ({
  spacing,
  colors,
  shadows
}: {
  spacing: Spacing;
  colors: Colors;
  shadows: Shadows;
}): {
  backgroundColor: Color;
  color: Color;
  boxShadow: string;
  borderTopRightRadius: number;
  borderBottomRightRadius: number;
  borderTopLeftRadius: number;
  borderBottomLeftRadius: number;
  padding: string;
  fontFamily: 'Open Sans';
  fontSize: number;
  fontWeight: number | 'normal';
  lineHeight: string;
} => ({
  backgroundColor: colors.neutral['1'],
  color: colors.neutral['6'],
  boxShadow: shadows[1],
  borderTopRightRadius: spacing(1),
  borderBottomRightRadius: spacing(1),
  borderTopLeftRadius: spacing(1),
  borderBottomLeftRadius: spacing(0),
  padding: spacing(1, 2),
  ...getFontStyle('c2')
});

const useStyles = makeStyles((theme) => ({
  tooltip: {
    ...getTooltipStyle(theme)
  }
}));

interface Props {
  className?: string;
  children: React.ReactElement;
  title: string;
}

const Tooltip: React.FunctionComponent<Props> = ({
  className,
  children,
  title
}) => {
  const classes = useStyles();
  return (
    <MuiTooltip
      className={className}
      classes={classes}
      title={title}
      placement="right-start"
    >
      <span>{children}</span>
    </MuiTooltip>
  );
};

export default Tooltip;
