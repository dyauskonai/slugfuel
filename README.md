> **Work-in-progress mobile branch:** Contains a new Python menu/AI-estimation backend (`server/app.py`) and a React Native/Expo Android scaffold with Kotlin local-storage module (`apps/mobile`). **The mobile interface (`App.tsx`) is not implemented yet, so the mobile app does not build or run.** Dependency installation was blocked by unavailable network access and an incomplete package cache. Native compilation and live backend integrations are unverified. Python syntax checks passed. The existing web starter is unchanged.
>
> Backend: export `SLUGFUEL_API_TOKEN` and optionally `OPENAI_API_KEY` / `OPENAI_MODEL`, then run `python3 server/app.py`. Configuration examples are in `.env.example`; environment files are not automatically loaded. The service binds to loopback on port 8000. Routes: `GET /health`, authenticated `GET /locations`, `GET /menu?location=40&date=YYYY-MM-DD`, and `POST /estimate` with `food` and `portion`. Authenticated requests use `Authorization: Bearer <your backend token>`. Never place the OpenAI key in a mobile bundle.
>
> Menu data is adapted from UCSC FoodPro HTML, with date validation. Calorie/protein values remain unknown until manually supplied or estimated; AI output is explicitly marked as an estimate. Android storage uses app-private SharedPreferences and requires a native development build, not Expo Go. The local HTTP service is for development; a public deployment still needs production hosting and per-user authentication/rate limits.

<div align="center">

# SlugFuel

**Find your next meal. Stay on track with your goals.**

Personalized nutrition planning for UC Santa Cruz dining.

</div>

## Overview

SlugFuel is a web application in development for students navigating UC Santa Cruz's five dining halls. It is designed to combine campus menus, personal nutrition goals, and meal tracking in one place, helping students choose where to eat and build meals around their preferences.

The central idea is to connect what is being served with what a student needs for the rest of the day. Recommendations will consider remaining calorie and macronutrient targets, dietary preferences, and available foods, with specific portions and alternatives across dining halls.

> **Project status:** Early development. The repository currently provides a runnable React frontend foundation. The features below are planned and are not yet available.

## Planned features

**Personal nutrition dashboard.** Set daily calorie, protein, carbohydrate, fat, and fiber goals. View logged intake and remaining targets in a single overview.

**Menus across campus.** Explore all five dining halls by date and meal. Compare food options, serving sizes, and published nutrition information, with filters for dietary preferences and exclusions.

**Meal recommendations.** Discover suggested plates that fit the day's remaining targets. See which hall serves each option, why it was recommended, and how substitutions change its nutritional profile.

**Flexible meal tracking.** Build a plate, adjust portions, and log what was eaten. Update or remove entries as needed, keeping planned meals separate from confirmed intake.

**Favorites and notifications.** Save favorite foods, find them across dining halls, and opt into alerts when they return to a published menu.

## Recommendation approach

The planned recommendation engine will generate realistic meal combinations and rank them against user-defined goals and preferences. Food exclusions will be applied before ranking, and results will explain tradeoffs when no option satisfies every target.

Nutrition calculations will use published serving sizes. Missing values will remain unknown, and menu dates and source freshness will be retained to make the underlying information clear.

## Installation

- **Node.js 22.12+** and **npm**.

### Get the source

Clone the repository and install the frontend dependencies:

```bash
git clone https://github.com/dyauskonai/slugfuel.git
cd slugfuel/apps/web
npm ci
```

If you downloaded a ZIP instead, open a terminal in the extracted project's `apps/web` directory and run `npm ci`.

## Running

From `apps/web`, start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal. The current version launches the frontend starter.

## Development

Run the following commands from `apps/web`:

```bash
npm run build     # Type-check and build for production
npm run lint      # Run source checks
npm run preview   # Serve the production build locally
```

Run `npm run build` before starting the production preview.

### Tech stack

| Layer | Technology |
| --- | --- |
| Interface | React 19, TypeScript |
| Styling | CSS |
| Development and builds | Vite, npm |
| Source checks | Oxlint |

## Data source

The intended menu source is [UCSC Dining Menus](https://nutrition.sa.ucsc.edu/). Live menu integration is planned. Published menus may change, and nutrition totals depend on source data and serving sizes.

SlugFuel is an independent project and is not affiliated with or endorsed by UC Santa Cruz.
