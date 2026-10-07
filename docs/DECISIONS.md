# Decisions (ADR log)

## ADR-001 — Repository name stays `whoop-xiaomi`

- **Date:** 2026-10-06
- **Status:** Accepted
- **Decision:** Keep Git/Expo name `whoop-xiaomi` until a final product name is chosen.
- **Notes:** Trademark risk remains. Disclaimers in docs. Rename later as a dedicated change.

## ADR-002 — License file deferred; intended MIT

- **Date:** 2026-10-06
- **Status:** Accepted
- **Decision:** Do not create `LICENSE` yet. Intended license is MIT (or similar). Strategy lives in [LICENSES.md](./LICENSES.md).
- **Consequence:** Treat the codebase as **not** AGPL-compatible for inbound copies. No Kodo/Gadgetbridge source.

## ADR-003 — Layered architecture, device adapter, Fake first

- **Date:** 2026-10-06
- **Status:** Accepted
- **Decision:** UI / Data / Device / Algorithms / Coach / Testing are separate. UI never imports Xiaomi. Fake Device before BLE.
- **See:** [ARCHITECTURE.md](./ARCHITECTURE.md)

## ADR-004 — Own algorithms, not WHOOP clones

- **Date:** 2026-10-06
- **Status:** Accepted
- **Decision:** Implement our own HRV, Recovery, Sleep, Strain, Trends. Cite public methods in [ALGORITHM_NOTES.md](./ALGORITHM_NOTES.md). Never claim WHOOP equivalence.

## ADR-005 — Coach is local deterministic rules first

- **Date:** 2026-10-06
- **Status:** Accepted
- **Decision:** First coach = rules over derived metrics (templates, thresholds). BYOK/LLM later, interface only until then.

## ADR-006 — Android first, Expo SDK 57, Expo Router in `src/app`

- **Date:** 2026-10-06
- **Status:** Accepted
- **Decision:** Expo Router file-based routes live in `src/app/`. Non-route code stays outside `src/app/`. Continuous Native Generation: never hand-edit `ios/` or `android/`.
- **BLE:** No BLE library until a later approved step. Expo Go for UI placeholders.

## ADR-007 — Git: no unsolicited commits

- **Date:** 2026-10-06
- **Status:** Accepted
- **Decision:** Agents must not commit unless the user asks. Propose the message first.
