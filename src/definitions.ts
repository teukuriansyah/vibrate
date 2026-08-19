export interface VibratePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
