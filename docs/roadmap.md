# Build roadmap

Work through these gates in order. Estimates should follow the data-access investigation. Every item below is planned, not completed.

## 0 · Validate the source

- [ ] Inspect one hall's menu, food detail pages, serving sizes, and identifiers.
- [ ] Establish an appropriate, repeatable data retrieval method.
- [ ] Compare ten extracted food records with the published source.
- [ ] Record available and missing nutrient fields.
- [ ] Capture a small reviewed fixture and document its date and origin.

**Done when:** the data can support correct portion arithmetic for a small meal. If source access fails, document the limitation, investigate a supported feed, and use labeled fixtures for independent UI work.

## 1 · Complete one meal flow

- [ ] Initialize web tooling and record verified setup commands.
- [ ] Enter editable goals and display one hall's menu.
- [ ] Select foods and change serving quantities.
- [ ] Confirm, edit, and delete a logged meal.
- [ ] Update dashboard totals and retain them on reload.
- [ ] Verify portion calculations, missing values, and date boundaries.

**Done when:** one hall → one plate → accurate totals → confirmed log → dashboard works without manual intervention.

## 2 · Expand reliable menu coverage

- [ ] Design the database and initial migrations.
- [ ] Support all five halls and meal periods.
- [ ] Schedule imports with bounded retries and useful failure logs.
- [ ] Handle duplicate imports, empty responses, stale data, and recipe changes.

**Done when:** published menus are represented accurately, and source failures are visible without corrupting known data.

## 3 · Recommend meals

- [ ] Define realistic portions and plate combinations.
- [ ] Apply exclusions before preference scoring.
- [ ] Score nutrient fit with explicit weighting and normalized units.
- [ ] Explain recommendations, alternatives, and impossible matches.
- [ ] Support swaps and recalculate totals.

**Done when:** suggestions are plausible, traceable to the menu, and backed by tests for constraints and edge cases.

## 4 · Release a useful web beta

- [ ] Add favorites and an available-today view.
- [ ] Finish responsive, keyboard, loading, empty, and error states.
- [ ] Choose persistence; add authentication and ownership checks if introducing cloud user history.
- [ ] Deploy with source attribution and menu freshness.
- [ ] Observe 5–10 students using the product and fix the main friction points.
- [ ] Document actual feedback and verified outcomes.

**Done when:** students can independently use the core flow on their phones.

## 5 · Follow demonstrated demand

- [ ] Opt-in notifications with stable food identity and duplicate prevention.
- [ ] Daily planning.
- [ ] Mobile clients and store testing.
- [ ] Preference learning compared against the initial ranking baseline.

Keep internship applications and interview practice running alongside project work. A usable web beta is already a meaningful portfolio milestone.
