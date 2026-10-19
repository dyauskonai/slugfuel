# Menu importer

**Planned:** Python with an HTML parser; exact tooling follows source investigation.

Retrieve published UCSC dining menus, preserve source identifiers, normalize serving and nutrient information, validate coverage, and write dated records to storage. Run independently of page views.

First prove one hall's data can be retrieved accurately. Preserve unknown values, bound retries, avoid duplicate records, and record import failures. Use `data/raw/` for local debugging captures and `data/fixtures/` for small reviewed test examples. Do not silently turn an upstream error into an empty menu.

No importer, schedule, or Python environment exists yet.
