# Screen Time Challenge

Your challenge is to build a simple Screen Time app for Android. The app should provide an overview over which applications the user has spent the most time in today and during the last 7 days, as illustrated in this wireframe:

![Wireframe](/wireframe.png?raw=true)

## Technical requirements

* The app should run on Android 5.0 or later
* The user interface for the app should be made using [React Native](https://facebook.github.io/react-native/)
* Interactions with the [App Usage Statistics API](https://developer.android.com/reference/android/app/usage/package-summary.html) should be handled by your own [Native Module](https://facebook.github.io/react-native/docs/native-modules-android)

## Assessment

With this challenge, we primarily want to assess your ability to:

* Write high-quality JavaScript (or a typed superset of JavaScript)
* Build user interfaces using React (Native) best practices
* Utilise relevant Android APIs

## Investment

We suggest that you allow 2-3 hours to tackle this challenge. With this short time frame in mind, we're not expecting a finished, polished product. Just make sure to highlight and discuss any outstanding work as part of your submission.

## Submission

Please submit your work as a pull request to this repository.

## Resources

* [Native Modules (Android)](https://facebook.github.io/react-native/docs/native-modules-android)
* [App Usage Statistics API](https://developer.android.com/reference/android/app/usage/package-summary.html)


# If I had more time I would:

- Finish off the native API - need to get the app usage back and then convert response to `WriteAbleMap`
- Check if the user has permission to access usage data, if not redirect the user to the settings screen `Settings.ACTION_USAGE_ACCESS_SETTINGS`
- Check if the user is using a compatible version of Android to get app usage data - Android 5.0 Lollipop (API Level 21)
- Type the response from native in JS
- Handle errors
- Write Detox tests for flows
