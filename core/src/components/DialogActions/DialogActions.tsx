import cx from 'classnames';
import * as React from 'react';

import { Button } from '../..';
import { ButtonProps } from '../Button/Button';

import { useStyles } from './styles';

export interface DialogActionsProps {
  CancelButtonProps?: Omit<ButtonProps, 'onClick'>;
  DeleteButtonProps?: Omit<ButtonProps, 'onClick'>;
  SubmitButtonProps?: Omit<ButtonProps, 'onClick'>;
  className?: string;
  onCancel?: () => void;
  onDelete?: () => void;
  onSubmit?: () => void;
}

const DialogActions: React.FunctionComponent<DialogActionsProps> = ({
  CancelButtonProps,
  SubmitButtonProps,
  DeleteButtonProps,
  className,
  onCancel,
  onDelete,
  onSubmit,
}) => {
  const classes = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      {onCancel && (
        <Button
          {...CancelButtonProps}
          label={CancelButtonProps?.label || 'Abbrechen'}
          onClick={onCancel}
        />
      )}
      {onDelete && (
        <Button
          className={classes.buttons}
          {...DeleteButtonProps}
          hierarchy={DeleteButtonProps?.hierarchy || 'destructive'}
          label={DeleteButtonProps?.label || 'Löschen'}
          onClick={onDelete}
        />
      )}
      <div className={classes.spacer} />
      {(onSubmit || SubmitButtonProps?.type === 'submit') && (
        <Button
          className={classes.buttons}
          {...SubmitButtonProps}
          hierarchy={SubmitButtonProps?.hierarchy || 'primary'}
          label={SubmitButtonProps?.label || 'Ok'}
          onClick={onSubmit}
          variant={SubmitButtonProps?.variant || 'contained'}
        />
      )}
    </div>
  );
};

export default DialogActions;
