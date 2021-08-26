import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';
import { waitForTransition } from '../../utils/sleep';

const config = new Config();

test('visual states', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-input-select--select-story-sbs`
  );

  expect(await page.screenshot()).toMatchSnapshot('select.png');

  expect(await page.screenshot()).toMatchSnapshot('select.png', {
    threshold: 0.01
  });
});

test('selects and item', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-input-select--select-visual-story`
  );

  expect(await page.screenshot()).toMatchSnapshot('before-click-on-select.png');

  await page.click('text=/Choose Office/');

  const stabilityBeforeSelect = await page.waitForSelector(
    '[data-testid="visual"]'
  );
  await stabilityBeforeSelect.waitForElementState('stable');

  await waitForTransition(page, '[data-testid="visual"]');

  expect(await page.screenshot()).toMatchSnapshot('after-click-on-select.png', {
    threshold: 0.01
  });

  await page.click('text=/Brühl Office/');

  const stabilityAfterSelect = await page.waitForSelector(
    '[data-testid="visual"]'
  );
  await stabilityAfterSelect.waitForElementState('stable');

  await waitForTransition(page, '[data-testid="visual"]');

  expect(await page.screenshot()).toMatchSnapshot('after-click-on-option.png', {
    threshold: 0.01
  });
});
