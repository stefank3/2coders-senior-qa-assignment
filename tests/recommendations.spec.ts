import { test, expect } from '@playwright/test';
import { RecommendationsPage } from '../src/pages/RecommendationsPage';

test.fixme('REC-001: recommendation contains required movie metadata', async ({ page }) => {
  // TODO: authenticate with a permitted test account and controlled content.
  const recommendations = new RecommendationsPage(page);
  await recommendations.open();
  await expect(recommendations.cards.first()).toBeVisible();
  await expect(recommendations.title.first()).not.toBeEmpty();
  await expect(recommendations.poster.first()).toBeVisible();
  await expect(recommendations.releaseDate.first()).toBeVisible();
  await expect(recommendations.popularity.first()).toBeVisible();
  await expect(recommendations.description.first()).not.toBeEmpty();
});

test.fixme('REC-002: carousel navigation reveals other recommendations', async ({ page }) => {
  // TODO: authenticate, choose controlled recommendation fixtures, and assert item identity.
  const recommendations = new RecommendationsPage(page);
  await recommendations.open();
  await expect(recommendations.next).toBeVisible();
  await recommendations.next.click();
  await expect(recommendations.cards.first()).toBeVisible();
});
