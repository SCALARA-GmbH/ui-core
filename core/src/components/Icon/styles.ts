import { createStyles } from '@material-ui/core';

import { makeStylesWithProps } from '../..';
import { Size } from '../../types';

import { SvgSize } from './Icons';

export const getSizeFactor = (size: Size): number => {
  switch (size) {
    case 'small':
      return 0.8;
    case 'medium':
      return 1.0;
    case 'large':
      return 1.25;
    default:
      return 1.0;
  }
};

export const useStyles = makeStylesWithProps<{
  size: Size;
  svgSize: SvgSize;
  color?: string;
}>(
  ({ colors }) =>
    createStyles({
      root: {
        height: ({ size, svgSize }) => getSizeFactor(size) * svgSize,
        width: ({ size, svgSize }) => getSizeFactor(size) * svgSize,
        overflow: 'hidden',
        color: ({ color }) => color ?? colors.text.main,
        fill: 'currentColor'
      }
    }),
  { name: 'SCA__Icon' }
);
