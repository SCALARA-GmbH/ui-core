import { useTheme as muiUseTheme } from '@mui/material/styles';
import muiMakeStyles from '@mui/styles/makeStyles';
import { Styles, WithStylesOptions } from '@mui/styles/withStyles';
import { DistributiveOmit } from '@mui/types';

import { Theme } from './types';

export const makeStyles = muiMakeStyles;

export const makeStylesWithProps = <
  Props extends Record<string, unknown>,
  ClassKey extends string = string
>(
  style: Styles<Theme, Props, ClassKey>,
  options?: DistributiveOmit<WithStylesOptions<Theme>, 'withTheme'>
): ((props: Props) => Record<ClassKey, string>) =>
  muiMakeStyles<Theme, Props, ClassKey>(style, options);

export const useTheme = <T = Theme>(): T => muiUseTheme<T>();
