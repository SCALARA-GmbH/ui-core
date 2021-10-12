import { Fade, Popper, PopperProps } from '@material-ui/core';
import PopperJs from 'popper.js';
import * as React from 'react';

import { Icon } from '../Icon';
import { makeStylesWithProps, useTheme } from '../ThemeProvider/styles';
import { Color, Theme } from '../ThemeProvider/types';
import Typography from '../Typography';

export type TooltipVariant = 'neutral' | 'info';

export interface PopoverProps {
  variant?: TooltipVariant;
  popoverRef?: React.Ref<PopperJs>;
  open: boolean;
  anchorElement: PopperProps['anchorEl'];
  children: React.ReactNode;
  testId?: string;
}

const getColor = (variant: TooltipVariant, theme: Theme): Color => {
  switch (variant) {
    case 'neutral':
      return theme.colors.neutral.F;
    case 'info':
      return theme.colors.optionalInstruction['75'];
  }
};

const getBorder = (variant: TooltipVariant, theme: Theme): string => {
  switch (variant) {
    case 'neutral':
      return 'none';
    case 'info':
      return `inset 4px 0 0 ${getColor(variant, theme)}`;
    default:
      return 'none';
  }
};

const useStyles = makeStylesWithProps<{ variant: TooltipVariant }>(
  (theme) => ({
    popover: {
      zIndex: 9999,
    },
    root: {
      minWidth: '160px',
      maxWidth: '280px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.colors.text.main,
      boxShadow: ({ variant }) => getBorder(variant, theme),
    },
    icon: {
      padding: theme.spacing(0, 0, 0, 1.5),
      flexShrink: 0,
    },
    content: {
      width: '100%',
      color: theme.colors.neutral['6'],
      padding: theme.spacing(1.5, 1.5, 1.5, 1.5),
    },
  }),
  { name: 'Popover' }
);

export const Popover: React.FunctionComponent<PopoverProps> = ({
  open,
  popoverRef,
  anchorElement,
  variant = 'neutral',
  children,
  testId,
}) => {
  const classes = useStyles({ variant });
  const theme = useTheme();
  return (
    <Popper
      popperRef={popoverRef}
      open={open}
      anchorEl={anchorElement}
      transition
      data-testid={testId}
      disablePortal
      className={classes.popover}
    >
      {({ TransitionProps }) => (
        <Fade
          {...TransitionProps}
          timeout={333}
          data-testid={testId && `${testId}-fade`}
        >
          <div className={classes.root}>
            {variant === 'info' && (
              <Icon
                className={classes.icon}
                name={'information'}
                color={getColor(variant, theme)}
              />
            )}
            <Typography variant={'c2'} className={classes.content}>
              {children}
            </Typography>
          </div>
        </Fade>
      )}
    </Popper>
  );
};
