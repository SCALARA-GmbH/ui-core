import {
  Dialog as MuiDialog,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  useMediaQuery,
} from '@material-ui/core';
import cx from 'classnames';
import * as React from 'react';

import { Icon, IconButton, Typography, useTheme } from '../..';

import { useStyles } from './styles';

export interface DialogProps {
  children?: React.ReactNode;
  disableBackdropClick?: MuiDialogProps['disableBackdropClick'];
  fullWidth?: MuiDialogProps['fullWidth'];
  maxWidth?: MuiDialogProps['maxWidth'];
  onBack?: () => void;
  onClose: () => void;
  open?: MuiDialogProps['open'];
  title: string;
  backLabel?: string;
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  children,
  disableBackdropClick = false,
  fullWidth = true,
  maxWidth = 'lg',
  onBack,
  onClose,
  open = false,
  title,
  backLabel,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      <DialogTitle disableTypography className={classes.titleWrapper}>
        {onBack && <IconButton Icon={Icon} iconName={'arrow-left'} onClick={onBack} ariaLabel={backLabel} />}
        <Typography className={cx({ [classes.offsetBackButton]: !onBack })} align={'center'} variant={'t3'} fullWidth>
          {title}
        </Typography>
        {fullScreen && <IconButton Icon={Icon} iconName={'close'} onClick={onClose} />}
      </DialogTitle>
      <DialogContent classes={{ root: classes.content }}>{children}</DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
