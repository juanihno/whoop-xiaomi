// Unused after Expo Router. Kept so the archived App.tsx mock still compiles.
// App entry is package.json "main": "expo-router/entry".
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
