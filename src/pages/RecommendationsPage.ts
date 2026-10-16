import type { Page } from '@playwright/test';
import { pendingLocator } from '../support/locators';

export class RecommendationsPage {
  constructor(private readonly page: Page) {}
  async open() { await this.page.goto('/recommendations'); } // TODO: confirm route
  get cards() { return this.page.locator(pendingLocator('RECOMMENDATION_CARDS')); }
  get title() { return this.page.locator(pendingLocator('RECOMMENDATION_TITLE')); }
  get poster() { return this.page.locator(pendingLocator('RECOMMENDATION_POSTER')); }
  get releaseDate() { return this.page.locator(pendingLocator('RECOMMENDATION_RELEASE_DATE')); }
  get popularity() { return this.page.locator(pendingLocator('RECOMMENDATION_POPULARITY')); }
  get description() { return this.page.locator(pendingLocator('RECOMMENDATION_DESCRIPTION')); }
  get next() { return this.page.locator(pendingLocator('CAROUSEL_NEXT')); }
  get previous() { return this.page.locator(pendingLocator('CAROUSEL_PREVIOUS')); }
}
