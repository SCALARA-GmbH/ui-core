import { makeStylesWithProps } from '../..';
import { Size } from '../../types';
import { getSizeFactor } from '../Icon/styles';

export const useStyles = makeStylesWithProps<{
  clickable: boolean;
  size: Size;
}>(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: (props) => (props.clickable ? 'pointer' : 'default'),
    height: 'fit-content',
    width: 'fit-content'
  },
  iconWithText: {
    width: ({ size }) => `${getSizeFactor(size) * 146}px`,
    height: ({ size }) => `${getSizeFactor(size) * 40}px`
  }
}));
