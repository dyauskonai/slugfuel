# Product brief

## Purpose

Help UCSC students turn their nutrition preferences and campus menus into practical meal choices.

## Primary user journey

1. Enter daily goals and dietary preferences.
2. Review today's progress and choose a meal period.
3. Compare suggested plates across dining halls.
4. Adjust foods and servings.
5. Confirm what was eaten.
6. See updated totals and remaining targets.

Browsing menus and comparing options should work before requiring an account.

## Goals and logging

Maintenance calories and a chosen calorie target are separate concepts. Initially accept editable user-entered targets. Automatic estimates are a future feature requiring separate validation and clear explanations.

Track calories, protein, carbohydrates, fat, and optional fiber. If goals conflict, explain the mismatch. Do not silently rewrite targets or claim an exact match. Display source calories rather than replacing them with a simplified macro calculation.

Allow portion changes, a simple manual food entry, and editing or deleting a logged entry. Keep planned meals separate from consumed meals. Define the selected date explicitly; use campus-local time for menu dates. Save the nutrition values used at logging time so a future recipe change does not rewrite history.

## Web beta scope

- Editable goals and a daily dashboard.
- Menus from all five halls, organized by date and meal.
- Plate building, portion adjustments, and logging.
- Explainable meal suggestions using remaining targets.
- Favorites and a view of favorites listed today.
- Saved preferences and history, with persistence introduced in stages.

Start with browser-local preferences and a meal log for the first complete flow. Add authenticated storage when cross-device history is introduced, with per-user access control.

## Later releases

- Opt-in favorite-food notifications, with duplicate prevention.
- Full-day planning.
- Expo mobile clients and store distribution.
- Learned preference ranking, only after collecting useful feedback and establishing a baseline.
- Optional calorie-target estimation, researched separately.

## Recommendation behavior

Recommend a specific plate and its dining hall together. Respect exclusions and known dietary labels, enforce realistic portions, and rank using nutrient fit and explicit preferences. Normalize scoring across units so grams and calories do not accidentally receive arbitrary weighting. Distinguish minimums, maximums, and desired ranges.

Offer several distinct options. When no option fits, show the mismatch and let the user adjust preferences. Unknown nutrient or dietary information must remain visible; missing labels must not be interpreted as proof that an item satisfies a restriction.

## Favorites

Use stable source food identifiers where available. Handle food-name variations explicitly and avoid merging different recipes just because their names resemble one another. Future alerts refer to a food being listed on a dated menu, not guaranteed stock. Trigger once per qualifying appearance according to the user's subscriptions.

## Evidence to collect

Observe whether students can find a suitable plate without coaching, how often they change a recommendation, whether they return, and where source data is incomplete. Establish a manual baseline before claiming time savings or recommendation improvements. Record only measured outcomes on the resume.
