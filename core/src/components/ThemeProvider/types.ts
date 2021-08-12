import { PaletteType, Theme as MuiTheme } from '@material-ui/core';
import * as React from 'react';

export type Color = React.CSSProperties['color'];

export interface ColorPalette {
  '50': Color;
  '75': Color;
  default: Color;
}

export interface NeutralColorPalette {
  0: Color;
  1: Color;
  2: Color;
  3: Color;
  4: Color;
  5: Color;
  6: Color;
  7: Color;
  F: Color;
}

export interface Colors {
  primary: ColorPalette;
  secondary: ColorPalette;
  tertiary: ColorPalette;
  destructive: ColorPalette;
  optionalInstruction: ColorPalette;
  requiredInstruction: ColorPalette;
  neutral: NeutralColorPalette;
  background: {
    primary: Color;
    secondary: Color;
    disabled: Color;
    hover: Color;
  };
  border: {
    main: Color;
  };
  text: {
    main: Color;
    label: Color;
    altLabel: Color;
    subtitle: Color;
  };
  disabled: Color;
  shadow: {
    main: Color;
  };
  error: {
    main: Color;
  };
  success: {
    main: Color;
  };
  warning: {
    main: Color;
  };
}

export interface Theme extends MuiTheme {
  colors: Colors;
  type: PaletteType;
}
