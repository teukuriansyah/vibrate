import { registerPlugin } from '@capacitor/core';

import type { VibratePlugin } from './definitions';

const Vibrate = registerPlugin<VibratePlugin>('Vibrate');

export * from './definitions';
export { Vibrate };
