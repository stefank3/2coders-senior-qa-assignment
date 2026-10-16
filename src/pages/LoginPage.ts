import type { Page } from '@playwright/test';
import { pendingLocator } from '../support/locators';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open() { await this.page.goto('/login'); } // TODO: confirm actual route
  get email() { return this.page.locator(pendingLocator('LOGIN_EMAIL_INPUT')); }
  get password() { return this.page.locator(pendingLocator('LOGIN_PASSWORD_INPUT')); }
  get submit() { return this.page.locator(pendingLocator('LOGIN_SUBMIT_BUTTON')); }
  get google() { return this.page.locator(pendingLocator('LOGIN_GOOGLE_BUTTON')); }
  get microsoft() { return this.page.locator(pendingLocator('LOGIN_MICROSOFT_BUTTON')); }
  get error() { return this.page.locator(pendingLocator('LOGIN_ERROR_MESSAGE')); }

  async loginByEmail(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}
