import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { PaletteMode } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import deLocale from 'date-fns/locale/de';
import * as React from 'react';

import ScalaraTheme from './themes/scalara-theme';

import './font/index.css';

export interface ThemeProps {
  children?: React.ReactNode;
  type?: PaletteMode;
}

const ThemeProvider: React.FunctionComponent<ThemeProps> = ({
  children,
  type = 'light',
}) => {
  const getTheme = React.useCallback(() => ScalaraTheme(type), [type]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
      <MuiThemeProvider theme={getTheme()}>{children}</MuiThemeProvider>
    </LocalizationProvider>
  );
};

export default ThemeProvider;
