import classNames from 'classnames';
import * as React from 'react';

import { useStyles } from './styles';
import { TextColor, Variant } from './types';

export enum Wrap {
  DEFAULT = 'DEFAULT',
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  NO_WRAP = 'NO_WRAP',
  /**
   * Sequences of white space are preserved. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes.
   * Note that text overflow can only happen with block or inline-block level elements
   */
  PRESERVE_BREAK_LINES = 'PRESERVE_BREAK_LINES',
}

export interface TypographyProps {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  className?: string;
  children?: React.ReactNode;
  color?: TextColor;
  disabled?: boolean;
  gutterBottom?: boolean;
  fullWidth?: boolean;
  wrap?: Wrap;
  onClick?: () => void;
  preserveHeight?: boolean;
  selectable?: boolean;
  style?: React.CSSProperties;
  testId?: string;
  underlined?: boolean;
  underlinedAnimated?: boolean;
  variant?: Variant;
  span?: boolean;
}

export type Tag = 'h1' | 'p' | 'span';

export function getTag(variant: Variant): Tag {
  switch (variant) {
    case 't1':
    case 't2':
    case 't3':
      return 'h1';
    case 'c1':
    case 'c2':
    case 'c3':
    case 'c4':
    case 'c5':
      return 'p';
    default:
      return 'p';
  }
}

const Typography: React.FunctionComponent<TypographyProps> = ({
  align = 'inherit',
  color = 'initial',
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  gutterBottom = false,
  wrap = Wrap.DEFAULT,
  onClick,
  preserveHeight = false,
  selectable = true,
  style = {},
  testId = '',
  variant = 'c1',
  span = false,
}) => {
  const classes = useStyles({
    align,
    color,
    disabled,
    fullWidth,
    gutterBottom,
    onClick,
    preserveHeight,
    selectable,
    variant,
  });
  const Tag = span ? 'span' : getTag(variant);

  return (
    <Tag
      className={classNames(
        classes.root,
        {
          [classes.noWrap]: wrap === Wrap.NO_WRAP,
          [classes.withLineBreak]: wrap === Wrap.PRESERVE_BREAK_LINES,
        },
        className,
      )}
      data-testid={testId}
      onClick={(event) => {
        if (onClick) {
          event.stopPropagation();
          onClick();
        }
      }}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Typography;
