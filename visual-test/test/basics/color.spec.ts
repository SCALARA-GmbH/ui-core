import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('visual', async ({ page }) => {
  await page.goto(`${config.url}/iframe.html?id=basics-color--color-story-vs`);

  expect(await page.screenshot()).toMatchSnapshot('color.png', {
    threshold: 0.01,
  });
});
