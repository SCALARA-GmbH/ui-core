import classNames from 'classnames';
import * as React from 'react';

import Button from '../Button';
import { Hierarchy, Variant } from '../Button/types';
import Paper from '../Paper';
import Typography from '../Typography';

import { useStyles } from './styles';

export interface DividerProps {
  className?: string;
  elevated?: boolean;
  hierarchy?: Hierarchy;
  hoverable?: boolean;
  img: string;
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
  testId?: string;
  text: string;
  title: string;
  variant?: Variant;
}

const Card: React.FunctionComponent<DividerProps> = ({
  className = '',
  hierarchy = 'primary',
  img,
  label,
  onClick,
  style = {},
  testId = '',
  text,
  title,
  variant = 'outlined'
}) => {
  const classes = useStyles({ img });
  return (
    <Paper
      className={classNames(classes.root, className)}
      testId={testId}
      style={style}
      onClick={onClick}
    >
      <div className={classes.image} data-testid={`${testId}-image`} />
      <div className={classes.content}>
        <Typography
          className={classes.title}
          testId={`${testId}-title`}
          variant={'t3'}
          onClick={onClick}
        >
          {title}
        </Typography>
        <Typography
          className={classes.text}
          testId={`${testId}-text`}
          variant={'c2'}
          onClick={onClick}
        >
          {text}
        </Typography>
        <Button
          label={label}
          variant={variant}
          testId={`${testId}-button`}
          onClick={onClick}
          hierarchy={hierarchy}
        />
      </div>
    </Paper>
  );
};

export default Card;
