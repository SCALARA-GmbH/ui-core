import { createStyles, makeStylesWithProps } from '../..';
import { getFontStyle } from '../Typography/styles';
import { TextColor } from '../Typography/types';

export const useStyles = makeStylesWithProps<{
  color: TextColor;
  disabled: boolean;
}>(
  (theme) =>
    createStyles({
      root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: theme.spacing(11.5),
        marginBottom: theme.spacing(0.5)
      },
      paper: {
        border: `1px solid ${theme.colors.border.main}`,
        boxShadow: theme.shadows[0]
      },
      itemRoot: {
        cursor: 'pointer',
        padding: 0
      },
      item: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(0, 3),
        minHeight: theme.spacing(7),
        backgroundColor: theme.colors.background.primary,
        '&:hover': {
          backgroundColor: theme.colors.neutral['6']
        }
      },
      selected: {
        backgroundColor: theme.colors.neutral['6']
      },
      list: {
        padding: 0
      },
      disabled: {
        pointerEvents: 'none'
      },
      input: {
        ...getFontStyle('c3'),
        padding: theme.spacing(2, 2, 2, 2),
        transition: theme.transitions.create('background-color'),
        borderRadius: 0,
        backgroundColor: ({ disabled }) =>
          disabled
            ? theme.colors.background.disabled
            : theme.colors.neutral['6'],
        color: ({ disabled }) =>
          disabled ? theme.colors.disabled : theme.colors.text.main,
        '&:hover': {
          backgroundColor: theme.colors.neutral['5']
        },
        '&:focus': {
          backgroundColor: theme.colors.neutral['6']
        }
      },
      error: {
        boxShadow: `0px 0px 0px 2px ${theme.colors.error.main} inset`,
        borderRadius: 0,
        '&:invalid': {
          boxShadow: `0px 0px 0px 2px ${theme.colors.error.main} inset`,
          borderRadius: 0
        }
      },
      label: {
        ...getFontStyle('c4'),
        color: theme.colors.text.label,
        marginBottom: theme.spacing(0.5)
      },
      bottomText: {
        minHeight: 18
      },
      optionImage: {
        paddingRight: theme.spacing(1)
      }
    }),
  { name: 'SCA__Select' }
);
