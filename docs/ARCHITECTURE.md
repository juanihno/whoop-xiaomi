# Architecture

Provisional project name: **whoop-xiaomi**. The repository and Expo slug stay `whoop-xiaomi` until a final product name is chosen. This app is not affiliated with WHOOP or Xiaomi.

## Goal

Android-first, local-first health app. First wearable: Xiaomi Smart Band 9. The UI must never depend on Xiaomi. Device access goes through an abstract adapter so other wearables can be added later.

Algorithms are our own. Do not claim equivalence with WHOOP.

## Layers

```
Wearable
  → Device Adapter
  → Normalized Health Data
  → Repository / Data Layer
  → SQLite
  → Algorithms
  → UI
  → Coach (deterministic rules first)
```

| Module | Responsibility | Must not |
| --- | --- | --- |
| **UI** (`src/app`, `src/ui`) | Screens, navigation, presentational components | Calculate health metrics, talk to BLE/Xiaomi, run SQL |
| **Data** (`src/domain`, `src/data`) | Types, SQLite, repositories, mappers | Render UI, contain Xiaomi protocol |
| **Device** (`src/devices`) | `DeviceAdapter` contract, Fake now, Xiaomi later | Import React screens or algorithm formulas |
| **Algorithms** (`src/algorithms`) | HRV, Recovery, Sleep, Strain, Trends | Import React Native UI or BLE |
| **Coach** (`src/coach`) | Local rules over derived metrics | Call devices or invent missing samples |
| **Testing** | Independent tests per module | Couple modules through UI |

Target folders (`src/domain`, `src/data`, `src/devices`, `src/algorithms`, `src/coach`) are **not created until later implementation steps**. Do not add SQLite, BLE, algorithms, or Coach code in the current scaffold.

## Import graph

- UI → repositories / view-models only (when they exist).
- UI ↛ `src/devices/xiaomi`.
- Algorithms ↛ `react-native` UI, ↛ BLE.
- Device adapters emit **raw** normalized samples only.
- Derived scores (recovery, strain, HRV summaries) are written by the algorithm pipeline, with method name + version stored alongside results.

## Current vs later

| Now (steps 1–2) | Later (explicit approval required) |
| --- | --- |
| Docs, Cursor rules, Expo Router, placeholder screens | SQLite, Fake Device, algorithms, Coach, BLE |

## Runtime

- Expo SDK 57, TypeScript strict, Android first.
- Expo Go is valid for UI placeholders and (later) Fake Data.
- BLE requires a development build. Do not install BLE libraries until that phase.

See [DECISIONS.md](./DECISIONS.md) for ADRs.
