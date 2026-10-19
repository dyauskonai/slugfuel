# Development guide

## Open the project

Open `slugfuel.code-workspace` in VS Code, or choose **File → Open Folder** and select the repository. The workspace uses a relative folder path so it can move with the repository.

No dependencies are installed and no application commands exist yet. Do not expect `npm run dev` or a Python service to work until their respective projects are initialized.

## Start here

1. Read the root README and `docs/product.md`.
2. Follow milestone 0 in `docs/roadmap.md`.
3. Read the README in the folder you intend to work on.
4. Choose one small outcome and define what will demonstrate it works.
5. Implement, verify, and document that outcome when coding begins.

## Git workflow

The initial branch is `main`. Use short descriptive branches such as `feat/menu-source-investigation` or `docs/refine-meal-flow`. Make focused commits with clear messages. Review the diff for accidental data, credentials, generated files, and unrelated changes before committing.

This repository starts locally. A GitHub remote can be added later after choosing the account, repository visibility, and license. The issue and pull request templates become useful when hosted on GitHub; they do not require a remote today.

## Future tooling setup

When implementation starts, select currently supported versions, choose one JavaScript package manager, and commit its lockfile. Record the required Node and Python versions and verified install/run/test commands. Initialize only the component being worked on; the mobile directory can remain a documented placeholder.

Add formatting and linting configuration alongside the tools that enforce it. Add CI after there are meaningful checks to run. Editor extension recommendations are optional suggestions, not project dependencies.

## Verification priorities

- Serving multipliers, units, missing values, and meal-log edits.
- Menu dates and campus-local timezone boundaries.
- Parser behavior for source changes and unavailable pages.
- Idempotent imports and preservation of known data after failures.
- Exclusions, realistic portions, and impossible recommendation targets.
- Keyboard operation, narrow screens, and meaningful error states.
- User-data ownership when authentication is introduced.

Keep unit tests near the relevant module; reserve root `tests/` for integration and complete user-flow tests.

## Data and secrets

`.env` files and local raw source captures are ignored. Once environment variables are needed, add `.env.example` with names and placeholders only. Use synthetic user data in shared fixtures. Do not commit personal meal histories, account tokens, database dumps, or private exports.

## Learning and documentation

Keep decisions explainable. For each meaningful change, be able to describe the problem, the chosen approach, a tradeoff, and the evidence that it works. Update the README when commands or supported behavior change. Keep planned features labeled as planned.
