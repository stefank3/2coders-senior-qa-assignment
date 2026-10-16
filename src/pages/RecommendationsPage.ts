import type { Page } from '@playwright/test';
import { pendingLocator, pendingRoute } from '../support/placeholders';

export class RecommendationsPage {
  constructor(private readonly page: Page) {}
  async open() {
    await this.page.goto(pendingRoute('recommendations'));
  }
  get cards() { return this.page.locator(pendingLocator('recommendationCards')); }
  get title() { return this.page.locator(pendingLocator('recommendationTitle')); }
  get poster() { return this.page.locator(pendingLocator('recommendationPoster')); }
  get releaseDate() { return this.page.locator(pendingLocator('recommendationReleaseDate')); }
  get popularity() { return this.page.locator(pendingLocator('recommendationPopularity')); }
  get description() { return this.page.locator(pendingLocator('recommendationDescription')); }
  get next() { return this.page.locator(pendingLocator('carouselNext')); }
  get previous() { return this.page.locator(pendingLocator('carouselPrevious')); }
}
