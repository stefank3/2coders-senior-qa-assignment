# 2Coders Senior QA — Playwright automation scaffold

## Scope
Automation scaffolding for the web counterpart of the supplied 2Coders QA assignment. The assignment provides **no application URL, DOM, working backend, authorized identities, or streaming media**. All 8 candidate test cases are deliberately marked `test.fixme` and are **not executable evidence of product quality**.

## Setup
Requires Node.js 22 or later and npm.

```bash
npm ci
npx tsc --noEmit
npx playwright test --list
npx playwright test
```

## When an authorized web target is available
1. Set `BASE_URL` in the shell or CI environment; no application URL is assumed. `.env.example` documents the variables, but `.env` is not automatically loaded. Confirm actual application routes and replace `pendingRoute` resolution in `src/support/placeholders.ts` with verified paths.
2. Replace `pendingLocator` resolution in `src/support/placeholders.ts` with inspected, stable selectors for its typed keys. Never make up selectors. Unresolved routes and locators throw actionable errors when accessed.
3. Prepare authorized test identities; keep secrets out of source control and logs.
4. Implement authentication fixture and controlled recommendation / playable video test data.
5. Confirm the real expected outcomes for each test, including invitation policy and session behavior.
6. Complete the login-to-playback journey and strengthen session, carousel identity, and playback progress assertions against confirmed behavior.
7. Remove `test.fixme` **per test** only when all prerequisites exist and assertions verify the intended behavior. Install Chromium with `npx playwright install chromium`, run `npm test`, and inspect the HTML report.

## Current state
- TypeScript Page Objects with explicit selector placeholders.
- 8 candidate scenarios across authentication, recommendations, and playback.
- No app/server provided and no browser integration executed. All candidate tests expected to appear as fixme/skipped until integration.
- Google/Microsoft SSO are **visibility checks only**, not real identity-provider authentication tests.
- Do not present skipped tests as passing tests.
- Validation should discover eight tests and report eight skipped tests on execution, with zero passing functional tests.

## Design choices
Page Objects own selectors and interaction helpers. Tests own behavioral expectations. No dummy application or fabricated selectors. Conservative Chromium-only baseline. Expand browser coverage only after the target and test data are stable.

Unresolved locator and route keys are centralized in `src/support/placeholders.ts`. Page Objects remain lightweight, using descriptive elements such as `PlayerPage.container` and `PlayerPage.movieTitle`. The dependency lockfile supports reproducible installation with `npm ci`. Credentials, authentication state, reports, and traces are excluded from Git.
