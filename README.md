# SlugFuel

### Your goals. Today's menus. A better plan for campus dining.

SlugFuel is a planned nutrition dashboard for UC Santa Cruz students. It will connect personal nutrition goals and meal logging with dining hall menus, helping students decide **where to eat and what to put on their plate**.

**Status:** Project foundation · **First platform:** Web · **Later:** iOS and Android

> This repository currently contains project structure, editor configuration, and planning documents. Application code, dependencies, live menu ingestion, and deployment have not been added. SlugFuel is a working name.

[Product brief](docs/product.md) · [Build roadmap](docs/roadmap.md) · [Architecture](docs/architecture.md) · [Development guide](docs/development.md) · [Design direction](docs/design.md)

## The product

Students should be able to set their goals, compare meals across campus, log what they eat, and discover when their favorite foods return.

| Area | Intended experience |
| --- | --- |
| Dashboard | See daily calorie, protein, carbohydrate, fat, and optional fiber targets, with consumed and remaining amounts. |
| Dining menus | Browse the five dining halls by date and meal, with serving sizes and available nutrition information. |
| Meal suggestions | Compare realistic plates across halls, understand why each fits, and adjust portions or swap foods. |
| Meal log | Confirm what was eaten and update the dashboard; planned meals stay separate from consumed meals. |
| Favorites | Save foods and see where they appear today; opt-in notifications follow in a later phase. |

## First milestone

**One hall → one plate → accurate totals → a logged meal → an updated dashboard.**

Validate access to menu and nutrition data first. Complete this small flow before expanding to all halls or introducing recommendations. See the [roadmap](docs/roadmap.md) for completion criteria.

## Project map

```text
slugfuel/
├── apps/
│   ├── web/                 Website and web API — planned Next.js + TypeScript
│   └── mobile/              Future iOS/Android client — planned Expo + React Native
├── services/
│   └── menu-importer/       Python menu collection, normalization, and validation
├── packages/
│   ├── domain/              Shared food, serving, goal, and meal definitions
│   └── recommendations/     Plate generation, scoring, and explanations
├── database/                Schema design, future migrations, and synthetic seeds
├── data/
│   ├── fixtures/            Small reviewed examples for parsing and tests
│   └── raw/                 Local source captures; contents ignored by Git
├── tests/                   Future integration and complete user-flow tests
├── docs/                    Product scope, architecture, decisions, and workflow
├── .github/                 Issue and pull request templates
├── .vscode/                 Shared editor preferences and extension suggestions
└── slugfuel.code-workspace  Portable VS Code workspace
```

Each project folder contains a README explaining its purpose and boundaries. These are directory boundaries only; a package workspace and build tooling have not been initialized.

## Planned technology

| Concern | Initial choice | Purpose |
| --- | --- | --- |
| Web interface | Next.js, React, TypeScript | Dashboard, menus, meal logging, and server endpoints |
| Styling | Tailwind CSS | Consistent spacing, typography, and responsive layouts |
| Data importer | Python and an HTML parser | Retrieve published menus and normalize their data |
| Storage | PostgreSQL, initially through Supabase | Store menus, foods, and eventually authenticated user data |
| Recommendations | TypeScript | Deterministic scoring with explanations and testable constraints |
| Mobile | Expo and React Native, later | Reuse backend contracts and suitable shared logic |
| Deployment | Web hosting plus a scheduled importer, to be configured | Serve the app and refresh menus independently |

Versions and package tooling will be selected when implementation begins. No accounts, subscriptions, or services are required to browse this foundation.

## Work in VS Code

Open **`slugfuel.code-workspace`**, then start with [the development guide](docs/development.md). Suggested extensions are optional; none are installed by this repository.

There are no install, development-server, or test commands yet. Add verified commands here when the corresponding software exists.

## Data and recommendation principles

- Preserve published serving sizes, units, source links, and retrieval times.
- Keep missing nutrition values distinct from zero.
- Use source nutrition values; never invent missing values with a language model.
- Suggest plausible plates and explain tradeoffs when no option meets the requested targets.
- Treat user exclusions as constraints and preferences as ranking inputs.
- Log a meal only after the user confirms it was eaten.
- Label old or incomplete menus clearly; do not present yesterday's availability as today's.
- Publish usage and accuracy claims only after measuring them.

## Source and affiliation

Menu source: [UCSC Dining Menus](https://nutrition.sa.ucsc.edu/). Related information: [UCSC dietary needs and nutrition tools](https://dining.ucsc.edu/wellness/dietary/).

This is an independent student project, not an official UCSC service. The source homepage was accessible during initial research, but individual hall pages returned errors; detailed nutrition coverage and a reliable import method remain to be verified. Published menus may differ from what is served. Allergen information reflects source labels and cannot establish allergy safety.

## Contributing and ownership

Use the [development workflow](docs/development.md), [issue templates](.github/ISSUE_TEMPLATE/), and [pull request template](.github/pull_request_template.md) as useful. Record meaningful technical choices in [decisions](docs/decisions.md).

No open-source license has been selected. Choose one deliberately before inviting reuse or outside contributions. Third-party data and assets retain their own terms.
