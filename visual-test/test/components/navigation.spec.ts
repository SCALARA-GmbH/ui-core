import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';
import { sleep } from '../../utils/sleep';

const config = new Config();

test('clicks on another navigation item', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=components-navigation--navigation-story`
  );

  expect(await page.screenshot()).toMatchSnapshot(
    'before-click-on-transactions.png'
  );

  await page.click('text=/Transactions/');

  // note: sleeping a bit for the transition of background  to take effect.
  // ref : https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/ListItem/ListItem.js
  await sleep(200);

  expect(await page.screenshot()).toMatchSnapshot(
    'after-click-on-transactions.png',
    { threshold: 0.01 }
  );
});

test('disabled', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=components-navigation--navigation-disabled-story`
  );

  expect(await page.screenshot()).toMatchSnapshot('navigation-disabled.png');
});
