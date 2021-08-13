import { createStyles, makeStylesWithProps } from '../..';

import { Columns } from './Grid';
import {
  AlignContent,
  AlignItems,
  JustifyContent,
  JustifyItems
} from './types';

const getTemplateColumns = (count: Omit<Columns, 'auto'>): string => {
  const min = 200 / (count as number);
  let templateColumns = `minmax(${min}px, 1fr)`;
  for (let i = 1; i < count; i++) {
    templateColumns = `${templateColumns} minmax(${min}px, 1fr)`;
  }

  return templateColumns;
};

export const useStyles = makeStylesWithProps<{
  alignContent: AlignContent;
  alignItems: AlignItems;
  justifyContent: JustifyContent;
  justifyItems: JustifyItems;
  xs: Omit<Columns, 'auto'>;
  sm: Omit<Columns, 'auto'>;
  md: Omit<Columns, 'auto'>;
  lg: Omit<Columns, 'auto'>;
  xl: Omit<Columns, 'auto'>;
}>(({ breakpoints, spacing }) =>
  createStyles({
    root: {
      alignItems: ({ alignItems }) => alignItems,
      alignContent: ({ alignContent }) => alignContent,
      display: 'grid',
      [breakpoints.up('xs')]: {
        gridRowGap: spacing(0),
        gridColumnGap: spacing(2),
        gridTemplateColumns: ({ xs }) => getTemplateColumns(xs)
      },
      [breakpoints.up('sm')]: {
        gridTemplateColumns: ({ sm }) => getTemplateColumns(sm)
      },
      [breakpoints.up('md')]: {
        gridRowGap: spacing(0),
        gridColumnGap: spacing(2.75),
        gridTemplateColumns: ({ md }) => getTemplateColumns(md)
      },
      [breakpoints.up('lg')]: {
        gridTemplateColumns: ({ lg }) => getTemplateColumns(lg)
      },
      [breakpoints.up('xl')]: {
        gridTemplateColumns: ({ xl }) => getTemplateColumns(xl)
      },
      justifyItems: ({ justifyItems }) => justifyItems,
      justifyContent: ({ justifyContent }) => justifyContent
    }
  })
);
