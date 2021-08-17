import { test, expect } from '@playwright/test';

import { Config } from '../../utils/config';

const config = new Config();

test('visual', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-input-textfield--textarea-form-story`
  );

  expect(await page.screenshot()).toMatchSnapshot('text-area.png');
});

test('visual with input', async ({ page }) => {
  await page.goto(
    `${config.url}/iframe.html?id=elements-input-textfield--textarea-form-story`
  );

  await page.fill(
    '[name="test"]',
    'The platform enables efficient, smooth and transparent communication between managers, owners, tenants and ' +
      'even service providers. With SCALARA you can concentrate on the essentials. SCALARA Our highest requirement is to' +
      ' develop a technically correct and legally compliant software.' +
      'The platform enables efficient, smooth and transparent communication between managers, owners, tenants and ' +
      'even service providers. With SCALARA you can concentrate on the essentials. SCALARA Our highest requirement is to' +
      ' develop a technically correct and legally compliant software.'
  );

  expect(await page.screenshot()).toMatchSnapshot('text-area-input.png');
});
