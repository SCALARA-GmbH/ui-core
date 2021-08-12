import { createStyles, makeStylesWithProps } from '../..';
import { Orientation } from '../../types';
import { AlignContent, AlignItems, JustifyContent } from '../Grid/types';

export const useStyles = makeStylesWithProps<{
  disableGutters: boolean;
  orientation: Orientation;
  alignContent: AlignContent;
  alignItems: AlignItems;
  justifyContent: JustifyContent;
}>((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: ({ alignItems }) => alignItems,
      alignContent: ({ alignContent }) => alignContent,
      flexDirection: ({ orientation }) => (orientation === 'horizontal' ? 'row' : 'column'),
      padding: ({ disableGutters }) => (disableGutters ? 0 : theme.spacing(0, 3)),
      justifyContent: ({ justifyContent }) => justifyContent,
    },
  }),
);
