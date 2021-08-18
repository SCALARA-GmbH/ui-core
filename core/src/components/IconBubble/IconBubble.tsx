import cx from 'classnames';
import * as React from 'react';

import { Icon } from '../Icon';
import { IconName } from '../Icon/Icon';
import { makeStylesWithProps } from '../ThemeProvider/styles';
import { ColorPalette, Colors } from '../ThemeProvider/types';

export const Hierarchies = [
  'primary',
  'secondary',
  'tertiary',
  'destructive',
  'required-instruction',
  'optional-instruction'
] as const;
type HierarchyTypes = typeof Hierarchies;
export type Hierarchy = HierarchyTypes[number];

interface Props {
  name: IconName;
  className?: string;
  hierarchy?: Hierarchy;
}

const getPalette = ({
  hierarchy,
  colors
}: {
  hierarchy?: Hierarchy;
  colors: Colors;
}): ColorPalette => {
  switch (hierarchy) {
    case 'primary':
      return {
        default: colors.neutral['3'],
        '75': colors.neutral['4'],
        '50': colors.neutral['6']
      };
    case 'secondary':
      return colors.secondary;
    case 'tertiary':
      return colors.tertiary;
    case 'destructive':
      return colors.destructive;
    case 'optional-instruction':
      return colors.optionalInstruction;
    case 'required-instruction':
      return colors.requiredInstruction;
    default:
      return colors.primary;
  }
};

const useStyles = makeStylesWithProps<{ hierarchy: Hierarchy }>(
  ({ spacing, colors }) => ({
    icon: {
      background: ({ hierarchy }) => getPalette({ hierarchy, colors })['50'],
      borderRadius: '50%',
      padding: spacing(3),
      color: ({ hierarchy }) => getPalette({ hierarchy, colors }).default,
      overflow: 'overlay'
    }
  }),
  { name: 'SCA__IconBubble' }
);

const IconBubble: React.FunctionComponent<Props> = ({
  name,
  className,
  hierarchy = 'secondary'
}) => {
  const classes = useStyles({ hierarchy });
  return (
    <Icon name={name} size="medium" className={cx(classes.icon, className)} />
  );
};

export default IconBubble;
