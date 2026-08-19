export interface VibratePlugin {
  turnOnVibrate(): Promise<{ vibrate: string }>;
  turnOffVibrate(): Promise<{ vibrate: string }>;
}
