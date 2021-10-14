import classNames from 'classnames';
import * as React from 'react';

import { useStyles } from './styles';

export interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AccordionItem: React.FunctionComponent<Props> = ({
  children,
  className,
  onClick,
}) => {
  const classes = useStyles({ clickable: !!onClick });

  return (
    <div onClick={onClick} className={classNames(classes.root, className)}>
      {children}
    </div>
  );
};

export default AccordionItem;
