import React, { useState } from 'react';

import { Hierarchy } from '../Button/types';
import Dialog from '../Dialog';
import DialogActions from '../DialogActions';
import Typography from '../Typography';

import DialogContext, { DialogContextValue } from './DialogContext';

export interface DialogConfig {
  title: string;
  message: string;
  action: string;
  hierarchy?: Hierarchy;
  callback: () => void;
}

interface Props {
  children?: React.ReactNode;
}

const DialogProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [config, setConfig] = useState<DialogConfig | null>(null);

  const showMessage = React.useCallback<DialogContextValue>((dialogConfig) => {
    setOpen(true);
    setConfig(dialogConfig);
  }, []);

  const handleActionAndClose = () => {
    config?.callback();
    setOpen(false);
  };

  return (
    <>
      <DialogContext.Provider value={showMessage}>
        {children}
      </DialogContext.Provider>
      {config && (
        <Dialog open={open} onClose={() => setOpen(false)} title={config.title}>
          <Typography align={'center'}>{config.message}</Typography>
          <DialogActions
            SubmitButtonProps={{
              hierarchy: config.hierarchy || 'primary',
              label: config.action
            }}
            onCancel={() => setOpen(false)}
            onSubmit={handleActionAndClose}
          />
        </Dialog>
      )}
    </>
  );
};

export default DialogProvider;
