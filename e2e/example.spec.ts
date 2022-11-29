import {test, expect} from '@playwright/test';

test('Throttles has correct title', async ({page}) => {
  await page.goto('/throttle');
  const title = page.locator('id=currentPageTitle');
  // Expect a title "to contain" a substring.
  await expect(title).toHaveText(/ExWebThrottle/);
});
