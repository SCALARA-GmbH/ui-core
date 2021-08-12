import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';
import { waitForTransition } from '../../utils/sleep';

const config = new Config();

test('visual', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=components-popover--popover-visual-test-story`
  );

  const stability = await page.waitForSelector('[data-testid="visual"]');
  await stability.waitForElementState('stable');

  await waitForTransition(page, '[data-testid="visual"]');

  expect(await page.screenshot()).toMatchSnapshot('popover.png');
});
