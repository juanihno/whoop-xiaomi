# Device capabilities

Do not assume Xiaomi Smart Band 9 exposes every metric the product wants. Investigate and update this matrix **before** implementing each integration.

Status values:

- `unknown` — not verified for this project yet
- `unsupported` — device does not provide it
- `raw` — samples available from the device
- `inferred` — we derive it with our algorithms from other raw inputs

## Xiaomi Smart Band 9 (first target)

| Metric | Status | Notes |
| --- | --- | --- |
| Heart rate | unknown | |
| Resting heart rate | unknown | Often derived, not a native stream |
| RR intervals | unknown | Frequently missing on consumer bands |
| HRV | unknown | Likely derived (e.g. from RR or HR) |
| Sleep | unknown | |
| Sleep stages | unknown | Granularity TBD |
| Steps | unknown | |
| SpO2 | unknown | |
| Calories | unknown | Vendor estimates vs our own TBD |
| Workouts | unknown | |
| Stress | unknown | Vendor score vs raw TBD |
| Activity | unknown | |
| Recovery | inferred (planned) | Our algorithm; not a Xiaomi score |
| Exertion / strain | inferred (planned) | Our algorithm; not a WHOOP/Xiaomi score |

## Other devices

None. Future adapters must add a table here before implementation.

## Fake Device (planned)

A `FakeDeviceAdapter` will generate realistic **raw** series so UI and algorithms can be built without BLE. Production UI must not fabricate numbers when a real device has not synced (`—` instead of a plausible value).

## Research notes (non-implementation)

Public third-party reports (Gadgetbridge docs, Kodo README) suggest Band 9 uses Xiaomi **SPPv2**, often needs an official-app auth token, and differs from Band 9 Active. Those projects are **AGPL**. Use them only as conceptual reference. Do not copy code. See [LICENSES.md](./LICENSES.md).

Last updated: 2026-10-06. All Xiaomi rows remain `unknown` until a dedicated research spike.
