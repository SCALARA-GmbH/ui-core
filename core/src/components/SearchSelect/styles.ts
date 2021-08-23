import { fade } from '@material-ui/core';

import { createStyles, makeStylesWithProps } from '../..';
import { getFontStyle } from '../Typography/styles';

export const useStyles = makeStylesWithProps<{ maxHeight: string }>(
  (theme) =>
    createStyles({
      root: {
        position: 'relative'
      },
      area: {
        maxHeight: ({ maxHeight }) => maxHeight,
        overflow: 'auto',
        borderTop: 'none',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 999999
      },
      list: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(3)
      },
      header: {
        height: theme.spacing(10),
        padding: theme.spacing(0, 6),
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none'
      },
      selected: {
        backgroundColor: theme.colors.neutral['6']
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: theme.spacing(8),
        padding: theme.spacing(0, 4, 0, 6),
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.colors.neutral['6']
        }
      },
      hidden: {
        display: 'none'
      },
      visible: {
        display: 'flex'
      },
      icon: {
        marginLeft: 'auto',
        paddingRight: theme.spacing(2.5)
      },
      label: {
        ...getFontStyle('c4'),
        color: theme.colors.text.label,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: '56px',
        paddingLeft: theme.spacing(6),
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: theme.colors.background.hover
        },
        '&:focus': {
          backgroundColor: theme.colors.background.hover
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.colors.secondary.default}`,
          outlineOffset: `1px`,
          boxShadow: `0px 0px 0px 7px ${fade(
            theme.colors.secondary.default as string,
            0.15
          )} `
        }
      },
      inputBase: {
        ...getFontStyle('c3'),
        height: 'auto',
        alignSelf: 'center',
        color: theme.colors.text.main,
        '&::placeholder': {
          color: theme.colors.neutral['3']
        },
        alignItems: 'center',
        padding: theme.spacing(2.125, 0, 2.125, 6)
      },
      input: {
        height: 'auto',
        backgroundColor: theme.colors.background.hover
      }
    }),
  { name: 'SCA__SearchSelect' }
);
