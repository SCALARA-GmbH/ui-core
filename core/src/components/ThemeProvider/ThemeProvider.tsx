import DateFnsUtils from '@date-io/date-fns';
import { PaletteType } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import deLocale from 'date-fns/locale/de';
import * as React from 'react';

import ScalaraTheme from './themes/scalara-theme';
import './font/index.css';

export interface ThemeProps {
  children?: React.ReactNode;
  type?: PaletteType;
}

const ThemeProvider: React.FunctionComponent<ThemeProps> = ({
  children,
  type = 'light'
}) => {
  const getTheme = React.useCallback(() => ScalaraTheme(type), [type]);

  return (
    <MuiPickersUtilsProvider locale={deLocale} utils={DateFnsUtils}>
      <MuiThemeProvider theme={getTheme()}>{children}</MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default ThemeProvider;
