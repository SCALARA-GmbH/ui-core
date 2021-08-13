import { AlignSelf, JustifySelf } from '../Grid/types';

import { useStyles } from './styles';
export type ColumnIdent =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'span 1'
  | 'span 2'
  | 'span 3'
  | 'span 4'
  | 'span 5'
  | 'span 6'
  | 'span 7'
  | 'span 8'
  | 'span 9'
  | 'span 10'
  | 'span 11'
  | 'span 12';

export interface Column {
  start: ColumnIdent;
  end: ColumnIdent | 'auto';
}

export interface GridItemProps {
  alignSelf?: AlignSelf;
  justifySelf?: JustifySelf;
  xs?: Column;
  sm?: Column;
  md?: Column;
  lg?: Column;
  xl?: Column;
  name?: string;
}

const useGridItemClass: (props: GridItemProps) => string = ({
  alignSelf = 'stretch',
  justifySelf = 'stretch',
  xs = { start: 'span 1', end: 'auto' },
  sm,
  md,
  lg,
  xl
}) => {
  const classes = useStyles({
    alignSelf,
    justifySelf,
    xs: xs,
    sm: sm || xs,
    md: md || sm || xs,
    lg: lg || md || sm || xs,
    xl: xl || lg || md || sm || xs
  });
  return classes.root;
};

export default useGridItemClass;
