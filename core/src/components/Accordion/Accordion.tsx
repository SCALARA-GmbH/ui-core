import Collapse from '@material-ui/core/Collapse';
import cx from 'classnames';
import * as React from 'react';

import { IconButton, useTheme } from '../../index';
import DefaultDivider from '../DefaultDivider';
import { Icon } from '../Icon';
import { IconButtonProps } from '../IconButton/IconButton';
import Typography from '../Typography';

import { useStyles } from './styles';

export interface Props {
  actionButtonProps?: IconButtonProps;
  className?: string;
  children: React.ReactNode;
  header?: React.ReactElement;
  initiallyOpen?: boolean;
  onChange?: (open: boolean) => void;
  testId?: string;
  title?: string;
}

const Accordion: React.FunctionComponent<Props> = ({
  actionButtonProps,
  title,
  children,
  header,
  testId = 'accordion',
  initiallyOpen = false,
  onChange,
  className,
}) => {
  const [open, setOpen] = React.useState<boolean>(initiallyOpen);
  const classes = useStyles({ open });
  const theme = useTheme();

  React.useEffect(() => {
    if (onChange) {
      onChange(open);
    }
  }, [open]);

  return (
    <div className={cx(classes.root, className)}>
      <div
        className={classes.header}
        onClick={() => setOpen((prev) => !prev)}
        data-testid={testId}
        role={'button'}
        aria-label={title}
      >
        <div className={classes.headerContent}>
          {title && (
            <Typography selectable={false} variant={'t3'}>
              {title}
            </Typography>
          )}
          {header}
        </div>
        {actionButtonProps && (
          <IconButton className={classes.action} {...actionButtonProps} />
        )}
        <Icon
          className={cx(classes.icon, { [classes.iconOpen]: open })}
          testId={`${testId}-icon`}
          name={'arrow-down'}
          color={theme.colors.neutral['3']}
        />
      </div>
      {!open && <DefaultDivider />}
      <Collapse
        in={open}
        data-testid={`${testId}-list`}
        className={classes.content}
        mountOnEnter
        unmountOnExit
      >
        {children}
      </Collapse>
    </div>
  );
};

export default Accordion;
