import { pendingRoute } from '../src/support/placeholders';
import { test, expect } from '@playwright/test';
import { RecommendationsPage } from '../src/pages/RecommendationsPage';
import { PlayerPage } from '../src/pages/PlayerPage';

test.fixme('PLAY-001: selected recommended movie starts playback', async ({ page }) => {
  // TODO: authenticate and select a controlled, playable movie.
  const recommendations = new RecommendationsPage(page);
  const player = new PlayerPage(page);
  await recommendations.open();
  await recommendations.cards.first().click();
  await expect(player.container).toBeVisible();
  await expect(player.movieTitle).not.toBeEmpty();
  // TODO: verify actual playing state/progress using the target player's supported API.
});

test.fixme('E2E-001: login to recommendations to playback', async ({ page }) => {
  // TODO: integrate permitted credentials, app routes, deterministic video, and assertions.
  await page.goto(pendingRoute('login'));
  await expect(page).toHaveURL(pendingRoute('login'));
});
