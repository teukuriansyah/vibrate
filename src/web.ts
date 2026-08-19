import { WebPlugin } from '@capacitor/core';

import type { VibratePlugin } from './definitions';

export class VibrateWeb extends WebPlugin implements VibratePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
