import { LaunchOptions } from 'playwright';

export const launchOptions: LaunchOptions = {
  headless: true,
  devtools: false
} as const;

export class Config {
  private readonly browser = 'chromium';

  get url(): string {
    return 'http://localhost:6006';
  }

  get ci(): boolean {
    return !!process.env.CI;
  }
}
