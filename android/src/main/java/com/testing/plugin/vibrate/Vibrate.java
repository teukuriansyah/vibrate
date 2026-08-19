package com.testing.plugin.vibrate;

import com.getcapacitor.Logger;

public class Vibrate {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
