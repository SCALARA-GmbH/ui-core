import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('visual', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=assets-iconbubble--icon-bubble-story`
  );

  expect(await page.screenshot()).toMatchSnapshot('icon-bubble.png');
});
