import { createStyles, makeStylesWithProps } from '../..';

export const useStyles = makeStylesWithProps<{
  clickable: boolean;
}>(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      cursor: (props) => (props.clickable ? 'pointer' : 'default'),
      height: 'fit-content',
      width: 'fit-content',
    },
    iconWithText: {
      width: '146px',
      height: '40px',
    },
  }),
);
