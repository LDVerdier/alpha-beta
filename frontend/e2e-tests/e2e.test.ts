import { Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

describe('homepage', () => {
  it('should display welcome message', async () => {
    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new Options().headless())
      .build();
    await driver.get('http://localhost:5173/');
    const title = await driver.getTitle();

    expect(title).toBe('Alpha Beta');
  });
});
