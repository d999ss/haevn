# Haevn App Build Instructions

This document provides comprehensive instructions for building, running, and deploying the Haevn iOS application across different environments.

## Prerequisites

Before building the Haevn app, ensure you have the following installed:

- macOS 12.0 or later
- Xcode 14.0 or later
- Swift 5.7 or later
- CocoaPods 1.11.0 or later
- Git 2.30.0 or later
- Ruby 2.7.0 or later (for fastlane)

## Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/haevn/ios-app.git
cd ios-app
```

### 2. Install Dependencies

```bash
# Install CocoaPods if not already installed
sudo gem install cocoapods

# Install project dependencies
pod install

# Install fastlane for automated builds and deployments
gem install fastlane
```

### 3. Configure Environment Files

The app uses configuration files for different environments. Copy the example files and configure them:

```bash
# Copy example configuration files
cp Config/Configuration.example.xcconfig Config/Configuration.debug.xcconfig
cp Config/Configuration.example.xcconfig Config/Configuration.release.xcconfig
cp Config/Configuration.example.xcconfig Config/Configuration.staging.xcconfig
```

Edit each configuration file with the appropriate values for:

- `API_BASE_URL`: Base URL for the API
- `FLOWSTATE_API_KEY`: API key for FlowState integration
- `STRIPE_PUBLISHABLE_KEY`: Publishable key for Stripe
- `MIXPANEL_TOKEN`: Token for Mixpanel analytics
- `ONESIGNAL_APP_ID`: App ID for OneSignal push notifications

### 4. Set Up Certificates and Provisioning Profiles

1. Open Xcode preferences
2. Navigate to Accounts tab
3. Add your Apple Developer account
4. Select the Haevn team
5. Click "Manage Certificates" and create development and distribution certificates
6. Download and install provisioning profiles for each environment

## Build Configurations

The Haevn app has three main build configurations:

1. **Debug**: Used for development with debugging enabled
2. **Staging**: Used for testing with staging backend services
3. **Release**: Used for production builds

Each configuration uses its own:
- API endpoints
- Feature flag defaults
- Analytics settings
- Push notification configuration

## Building the App

### Building from Xcode

1. Open `Haevn.xcworkspace` in Xcode
2. Select the desired scheme (Debug, Staging, or Release)
3. Select the target device or simulator
4. Click the Build button (⌘B) or Run button (⌘R)

### Building from Command Line

```bash
# Build for development
xcodebuild -workspace Haevn.xcworkspace -scheme "Haevn Debug" -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 14 Pro' build

# Build for staging
xcodebuild -workspace Haevn.xcworkspace -scheme "Haevn Staging" -configuration Staging -destination 'platform=iOS Simulator,name=iPhone 14 Pro' build

# Build for release
xcodebuild -workspace Haevn.xcworkspace -scheme "Haevn Release" -configuration Release -destination 'platform=iOS Simulator,name=iPhone 14 Pro' build
```

### Building with Fastlane

```bash
# Build for development
fastlane build_debug

# Build for staging
fastlane build_staging

# Build for release
fastlane build_release
```

## Running Tests

### Running Tests from Xcode

1. Open `Haevn.xcworkspace` in Xcode
2. Select the test scheme
3. Press ⌘U to run all tests

### Running Tests from Command Line

```bash
# Run unit tests
xcodebuild test -workspace Haevn.xcworkspace -scheme "Haevn Tests" -destination 'platform=iOS Simulator,name=iPhone 14 Pro'

# Run UI tests
xcodebuild test -workspace Haevn.xcworkspace -scheme "Haevn UI Tests" -destination 'platform=iOS Simulator,name=iPhone 14 Pro'
```

### Running Tests with Fastlane

```bash
# Run all tests
fastlane test

# Run unit tests only
fastlane unit_tests

# Run UI tests only
fastlane ui_tests
```

## Deployment

### TestFlight Deployment

#### Using Xcode

1. Select the Release scheme
2. Select Generic iOS Device as the target
3. Go to Product > Archive
4. Once archiving is complete, click "Distribute App"
5. Select "App Store Connect" and follow the prompts

#### Using Command Line

```bash
# Archive the app
xcodebuild -workspace Haevn.xcworkspace -scheme "Haevn Release" -configuration Release -destination 'generic/platform=iOS' archive -archivePath ./build/Haevn.xcarchive

# Export the archive
xcodebuild -exportArchive -archivePath ./build/Haevn.xcarchive -exportOptionsPlist ExportOptions.plist -exportPath ./build
```

#### Using Fastlane

```bash
# Deploy to TestFlight
fastlane beta

# Deploy to TestFlight with specific version and build number
fastlane beta version:1.2.0 build_number:42
```

### App Store Deployment

```bash
# Deploy to App Store
fastlane release

# Deploy to App Store with specific version
fastlane release version:1.2.0
```

## Continuous Integration

The Haevn app uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/ci.yml`.

### CI Workflow

1. **Pull Request Checks**:
   - Lint code with SwiftLint
   - Build the app
   - Run unit tests
   - Run UI tests on key flows

2. **Merge to Develop**:
   - Build the app
   - Run all tests
   - Deploy to TestFlight (internal testers)

3. **Release Branch**:
   - Build the app
   - Run all tests
   - Deploy to TestFlight (external testers)

4. **Merge to Main**:
   - Build the app
   - Run all tests
   - Deploy to App Store Connect (pending review)

## Feature Flags

The app uses Firebase Remote Config for feature flags. See [FEATURE_FLAGS.md](FEATURE_FLAGS.md) for details.

To build with specific feature flag overrides:

```bash
# Override feature flags for development
FEATURE_FLAGS="enable_new_booking_flow=true,enable_crew_chat=false" fastlane build_debug
```

## Troubleshooting Common Build Issues

### CocoaPods Issues

If you encounter CocoaPods-related issues:

```bash
# Update CocoaPods
sudo gem update cocoapods

# Clean CocoaPods cache
pod cache clean --all

# Reinstall pods
pod deintegrate
pod install
```

### Code Signing Issues

If you encounter code signing issues:

1. Check that your certificates are valid in Keychain Access
2. Verify provisioning profiles in Xcode settings
3. Try resetting the signing:

```bash
# Clean derived data
rm -rf ~/Library/Developer/Xcode/DerivedData

# Reset signing
fastlane match development --force
fastlane match appstore --force
```

### Build Errors

For general build errors:

1. Clean the build folder (Shift+⌘+K in Xcode)
2. Delete derived data:

```bash
rm -rf ~/Library/Developer/Xcode/DerivedData
```

3. Verify Swift and Xcode versions match requirements

## Environment-Specific Configurations

### Development Environment

- Points to development API endpoints
- Debug logging enabled
- Analytics in debug mode
- All feature flags available via debug menu
- Mock data available for offline development

### Staging Environment

- Points to staging API endpoints
- Limited logging
- Analytics with staging tag
- Feature flags controlled by Firebase staging project
- Real data with test accounts

### Production Environment

- Points to production API endpoints
- Minimal logging
- Full analytics
- Feature flags controlled by Firebase production project
- Real data only

## Build Artifacts

Each build generates the following artifacts:

1. `.ipa` file (iOS app package)
2. `.dSYM` files (debug symbols for crash reporting)
3. Build logs
4. Test reports

These artifacts are stored in the CI system and can be downloaded for debugging purposes.

## Version Management

The app version consists of three components:

1. **Version Number** (e.g., 1.2.0): Follows semantic versioning
2. **Build Number** (e.g., 42): Increments with each build
3. **Commit Hash** (abbreviated): Included in debug builds

To update the version:

```bash
# Update version number
fastlane update_version version:1.2.0

# Update build number
fastlane increment_build_number
```

## Advanced Build Options

### Custom Build Flags

You can pass custom build flags to modify the build:

```bash
CUSTOM_FLAG="value" fastlane build_debug
```

Available custom flags:

- `DISABLE_ANALYTICS`: Disables analytics tracking
- `MOCK_API`: Uses mock API responses
- `UI_TESTING`: Enables UI testing mode
- `PERFORMANCE_MONITORING`: Enables performance monitoring

### Building for Specific Devices

```bash
# Build for iPad
fastlane build_debug device:iPad

# Build for specific iOS version
fastlane build_debug ios_version:15.0
```

## Documentation Generation

The project uses Jazzy to generate API documentation:

```bash
# Install Jazzy
gem install jazzy

# Generate documentation
jazzy --min-acl internal
```

Documentation is generated in the `docs` directory.

## Build Script Customization

Custom build scripts are located in the `Scripts` directory:

- `bump_version.sh`: Updates version and build numbers
- `generate_assets.sh`: Generates asset catalogs
- `validate_localization.sh`: Validates localization files
- `pre_build.sh`: Runs before each build
- `post_build.sh`: Runs after each build

To add a custom build phase in Xcode:

1. Select the target
2. Go to Build Phases
3. Click "+" and select "New Run Script Phase"
4. Enter the script or reference a script file

## Conclusion

This document provides comprehensive instructions for building, testing, and deploying the Haevn iOS app. For additional information, refer to:

- [ARCHITECTURE.md](ARCHITECTURE.md): System architecture details
- [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md): Development process
- [TESTING_STRATEGY.md](TESTING_STRATEGY.md): Testing approach
- [FEATURE_FLAGS.md](FEATURE_FLAGS.md): Feature flag system
- [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md): Pre-launch verification
