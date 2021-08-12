import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('visual', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-controls-checkbox--checkbox-story-sbs`
  );

  expect(await page.screenshot()).toMatchSnapshot('checkbox.png');
});
