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

const getImageSize = (size: Size): number => {
  switch (size) {
    case 'small':
      return 28;
    case 'medium':
      return 32;
    case 'large':
      return 97.6;
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
      position: 'relative',
      cursor: ({ onClick }) => (onClick ? 'pointer' : 'inherit'),
      '&:hover > $editOverlay': {
        opacity: ({ onClick }) => (onClick ? 1 : 0),
      },
    },
    avatar: {
      background: 'none',
    },
    fallback: {
      height: (props) => getSize(props.size),
      width: (props) => getSize(props.size),
    },
    image: {
      boxShadow: `0 0 0 1px ${theme.colors.neutral['5']}`,
      height: (props) => getImageSize(props.size),
      width: (props) => getImageSize(props.size),
      margin: (props) => (getSize(props.size) - getImageSize(props.size)) / 2,
    },
    registered: {
      color: theme.colors.secondary.default,
    },
    unregistered: {
      color: theme.colors.neutral['3'],
    },
    editOverlay: {
      cursor: ({ onClick }) => (onClick ? 'pointer' : 'inherit'),
      position: 'absolute',
      transition: theme.transitions.create('opacity'),
      opacity: 0,
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
    },
    icon: {
      width: '100%',
      height: '100%',
    },
  }),
  { name: 'SCA__Avatar' }
);
