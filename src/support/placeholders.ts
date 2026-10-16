/** Resolve these keys to inspected selectors only when the authorized DOM is available. */
const locatorDescriptions = {
  loginEmail: 'login email input',
  loginPassword: 'login password input',
  loginSubmit: 'login submit button',
  loginGoogle: 'Google login button',
  loginMicrosoft: 'Microsoft login button',
  loginError: 'login error message',
  playbackContainer: 'playback container',
  playbackTitle: 'playing movie title',
  playbackError: 'playback error',
  recommendationCards: 'recommendation cards',
  recommendationTitle: 'recommendation title',
  recommendationPoster: 'recommendation poster',
  recommendationReleaseDate: 'recommendation release date',
  recommendationPopularity: 'recommendation popularity',
  recommendationDescription: 'recommendation description',
  carouselNext: 'next carousel button',
  carouselPrevious: 'previous carousel button',
} as const;

export function pendingLocator(key: keyof typeof locatorDescriptions): string {
  throw new Error(`UNRESOLVED LOCATOR: ${locatorDescriptions[key]}. Inspect the authorized app and replace this placeholder.`);
}

/** Route names are placeholders, not assumed application paths. */
const routeDescriptions = {
  login: 'login page',
  recommendations: 'recommendations page',
} as const;

export function pendingRoute(key: keyof typeof routeDescriptions): string {
  throw new Error(`UNRESOLVED ROUTE: ${routeDescriptions[key]}. Confirm the authorized application route before enabling this scenario.`);
}
