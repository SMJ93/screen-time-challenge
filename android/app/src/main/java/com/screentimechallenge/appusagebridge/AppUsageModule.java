package com.screentimechallenge.appusagebridge;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.util.Log;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class AppUsageModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;
  private static final String TAG = "AppUsageModule";
  private UsageStatsManager usageStatsManager;

  AppUsageModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  // Return the string name of the NativeModule
  @Override
  public String getName() {
    return "AppUsage";
  }

  // ReactMethod exposes methods to JavaScript
  @ReactMethod
  public void getAppUsage(int days, Promise promise) {
    try {
      Log.d(TAG, "getAppUsage");

      Calendar calendar = Calendar.getInstance();
      calendar.add(Calendar.DAY_OF_YEAR, -days);
      long startTime = calendar.getTimeInMillis();
      long endTime = System.currentTimeMillis();

      Map<String, UsageStats> usageStats = usageStatsManager.queryAndAggregateUsageStats(startTime, endTime);
      List<UsageStats> stats = new ArrayList<>();
      stats.addAll(usageStats.values());

      // @todo convert to writeable map so it can be sent back to JS

      promise.resolve(stats);

    } catch (Exception e) {
      promise.reject("Error", e);
    }
  }
}
