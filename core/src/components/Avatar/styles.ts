import { fade } from '@material-ui/core';

import { createStyles, makeStylesWithProps } from '../..';
import { Size } from '../../types';

const getSize = (size: Size): number => {
  switch (size) {
    case 'small':
      return 32;
    case 'medium':
      return 40;
    case 'large':
      return 96;
    default:
      return 40;
  }
};

export const useStyles = makeStylesWithProps<{
  size: Size;
  onClick?: () => void;
}>((theme) =>
  createStyles({
    root: {
      cursor: ({ onClick }) => (onClick ? 'pointer' : 'inherit'),
      background: theme.colors.background.primary,
      height: (props) => getSize(props.size),
      width: (props) => getSize(props.size)
    },
    badge: {
      backgroundColor: theme.colors.success.main,
      color: theme.colors.success.main,
      boxShadow: `0 0 0 2px ${fade(theme.palette.background.paper, 0.5)}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        content: '""'
      }
    },
    editOverlay: {
      cursor: ({ onClick }) => (onClick ? 'pointer' : 'inherit'),
      position: 'absolute',
      transition: 'opacity 0.2s',
      opacity: 0,
      width: 'calc(100% - 32px)',
      height: 'calc(100% - 32px)',
      margin: theme.spacing(2, 0, 0, 2),
      color: theme.colors.text.main,
      '&:hover': {
        opacity: ({ onClick }) => (onClick ? 1 : 0)
      }
    },
    icon: {
      width: '100%',
      height: '100%',
      paddingTop: theme.spacing(1),
      strokeWidth: ({ size }) => (size === 'large' ? 3 : 1.5)
    },
    iconOutline: {
      boxShadow: `0px 0px 0px 1.5px ${theme.colors.text.main} inset`
    }
  })
);
