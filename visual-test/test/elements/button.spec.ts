import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('visual', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-controls-button--button-story-vs`
  );

  expect(await page.screenshot()).toMatchSnapshot('button.png');
});

test('grid visual', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-controls-button--grid-story`
  );

  expect(await page.screenshot()).toMatchSnapshot('button-in-grid.png');
});
