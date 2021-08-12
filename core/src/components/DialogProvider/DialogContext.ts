import * as React from 'react';

import { DialogConfig } from './DialogProvider';

export type DialogContextValue = (config: DialogConfig | null) => void;

const DialogContext = React.createContext<DialogContextValue | null>(null);
export default DialogContext;
