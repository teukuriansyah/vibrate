import { WebPlugin } from '@capacitor/core';

import type { VibratePlugin } from './definitions';

export class VibrateWeb extends WebPlugin implements VibratePlugin {
  async turnOnVibrate(): Promise<{ vibrate: string }> {
    throw new Error ("This plugin not compatible for web")
  }
  async turnOffVibrate(): Promise<{ vibrate: string }> {
    throw new Error ("This plugin not compatible for web")
  }
}
