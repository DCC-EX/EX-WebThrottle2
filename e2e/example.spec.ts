import { test, expect } from "@playwright/test";

test("Throttles has correct title", async ({ page }) => {
  await page.goto("/throttle");
  const title = page.locator("id=title");
  // Expect a title "to contain" a substring.
  await expect(title).toHaveText(/WebThrottle-EX/);
});

test("Switch from Dark mode to Light", async ({ page }) => {
  await page.goto("/throttle");
  // Get our theme switch in the footer
  const themeSwitch = page.locator("id=theme");
  // By Default it should be Dark mode
  await expect(themeSwitch).toHaveValue("dccExDark");
  // Click it to make it Light mode
  await themeSwitch.click();
  // Confirm it switched to light mode
  await expect(themeSwitch).toHaveValue("dccExLight");
});
