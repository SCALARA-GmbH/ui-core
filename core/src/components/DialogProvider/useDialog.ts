import * as React from 'react';

import DialogContext, { DialogContextValue } from './DialogContext';

const useDialog = (): DialogContextValue | null =>
  React.useContext(DialogContext);
export default useDialog;
