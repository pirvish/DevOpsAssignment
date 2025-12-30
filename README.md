# DevOps Assignment

## Architecture / Structure
- Minimal repo with `sum.js` module and `sum.test.js` for unit tests
- Branches:
  - `master` — stable mainline
  - `next` — pre-release / development
- `.husky/commit-msg` enforces commit message rules locally
- `.github/workflows/ci.yml` runs CI checks

## Workflows
### CI workflow
- Runs on PRs into `master` or `next`, and on feature branch pushes.
- Runs:
  - Jest unit tests
  - ESLint linting
  - Commitlint validation
-   Chosen to ensure automated quality checks and commit message consistency.
### Release/versioning/changelog workflow
- :warning: NOT implemented due to time constraint.

## Versioning & Changelog
-   :warning: Not implemented due to time constraint.
-   Normally, semantic-release would automate version bumps and update `CHANGELOG.md`.
-   Pre-release workflow would run on `next` for beta/RC versions.
-   With extra time (~2 hours), automatic versioning and changelog generation could be added.

## Conventional Commits
-   Commit messages and PR titles follow `type(scope): short summary` format.
-   Breaking changes indicated by `!` after type or `BREAKING CHANGE:` footer.
-   Husky enforces locally; commitlint action enforces on PRs.

## Branch Protection
-   `master` and `next` require:
    -   Pull request before merging
    -   At least 1 approved review
    -   All required status checks passing
-   Force-push and direct commits disallowed.
-   Ensures bad commit messages or failing tests cannot be merged.
-   Enabled via GitHub settings

## Trade-offs / Alternatives
-   Semantic-release not implemented (time-limited assignment).
-   Husky internal `_` folder accidentally got included but only `commit-msg` is actively used. Can be removed but needs history cleaning.
-   Full release automation with GitHub Actions could be added in a longer timeframe.
-   Assigned more time for documentation instead.
