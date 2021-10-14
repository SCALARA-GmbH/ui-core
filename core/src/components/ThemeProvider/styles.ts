import {
  makeStyles as muiMakeStyles,
  useTheme as muiUseTheme,
} from '@material-ui/core/styles';
import { Styles, WithStylesOptions } from '@material-ui/styles/withStyles';
import { Omit } from '@material-ui/types';

import { Theme } from './types';

export const makeStyles = <ClassKey extends string = string>(
  style: Styles<Theme, Record<string, unknown>, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (() => Record<ClassKey, string>) =>
  muiMakeStyles<Theme, ClassKey>(style, options);

export const makeStylesWithProps = <
  Props extends Record<string, unknown>,
  ClassKey extends string = string
>(
  style: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): ((props: Props) => Record<ClassKey, string>) =>
  muiMakeStyles<Theme, Props, ClassKey>(style, options);

export const useTheme = <T = Theme>(): T => muiUseTheme<T>();
