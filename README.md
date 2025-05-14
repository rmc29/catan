# Fair dice app for Catan games 
This is a simple dice-rolling app to enforce expected probabilities when rolling two six-sided dice for board games like [(Settlers of) Catan](https://boardgamegeek.com/boardgame/13/catan) and its sequels.

Rather than rolling each D6 independently (which can cause an overabundance of 2s or 12s, or a shortage of 6s or 8s), it produces all 36 possible pairs once each in a random order (and then starts again if needed).

Ths was inspired by a similar Windows Mobile app written by Stephen McIntosh about 25 years ago.

The app is written in React Native and built using [Expo](https://expo.dev). You can either:
- install the [APK](https://expo.dev/accounts/rmc29/projects/catan/builds/f7829f18-4169-4078-a9db-7fb97a6eded4) on an Android device (I haven't tested it on iOS at all)
- or download the code and follow the Expo instructions below to build it on a desktop, and then run it in either a browser, an emulator on desktop, or sandboxed on a mobile device using Expo Go
- or follow the EAS instructions below to build the APK yourself.

## Expo instructions
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in:

- a [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- an [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## EAS instructions
[Expo Application Services](https://docs.expo.dev/tutorial/eas/introduction/) lets you build an Android APK (or the iOS equivalent) from an Expo project like this one.
```bash
eas build --platform android --profile preview
```
## Icon
The icon is from Flaticon. [Hexagon icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/hexagon)
