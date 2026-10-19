# Decision log

Record decisions when they affect multiple parts of the project. Keep rationale and a condition for revisiting them.

| Decision | Status | Rationale | Revisit when |
| --- | --- | --- | --- |
| Use SlugFuel as the working name | Provisional | Gives the project a consistent identity during setup | Before public branding and domain purchase |
| Release the website before native apps | Accepted direction | Validates the main user flow with less distribution work | Students are using the web beta and native features have clear value |
| Use one repository with separate component folders | Accepted direction | Keeps documentation, importer, and clients together while clarifying responsibilities | Actual build tooling or team needs suggest a change |
| Begin with deterministic meal ranking | Accepted direction | Works with explicit goals and can explain its choices | Enough feedback exists to evaluate a learned approach |
| Keep ingestion separate from visitor requests | Accepted direction | Avoids repeated source requests and isolates failures | A supported source API changes the operational requirements |
| Start with user-entered nutrition targets | Accepted direction | Keeps initial scope focused on menu comparison and logging | A separately validated target-estimation feature is requested |
| Defer version pins and package manifests | Setup decision | No application implementation has begun | The first component is initialized |
| Leave license and remote unconfigured | Pending owner choice | Publishing and reuse terms have not been selected | Preparing a public or collaborative repository |

For a larger decision, add a dated entry below with context, options, choice, consequences, and verification.
