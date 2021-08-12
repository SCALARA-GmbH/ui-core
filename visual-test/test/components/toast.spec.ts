import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('clicks on accordion header and opens the table as content', async ({
  page
}) => {
  await page.goto(`${config.url}/iframe.html?id=components-toast--toast-story`);

  await page.click('text=/Show success toast with link!/');
  await page.click('text=/Show error toast!/');
  await page.click('text=/Show success toast with very long text!/');
  await page.click('text=/Show success toast with long text!/');

  const success = await page.waitForSelector(
    'text=/This is an example with a lot of text inside the toast./'
  );
  await success.waitForElementState('stable');

  expect(await page.screenshot()).toMatchSnapshot('toasts.png', {
    threshold: 0.01
  });
});
