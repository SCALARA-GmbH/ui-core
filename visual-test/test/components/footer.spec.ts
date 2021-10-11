import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

const breakpoints = [704, 960, 1024, 1440];

// NOTE: breakpoint - 1 to verify responsiveness
breakpoints.forEach((breakpoint) => {
  [breakpoint, breakpoint - 1].forEach((bp) => {
    test(`visual ${bp}`, async ({ page }) => {
      await page.setViewportSize({ height: 1080, width: bp });
      await page.goto(
        `${config.url}/iframe.html?id=components-footer--footer-overview-vs`
      );

      expect(await page.screenshot()).toMatchSnapshot(`footer-${bp}.png`, {
        threshold: 0.01
      });
    });
  });
});
