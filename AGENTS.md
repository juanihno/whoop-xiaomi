This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and Android-first compatibility. Provisional name: **whoop-xiaomi** (final product name TBD). Not affiliated with WHOOP or Xiaomi.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present). This repo uses **npm**.

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md
- Manual install (this project): https://docs.expo.dev/router/installation.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Expo native config

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

## Project architecture

Canonical docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/LICENSES.md`, `docs/DEVICE_CAPABILITIES.md`, `docs/ALGORITHM_NOTES.md`.

Pipeline: Wearable → Device Adapter → Normalized Health Data → Repository → SQLite → Algorithms → UI → Coach.

| Module | Location (when created) | UI may depend? |
| --- | --- | --- |
| UI | `src/app/`, `src/ui/` | — |
| Data | `src/domain/`, `src/data/` | via repositories only |
| Device | `src/devices/` | never Xiaomi directly |
| Algorithms | `src/algorithms/` | no; only derived data from repos |
| Coach | `src/coach/` | via coach API later |

Import rules:

- UI ↛ Xiaomi / BLE / SQL / algorithm formulas.
- Algorithms ↛ React Native UI and ↛ BLE.
- Device adapters emit raw samples only.
- Missing production data renders as `—`, never a fake score (Fake Device is a later, explicit provider).

## Implementation gates

Do **not** implement until the user explicitly approves the step:

- SQLite / repositories
- Fake Device
- Algorithms
- Coach
- Xiaomi BLE or any BLE library

`App.tsx` is an archived Today UI mock. Do not delete it until Today is rebuilt from real/fake repositories. It is **not** the app entry (`package.json` `main` is `expo-router/entry`).

## Licensing and references

- Intended license: MIT. **Do not add `LICENSE` until asked.**
- Do not copy Kodo or Gadgetbridge (AGPL).
- OpenStrap: UX/product reference only; do not port Flutter.

## Git

Do not create commits unless the user asks. Propose the message first. Never `--no-verify` unless asked.

## Agents

One concern per change. UI agents do not touch `src/devices/xiaomi`. Algorithm agents do not add screens. Stop after the requested step; do not skip ahead to BLE.
