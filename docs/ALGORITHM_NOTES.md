# Algorithm notes

No production algorithms are implemented yet. This file is the place to cite methods **before** coding them.

Rules:

- Functions stay pure and versioned.
- Persist `algorithmId` + `version` with derived rows (when SQLite exists).
- If inputs are missing, do not invent a score for production UI.
- Do not describe outputs as “WHOOP recovery” or equivalent.

## Planned modules

| Module | Intent | Method (TBD) | Version |
| --- | --- | --- | --- |
| HRV | e.g. RMSSD from RR if available | Cite paper before implement | — |
| Recovery | Composite readiness from HRV/sleep/RHR | Cite before implement | — |
| Sleep | Summary from stages/duration | Cite before implement | — |
| Strain / exertion | Cardiovascular load from HR/activity | Cite before implement | — |
| Trends | Multi-day aggregates | Cite before implement | — |

## Citations

Add bibliographic entries here when a method is chosen. Empty until the algorithms step is approved.
