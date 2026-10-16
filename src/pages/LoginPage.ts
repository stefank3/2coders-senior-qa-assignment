import type { Page } from '@playwright/test';
import { pendingLocator, pendingRoute } from '../support/placeholders';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto(pendingRoute('login'));
  }
  get email() { return this.page.locator(pendingLocator('loginEmail')); }
  get password() { return this.page.locator(pendingLocator('loginPassword')); }
  get submit() { return this.page.locator(pendingLocator('loginSubmit')); }
  get google() { return this.page.locator(pendingLocator('loginGoogle')); }
  get microsoft() { return this.page.locator(pendingLocator('loginMicrosoft')); }
  get error() { return this.page.locator(pendingLocator('loginError')); }

  async loginByEmail(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}
