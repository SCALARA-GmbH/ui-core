import { createMuiTheme, fade, PaletteType } from '@material-ui/core';
import shadows, { Shadows } from '@material-ui/core/styles/shadows';

import { Colors, Theme, Color } from '../types';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: Colors;
    type: PaletteType;
  }
  interface ThemeOptions {
    colors: Colors;
    type: PaletteType;
  }
}

declare module '@material-ui/core/styles/createMixins' {
  export interface Mixins {
    primaryNavigationDesktopWidth: string;
    primaryNavigationMobileHeight: string;
  }
}

declare module '@material-ui/core/styles/zIndex' {
  export interface ZIndex {
    toast: number;
    primaryNavigation: number;
    secondaryNavigation: number;
  }
}

const generateShadows = (...colors: Color[]): Shadows => {
  const scalaraShadows = new Array(shadows.length).fill(
    `0px 20px 30px 0px ${fade(colors[0] as string, 0.12)}`
  );

  scalaraShadows[1] = `0px 0px 0px 7px ${fade(colors[1] as string, 0.15)}`;

  scalaraShadows[2] = `0px 0px 0px 2px ${colors[2]} inset`;

  return scalaraShadows as Shadows;
};

const theme = (type: PaletteType): Theme => {
  let colors: Colors = {
    primary: {
      default: '#000000',
      '75': '#3F4041',
      '50': '#77797A'
    },
    secondary: {
      default: '#1FB990',
      '75': '#3DCCA6',
      '50': '#E5F8F3'
    },
    tertiary: {
      default: '#FFA748',
      '75': '#FCBE7C',
      '50': '#FFF3E6'
    },
    destructive: {
      default: '#E41030',
      '75': '#F56B80',
      '50': '#FCE8EB'
    },
    requiredInstruction: {
      default: '#5D22D3',
      '75': '#8967CE',
      '50': '#F0EAFF'
    },
    optionalInstruction: {
      default: '#0852FA',
      '75': '#6B97FF',
      '50': '#E8F3FF'
    },
    neutral: {
      0: '#000000',
      1: '#202124',
      2: '#3F4041',
      3: '#77797A',
      4: '#A9ACAD',
      5: '#E5E7E9',
      6: '#F4F6F7',
      7: '#FAFCFD',
      F: '#FFFFFF'
    },
    icon: {
      navigation: '#A9ACAD',
      control: '#77797A'
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#000000',
      disabled: '#FAFCFD',
      hover: '#F4F6F7'
    },
    border: {
      main: '#E5E7E9'
    },
    shadow: {
      main: '#202124'
    },
    disabled: '#A9ACAD',
    text: {
      main: '#202124',
      label: '#77797A',
      subtitle: '#3F4041'
    },
    error: {
      main: '#E41030'
    },
    success: {
      main: '#1FB990'
    },
    warning: {
      main: '#5D22D3'
    }
  };

  if (type === 'dark') {
    colors = {
      ...colors,
      neutral: {
        0: '#000000',
        7: '#202124',
        6: '#3F4041',
        5: '#77797A',
        4: '#A9ACAD',
        3: '#E5E7E9',
        2: '#F4F6F7',
        1: '#FAFCFD',
        F: '#FFFFFF'
      },
      primary: {
        default: '#000000',
        '75': '#464748',
        '50': '#8F9192'
      },
      icon: {
        navigation: '#A9ACAD',
        control: '#E5E7E9'
      },
      text: {
        main: '#FFFFFF',
        label: '#A9ACAD',
        subtitle: '#F4F6F7'
      },
      background: {
        primary: '#202124',
        secondary: '#FFFFFF',
        disabled: '#2b2d2d',
        hover: '#F4F6F7'
      },
      shadow: {
        main: '#8F9192'
      }
    };
  }

  return createMuiTheme({
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 728,
        md: 960,
        lg: 1024,
        xl: 1440
      }
    },
    colors,
    shadows: generateShadows(
      colors.shadow.main,
      colors.secondary.default,
      colors.error.main
    ),
    palette: {
      background: {
        default: '#FFFFFF'
      },
      primary: {
        main: colors.primary.default as string
      },
      secondary: {
        main: colors.secondary.default as string
      }
    },
    type,
    zIndex: {
      toast: 9999,
      primaryNavigation: 9998,
      secondaryNavigation: 9997
    },
    mixins: {
      primaryNavigationDesktopWidth: '56px',
      primaryNavigationMobileHeight: '48px'
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            boxSizing: 'content-box'
          }
        }
      },
      MuiInputBase: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color'
          }
        }
      }
    }
  });
};

export default theme;
