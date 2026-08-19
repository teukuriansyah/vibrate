import { registerPlugin } from '@capacitor/core';

import type { VibratePlugin } from './definitions';

const Vibrate = registerPlugin<VibratePlugin>('Vibrate', {
  web: () => import('./web').then((m) => new m.VibrateWeb()),
});

export * from './definitions';
export { Vibrate };
