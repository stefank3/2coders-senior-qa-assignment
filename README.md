# 2Coders Senior QA — Playwright automation scaffold

## Scope
Automation scaffolding for the web counterpart of the supplied 2Coders QA assignment. The assignment provides **no application URL, DOM, working backend, authorized identities, or streaming media**. All 8 candidate test cases are deliberately marked `test.fixme` and are **not executable evidence of product quality**.

## Setup
Requires Node.js 22 (used to validate this scaffold) and npm.

```bash
npm install
npx playwright install chromium
npm run typecheck
npm run test:list
```

## When an authorized web target is available
1. Set `BASE_URL` in `.env` or the environment; confirm actual application routes (`/login`, `/recommendations`).
2. Replace `pendingLocator('...')` in the three page objects with inspected, stable locators. Never make up selectors.
3. Prepare authorized test identities; keep secrets out of source control and logs.
4. Implement authentication fixture and controlled recommendation / playable video test data.
5. Confirm the real expected outcomes for each test, including invitation policy and session behavior.
6. Remove `test.fixme` **per test** only when all prerequisites exist and assertions verify the intended behavior. Run `npm test` and inspect the HTML report.

## Current state
- TypeScript Page Objects with explicit selector placeholders.
- 8 candidate scenarios across authentication, recommendations, and playback.
- No app/server provided and no browser integration executed. All candidate tests expected to appear as fixme/skipped until integration.
- Google/Microsoft SSO are **visibility checks only**, not real identity-provider authentication tests.
- Do not present skipped tests as passing tests.

## Design choices
Page Objects own selectors and interaction helpers. Tests own behavioral expectations. No dummy application or fabricated selectors. Conservative Chromium-only baseline. Expand browser coverage only after the target and test data are stable.
