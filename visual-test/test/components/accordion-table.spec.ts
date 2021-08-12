import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('clicks on accordion header and opens the table as content', async ({
  page
}) => {
  await page.goto(
    `${config.url}/iframe.html?id=components-accordion--accordion-table-visual-test-story`
  );

  expect(await page.screenshot()).toMatchSnapshot('before-click-on-header.png');

  await page.click('text=/Account Type/');

  const header = await page.waitForSelector('[data-testid="visual"]');

  await header.waitForElementState('stable');

  expect(await page.screenshot()).toMatchSnapshot('after-click-on-header.png', {
    threshold: 0.01
  });
});
