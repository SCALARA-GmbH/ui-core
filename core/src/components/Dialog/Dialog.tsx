import {
  Dialog as MuiDialog,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
} from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { Grid, Icon, IconButton, Typography } from '../..';
import GridItem from '../GridItem';
import useGridItemStyles from '../GridItemHook/useGridItemClass';
import { IconName } from '../Icon/Icons';
import IconBubble from '../IconBubble';

import { useStyles } from './styles';

export interface DialogProps {
  children?: React.ReactNode;
  disableBackdropClick?: MuiDialogProps['disableBackdropClick'];
  fullScreen?: MuiDialogProps['fullScreen'];
  fullWidth?: MuiDialogProps['fullWidth'];
  maxWidth?: MuiDialogProps['maxWidth'];
  onBack?: () => void;
  onClose: () => void;
  open?: MuiDialogProps['open'];
  title: string;
  titleIcon?: IconName;
  backLabel?: string;
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  disableBackdropClick = false,
  fullScreen = false,
  fullWidth = true,
  maxWidth = 'lg',
  onBack,
  onClose,
  open = false,
  title,
  titleIcon,
  backLabel,
}) => {
  const classes = useStyles();
  const gridItemStyles = useGridItemStyles({
    xs: { start: '4', end: 'span 6' },
  });

  return (
    <MuiDialog
      disableBackdropClick={disableBackdropClick}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
      scroll={'body'}
      classes={{
        paperScrollBody: classes.scrollPaper,
      }}
    >
      <DialogTitle
        disableTypography
        className={cx(classes.titleBar, { [classes.multiStep]: onBack })}
      >
        {onBack && (
          <IconButton
            Icon={Icon}
            iconName={'arrow-left'}
            onClick={onBack}
            ariaLabel={backLabel}
          />
        )}
        {fullScreen && (
          <div>
            <IconButton
              Icon={Icon}
              iconName={'close'}
              onClick={onClose}
              className={classes.closeButton}
            />
          </div>
        )}
      </DialogTitle>
      <DialogContent>
        <Grid xs={12}>
          <GridItem className={gridItemStyles}>
            <div className={classes.titleWrapper}>
              {titleIcon && (
                <div className={classes.titleIcon}>
                  <IconBubble name={titleIcon} size={'medium'} />
                </div>
              )}
              <Typography variant={'t1'}>{title}</Typography>
            </div>
            {children}
          </GridItem>
        </Grid>
      </DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
