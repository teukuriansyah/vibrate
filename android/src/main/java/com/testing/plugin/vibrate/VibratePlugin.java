package com.testing.plugin.vibrate;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import android.os.Vibrator;
import android.os.VibrationEffect;
import android.content.Context;
import android.os.VibratorManager;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Vibrate")
public class VibratePlugin extends Plugin {

    private Vibrate implementation = new Vibrate();

  @PluginMethod
  public void turnOnVibrate(PluginCall call) {
    long[] duration = {0,700,300,0,700,300,0,700,300,0,700,300,0,700,300,};
    VibrationEffect.createWaveForm(duration,-1);
    JSObject ret = JSObject();
    ret.put("vibrate","On");
    call.resolve(ret);
  }

  @PluginMethod
  public void turnOffVibrate(PluginCall call) {
    VibratorManager vibratorManager = (VibratorManager) getSystemService(Context.VIBRATOR_MANAGER_SERVICE);

    if (vibratorManager != null) {
    // Fetch the default system vibrator
      Vibrator vibrator = vibratorManager.getDefaultVibrator();
    
    // Stop the active vibration immediately
      vibrator.cancel();
    }
    
    ret.put("vibrate","Off");
    call.resolve(ret);
  }
}
