import type { Page } from '@playwright/test';
import { pendingLocator } from '../support/placeholders';

export class PlayerPage {
  constructor(private readonly page: Page) {}
  get container() { return this.page.locator(pendingLocator('playbackContainer')); }
  get movieTitle() { return this.page.locator(pendingLocator('playbackTitle')); }
  get error() { return this.page.locator(pendingLocator('playbackError')); }
}
