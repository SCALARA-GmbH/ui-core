import { Page } from '@playwright/test';

export const sleep = (time: number): Promise<void> => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

export const waitForTransition = async (
  page: Page,
  selector: string
): Promise<void> => {
  return page.$eval(
    selector,
    (element) =>
      new Promise((resolve) => {
        const onEnd = () => {
          element.removeEventListener('transitionend', onEnd);
          resolve();
        };
        element.addEventListener('transitionend', onEnd);
      })
  );
};
