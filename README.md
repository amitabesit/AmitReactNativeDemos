# AmitReactNativeDemos

A React Native demo application showcasing various features including splash screen, login screen, and a grid layout.

## Project Information

- **React Native Version**: 0.75.5
- **React Version**: 18.3.1
- **Node Requirement**: >= 18
- **Package Manager**: Yarn

## Features

1. **Splash Screen**
   - 5-second display duration
   - Auto-navigation to Login screen

2. **Login Screen**
   - Pre-filled credentials
   - Loading animation
   - Simulated 2-second authentication

3. **Home Screen**
   - Grid layout (2 columns)
   - Numbers from 1 to 100
   - Scrollable interface

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js (version >= 18)
- Yarn package manager
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
yarn install
```

3. Install iOS dependencies:
```bash
cd ios && pod install && cd ..
```

## Available Commands

### General Commands
```bash
# Start Metro bundler
yarn start

# Start Metro bundler with cache reset
yarn start --reset-cache

# Run tests
yarn test

# Run linter
yarn lint
```

### Android Commands
```bash
# Run Android app in debug mode
yarn android

# Clean Android build
cd android && ./gradlew clean && cd ..

# Clean Android build and run
yarn android:clean

# Generate Android release APK
cd android && ./gradlew assembleRelease && cd ..

# Clean and generate release APK
cd android && ./gradlew clean assembleRelease && cd ..
```

### iOS Commands
```bash
# Run iOS app
yarn ios

# Run on specific iOS device (e.g., iPhone 14)
yarn ios --device="iPhone 14"

# Clean iOS build
cd ios && rm -rf build/ && cd ..

# Clean pods
cd ios && pod deintegrate && pod install && cd ..
```

## Project Structure

```
src/
  ├── screens/
  │   ├── SplashScreen.tsx
  │   ├── LoginScreen.tsx
  │   └── HomeScreen.tsx
  └── ...
```

## Dependencies

Main dependencies used in this project:
- @react-navigation/native: ^7.1.10
- @react-navigation/native-stack: ^7.3.14
- react: 18.3.1
- react-native: 0.75.5
- react-native-safe-area-context: ^5.4.1
- react-native-screens: ^4.11.1

## Development Dependencies

Key development tools:
- TypeScript: 5.0.4
- Jest: ^29.6.3
- ESLint: ^8.19.0
- Prettier: 2.8.8

## Troubleshooting

Common issues and solutions:

1. **Build fails after pulling new changes**
   ```bash
   # Android
   cd android && ./gradlew clean && cd ..
   yarn install
   
   # iOS
   cd ios && pod deintegrate && pod install && cd ..
   ```

2. **Metro bundler issues**
   ```bash
   yarn start --reset-cache
   ```

3. **Android build errors**
   ```bash
   cd android
   ./gradlew clean
   cd ..
   yarn android
   ```

4. **iOS build errors**
   ```bash
   cd ios
   pod deintegrate
   pod install
   cd ..
   yarn ios
   ```

## License

This project is open source and available under the MIT License.

## Author

Amit Singh

## Version History

- 0.0.1: Initial release
  - Basic implementation of splash screen
  - Login screen with animation
  - Grid layout implementation 