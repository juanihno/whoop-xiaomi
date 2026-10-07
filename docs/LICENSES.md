# Licenses and third-party references

A final `LICENSE` file is **not** in the repository yet. Intended strategy is recorded here and in [DECISIONS.md](./DECISIONS.md). Do not add `LICENSE` until the owner explicitly asks.

## Intended project license

**MIT (or similar permissive license)** — decided 2026-10-06, file not created yet.

Consequences:

- We may study MIT-licensed projects (with attribution if we later copy snippets).
- We **must not** copy or port AGPL code (Kodo, Gadgetbridge). Doing so would force the whole app onto AGPL.

## Reference projects

| Project | License | Allowed use here |
| --- | --- | --- |
| [OpenStrap/edge](https://github.com/OpenStrap/edge) | MIT | UX, UI concepts, navigation, product ideas, data visualization. **Do not** port Flutter or WHOOP protocol code. |
| [kidneyweakx/Kodo](https://github.com/kidneyweakx/Kodo) | AGPL-3.0-or-later (Gadgetbridge derivative) | Conceptual BLE/architecture notes only. **No code copy, no Kotlin port.** |
| [Gadgetbridge](https://codeberg.org/Freeyourgadget/Gadgetbridge) | AGPLv3 | Protocol understanding from public docs/issues. **No code copy.** |

If an agent is tempted to paste from those repos, stop. Write original TypeScript. Record any future MIT snippet in this file with URL and attribution.

## Trademarks

WHOOP, Xiaomi, Mi, and Smart Band are trademarks of their owners. This project is independent. The folder name `whoop-xiaomi` is provisional.
