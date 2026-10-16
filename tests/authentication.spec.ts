import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

// This is deliberately FIX-ME, not passed/green: no application or selectors supplied.
test.fixme('AUTH-001: shows email, Google, and Microsoft login options', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await expect(login.email).toBeVisible();
  await expect(login.google).toBeVisible();
  await expect(login.microsoft).toBeVisible();
});

test.fixme('AUTH-004: valid email credentials establish a session', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  // TODO: use authorized test-account fixture or secret environment variables.
  await login.loginByEmail(process.env.TEST_EMAIL ?? '', process.env.TEST_PASSWORD ?? '');
  await expect(page).toHaveURL(/recommendations/); // TODO: confirm route
});

test.fixme('AUTH-005: invalid credentials display an error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.loginByEmail('invalid@example.test', 'wrong-password');
  await expect(login.error).toBeVisible();
});

test.fixme('AUTH-016: unauthenticated users cannot access recommendations', async ({ page }) => {
  await page.goto('/recommendations'); // TODO: confirm protected route
  await expect(page).toHaveURL(/login/); // TODO: confirm expected access policy
});
