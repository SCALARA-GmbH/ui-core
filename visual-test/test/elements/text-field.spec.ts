import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('visual', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-input-textfield--text-field-story-sbs`
  );

  expect(await page.screenshot()).toMatchSnapshot('text-field.png');
});

test('visual with input', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-input-textfield--text-field-visual-input-story`
  );

  await page.fill('[name="input"]', 'filled by test');

  expect(await page.screenshot()).toMatchSnapshot('text-field-input.png');
});
