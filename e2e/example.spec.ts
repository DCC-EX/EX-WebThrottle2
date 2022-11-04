import {test, expect} from '@playwright/test';

test('Homepage has correct title', async ({page}) => {
  // await page.goto('https://playwright.dev/');
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vuetify/);

  // create a locator
});

test('Counter increments when button pressed', async ({page}) => {
  await page.goto('/');
  const incrementButton = page.getByText('Click Me!');
  const counter = page.locator('id=counter');
    
  await incrementButton.click();

  await expect(counter).toHaveText('1');
});

test('navigate to about page', async ({page}) => {
  await page.goto('/');
  await page.locator('id=drawer-icon').click();

  const aboutLink = page.getByText('about');

  await aboutLink.click();


  await expect(page).toHaveURL(/about/);
});
