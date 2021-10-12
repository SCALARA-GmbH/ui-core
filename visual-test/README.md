# ui-core visual testing 
Test includes the ability to produce and visually compare screenshots.
On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.

refer to [https://playwright.dev/docs/test-snapshots/][playwright] for more information

[playwright]: https://playwright.dev/docs/test-snapshots/

# snapshot update (darwin host):

linux: 
```shell
sed -i '' "s/localhost/$(hostname -f)/" ./utils/config.ts
yarn storybook
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.12.3-focal /bin/bash
yarn
yarn test:update:snapshots
exit
sed -i '' "s/$(hostname -f)/localhost/" ./utils/config.ts
```

darwin:
```shell
yarn storybook
yarn test:basics --update-snapshots
```
refer to `package.json` for all available test suites

