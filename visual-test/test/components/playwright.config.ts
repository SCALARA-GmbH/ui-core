import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        viewport: { width: 1080, height: 1080 },
      },
    },
  ],
};
export default config;
