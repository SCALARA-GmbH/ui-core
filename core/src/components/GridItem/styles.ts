import { createStyles, makeStylesWithProps } from '../..';
import { Columns } from '../Grid/Grid';
import { AlignSelf, JustifySelf } from '../Grid/types';

export const useStyles = makeStylesWithProps<{
  alignSelf: AlignSelf;
  justifySelf: JustifySelf;
  xs: Omit<Columns, 'auto'>;
  sm: Omit<Columns, 'auto'>;
  md: Omit<Columns, 'auto'>;
  lg: Omit<Columns, 'auto'>;
  xl: Omit<Columns, 'auto'>;
}>(({ breakpoints }) =>
  createStyles({
    root: {
      alignSelf: ({ alignSelf }) => alignSelf,
      justifySelf: ({ justifySelf }) => justifySelf,
      [breakpoints.up('xs')]: {
        gridColumnStart: ({ xs }) => `span ${xs}`,
      },
      [breakpoints.up('sm')]: {
        gridColumnStart: ({ sm }) => `span ${sm}`,
      },
      [breakpoints.up('md')]: {
        gridColumnStart: ({ md }) => `span ${md}`,
      },
      [breakpoints.up('lg')]: {
        gridColumnStart: ({ lg }) => `span ${lg}`,
      },
      [breakpoints.up('xl')]: {
        gridColumnStart: ({ xl }) => `span ${xl}`,
      },
    },
  })
);
