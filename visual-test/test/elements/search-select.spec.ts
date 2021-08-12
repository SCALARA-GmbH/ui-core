import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('clicks on another navigation item', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-input-searchselect--search-select-with-custom-selected-component`
  );

  expect(await page.screenshot()).toMatchSnapshot('before-click-on-select.png');

  await page.click('text=/Wählen Sie ein Objekt aus dem Portfolio/');

  const visual = await page.waitForSelector('[data-testid="visual-area"]');

  await visual.waitForElementState('stable');

  expect(await page.screenshot()).toMatchSnapshot('after-click-on-select.png', {
    threshold: 0.01
  });

  await page.click('text=/Ursulagartenstr 56/');

  const visualAfterClick = await page.waitForSelector(
    '[data-testid="visual-area"]'
  );

  await visualAfterClick.waitForElementState('stable');

  expect(await page.screenshot()).toMatchSnapshot('after-click-on-option.png', {
    threshold: 0.01
  });
});
