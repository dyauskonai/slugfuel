import { requireOptionalNativeModule } from 'expo-modules-core';
const store = requireOptionalNativeModule<{ load(): string | null; save(state: string): void }>('MealStore');
export function load(): string | null {
  if (!store) throw new Error('Install the Android development build. Expo Go does not include the Kotlin food-log module.');
  return store.load();
}
export function save(state: string) {
  if (!store) throw new Error('Android storage is unavailable. Build and install SlugFuel first.');
  store.save(state);
}
