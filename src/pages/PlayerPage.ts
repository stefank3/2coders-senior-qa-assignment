import type { Page } from '@playwright/test';
import { pendingLocator } from '../support/locators';

export class PlayerPage {
  constructor(private readonly page: Page) {}
  get player() { return this.page.locator(pendingLocator('PLAYBACK_PLAYER')); }
  get playingTitle() { return this.page.locator(pendingLocator('PLAYBACK_MOVIE_TITLE')); }
  get error() { return this.page.locator(pendingLocator('PLAYBACK_ERROR')); }
}
