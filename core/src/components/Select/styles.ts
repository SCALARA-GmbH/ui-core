import { fade } from '@material-ui/core';

import { createStyles, makeStylesWithProps, Theme } from '../..';
import { TextColor } from '../Typography/types';

export const getFrameColor = ({
  color,
  theme
}: {
  color?: TextColor;
  theme: Theme;
}): string | undefined => {
  switch (color) {
    case 'initial':
      return theme.colors.border.main;
    case 'primary':
      return theme.colors.primary.default;
    case 'secondary':
      return theme.colors.secondary.default;
    case 'error':
      return theme.colors.error.main;
    default:
      return color;
  }
};

export const getBackgroundColor = ({
  disabled,
  active,
  theme
}: {
  disabled?: boolean;
  active?: boolean;
  theme: Theme;
}): string | undefined => {
  if (disabled) {
    return theme.colors.background.disabled;
  } else if (active) {
    return theme.type === 'light' ? '#fff' : fade('#fff', 0.11);
  }
  return 'transparent';
};

export const useStyles = makeStylesWithProps<{
  color: TextColor;
  disabled: boolean;
}>((theme) =>
  createStyles({
    inputWrapper: {
      backgroundColor: ({ disabled }) =>
        getBackgroundColor({ disabled, theme, active: false }),
      borderRadius: 2,
      boxShadow: (props) =>
        `0px 0px 0px 1px ${getFrameColor({ color: props.color, theme })} inset`,
      display: 'flex',
      flexDirection: 'column',
      height: theme.spacing(7),
      marginBottom: theme.spacing(0.5),
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: ({ disabled }) =>
          getBackgroundColor({ disabled, theme, active: true })
      }
    },
    inputWrapperFilled: {
      backgroundColor: ({ disabled }) =>
        getBackgroundColor({ disabled, theme, active: true })
    },
    input: {
      flex: 1,
      padding: theme.spacing(0, 2),
      '&&': {
        alignItems: 'center',
        fontSize: '16px',
        lineHeight: '24px'
      }
    },
    inputBaseInput: {
      color: theme.colors.text.main,
      padding: '7px 0 11px 0',
      alignSelf: 'flex-end'
    },
    errorBaseInput: {
      boxShadow: `0px 0px 0px 1px ${theme.colors.error.main} inset`,
      borderRadius: 2
    },
    label: {
      '&&': {
        color: theme.colors.text.main,
        position: 'absolute',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2)
      }
    },
    labelElevated: {
      '&&': {
        marginTop: 7
      }
    },
    bottomText: {
      minHeight: 18
    },
    optionImage: {
      paddingRight: theme.spacing(1)
    }
  })
);
