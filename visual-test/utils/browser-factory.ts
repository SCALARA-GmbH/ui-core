import { Browser, chromium, firefox, webkit } from 'playwright';

import { launchOptions } from './config';

export type BrowserType = 'webkit' | 'chromium' | 'firefox';

export const create = (browserType: BrowserType): Promise<Browser> => {
  switch (browserType) {
    case 'webkit':
      return webkit.launch(launchOptions);
    case 'chromium':
      return chromium.launch(launchOptions);
    case 'firefox':
      return firefox.launch(launchOptions);
  }
};
