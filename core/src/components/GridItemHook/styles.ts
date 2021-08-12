import { createStyles, makeStylesWithProps } from '../..';
import { AlignSelf, JustifySelf } from '../Grid/types';

import { Column } from './useGridItemClass';

export const useStyles = makeStylesWithProps<{
  alignSelf: AlignSelf;
  justifySelf: JustifySelf;
  xs: Column;
  sm: Column;
  md: Column;
  lg: Column;
  xl: Column;
}>(
  ({ breakpoints }) =>
    createStyles({
      root: {
        alignSelf: ({ alignSelf }) => alignSelf,
        justifySelf: ({ justifySelf }) => justifySelf,
        [breakpoints.up('xs')]: {
          gridColumn: ({ xs }) => `${xs.start} / ${xs.end}`,
        },
        [breakpoints.up('sm')]: {
          gridColumn: ({ sm }) => `${sm.start} / ${sm.end}`,
        },
        [breakpoints.up('md')]: {
          gridColumn: ({ md }) => `${md.start} / ${md.end}`,
        },
        [breakpoints.up('lg')]: {
          gridColumn: ({ lg }) => `${lg.start} / ${lg.end}`,
        },
        [breakpoints.up('xl')]: {
          gridColumn: ({ xl }) => `${xl.start} / ${xl.end}`,
        },
      },
    }),
  { name: 'SCA__Grid_Item' },
);
