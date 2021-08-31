import { fade } from '@material-ui/core';

import { makeStylesWithProps } from '../..';
import { Size } from '../../types';

const getSize = (size: Size): number => {
  switch (size) {
    case 'small':
      return 32;
    case 'medium':
      return 40;
    case 'large':
      return 122;
    default:
      return 40;
  }
};

export const useStyles = makeStylesWithProps<{
  size: Size;
  onClick?: () => void;
}>(
  (theme) => ({
    root: {
      cursor: ({ onClick }) => (onClick ? 'pointer' : 'inherit'),
      background: theme.colors.background.primary,
      height: (props) => getSize(props.size),
      width: (props) => getSize(props.size),
      '&:hover + $editOverlay': {
        opacity: ({ onClick }) => (onClick ? 1 : 0)
      }
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
      transition: theme.transitions.create('opacity'),
      opacity: 0,
      top: '56px',
      left: '48px',
      width: 'calc(100% - 16px)',
      height: 'calc(100% - 80px)',
      margin: theme.spacing(2, 0, 0, 2)
    },
    icon: {
      width: '100%',
      height: '100%'
    }
  }),
  { name: 'SCA__Avatar' }
);
