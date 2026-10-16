/**
 * Deliberately unresolved locators. Replace each placeholder only after
 * inspecting the authorized app's DOM and agreeing stable selectors.
 * Throwing protects against accidental false-positive test runs.
 */
export function pendingLocator(key: string): string {
  throw new Error(`UNRESOLVED LOCATOR: ${key}. Inspect the target app and replace this placeholder.`);
}
