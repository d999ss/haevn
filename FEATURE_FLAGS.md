# Haevn Feature Flags

This document provides comprehensive documentation for the feature flag system used in the Haevn iOS app, including available flags, default configurations, testing procedures, and rollout strategies.

## Feature Flag System Overview

The Haevn app uses a robust feature flag system to enable:

- Gradual feature rollouts
- A/B testing
- Beta testing of new features
- Quick disabling of problematic features
- Environment-specific configurations

## Feature Flag Implementation

The feature flag system is implemented using a combination of:

1. **Remote Configuration**: Firebase Remote Config for dynamic updates
2. **Local Defaults**: Hardcoded fallbacks when remote configuration is unavailable
3. **User Targeting**: Segment-based flag targeting

### Core Architecture

```swift
protocol FeatureFlagProvider {
    func isEnabled(_ flag: FeatureFlag) -> Bool
    func getValue<T>(_ flag: FeatureFlag) -> T?
}

enum FeatureFlag: String, CaseIterable {
    // Feature toggles
    case enableCrewFeature
    case enableRetailStore
    case enableFlowStateIntegration
    case enableOfflineMode
    
    // Feature variations
    case bookingFlowVariant
    case paymentMethodsEnabled
    case videoPlayerType
    
    // Rollout percentages
    case crewFeatureRolloutPercentage
    case newUIRolloutPercentage
}

class RemoteFeatureFlagProvider: FeatureFlagProvider {
    private let remoteConfig: RemoteConfig
    
    init(remoteConfig: RemoteConfig = RemoteConfig.remoteConfig()) {
        self.remoteConfig = remoteConfig
        setupDefaults()
        fetchRemoteConfig()
    }
    
    func isEnabled(_ flag: FeatureFlag) -> Bool {
        return remoteConfig[flag.rawValue].boolValue
    }
    
    func getValue<T>(_ flag: FeatureFlag) -> T? {
        // Implementation for different types
    }
    
    private func setupDefaults() {
        let defaults: [String: Any] = [
            FeatureFlag.enableCrewFeature.rawValue: false,
            FeatureFlag.enableRetailStore.rawValue: true,
            // Other defaults...
        ]
        remoteConfig.setDefaults(defaults as? [String: NSObject])
    }
    
    private func fetchRemoteConfig() {
        remoteConfig.fetch(withExpirationDuration: 3600) { [weak self] status, error in
            if status == .success {
                self?.remoteConfig.activate()
            }
        }
    }
}
```

## Available Feature Flags

### Core Feature Toggles

| Flag Name | Description | Default | Type |
|-----------|-------------|---------|------|
| `enableCrewFeature` | Enables the Crews social feature | `false` | Boolean |
| `enableRetailStore` | Enables in-app retail store | `true` | Boolean |
| `enableFlowStateIntegration` | Enables FlowState video integration | `true` | Boolean |
| `enableOfflineMode` | Enables enhanced offline functionality | `true` | Boolean |
| `enableReferralProgram` | Enables referral program features | `false` | Boolean |
| `enablePushNotifications` | Enables push notification features | `true` | Boolean |
| `enableBiometricAuth` | Enables Face/Touch ID authentication | `true` | Boolean |
| `enableWalletFeature` | Enables in-app wallet and payments | `true` | Boolean |

### UI Variations

| Flag Name | Description | Default | Type |
|-----------|-------------|---------|------|
| `bookingFlowVariant` | Controls booking flow UI variant | `"standard"` | String |
| `homeScreenLayout` | Controls home screen layout | `"grid"` | String |
| `colorThemeVariant` | Controls app color theme | `"standard"` | String |
| `navigationStyle` | Controls navigation bar style | `"standard"` | String |
| `videoPlayerType` | Controls video player implementation | `"native"` | String |

### Rollout Percentages

| Flag Name | Description | Default | Type |
|-----------|-------------|---------|------|
| `crewFeatureRolloutPercentage` | Percentage of users with Crews feature | `0` | Number |
| `newUIRolloutPercentage` | Percentage of users with new UI | `0` | Number |
| `betaFeaturesPercentage` | Percentage of users with beta features | `0` | Number |

### Configuration Values

| Flag Name | Description | Default | Type |
|-----------|-------------|---------|------|
| `maxVideoDuration` | Maximum video duration in seconds | `300` | Number |
| `sessionBookingWindowDays` | Days in advance users can book | `14` | Number |
| `maxCrewSize` | Maximum number of members in a crew | `20` | Number |
| `cacheExpirationHours` | Hours before cache expires | `24` | Number |

## Environment-Specific Configurations

### Development Environment

```json
{
  "enableCrewFeature": true,
  "enableRetailStore": true,
  "enableFlowStateIntegration": true,
  "enableReferralProgram": true,
  "bookingFlowVariant": "experimental",
  "betaFeaturesPercentage": 100
}
```

### Staging Environment

```json
{
  "enableCrewFeature": true,
  "enableRetailStore": true,
  "enableFlowStateIntegration": true,
  "enableReferralProgram": true,
  "bookingFlowVariant": "standard",
  "betaFeaturesPercentage": 50
}
```

### Production Environment

```json
{
  "enableCrewFeature": false,
  "enableRetailStore": true,
  "enableFlowStateIntegration": true,
  "enableReferralProgram": false,
  "bookingFlowVariant": "standard",
  "betaFeaturesPercentage": 0,
  "crewFeatureRolloutPercentage": 10,
  "newUIRolloutPercentage": 5
}
```

## Using Feature Flags in Code

### SwiftUI Example

```swift
struct BookingView: View {
    @EnvironmentObject var featureFlags: FeatureFlagService
    
    var body: some View {
        VStack {
            if featureFlags.isEnabled(.enableOfflineMode) {
                OfflineBookingView()
            } else {
                StandardBookingView()
            }
            
            if let variant = featureFlags.getValue(.bookingFlowVariant) as? String {
                switch variant {
                case "experimental":
                    ExperimentalCheckoutView()
                case "simplified":
                    SimplifiedCheckoutView()
                default:
                    StandardCheckoutView()
                }
            }
        }
    }
}
```

### UIKit Example

```swift
class BookingViewController: UIViewController {
    private let featureFlags: FeatureFlagProvider
    
    init(featureFlags: FeatureFlagProvider) {
        self.featureFlags = featureFlags
        super.init(nibName: nil, bundle: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if featureFlags.isEnabled(.enableOfflineMode) {
            setupOfflineSupport()
        }
        
        if let maxBookingDays = featureFlags.getValue(.sessionBookingWindowDays) as? Int {
            calendarView.maxSelectableDays = maxBookingDays
        }
    }
}
```

## Testing with Feature Flags

### Unit Testing

```swift
class BookingViewModelTests: XCTestCase {
    func testBookingWithOfflineEnabled() {
        // Arrange
        let mockFlags = MockFeatureFlagProvider()
        mockFlags.enabledFlags = [.enableOfflineMode]
        let viewModel = BookingViewModel(featureFlags: mockFlags)
        
        // Act
        viewModel.prepareBookingFlow()
        
        // Assert
        XCTAssertTrue(viewModel.isOfflineModeAvailable)
    }
    
    func testBookingWithOfflineDisabled() {
        // Arrange
        let mockFlags = MockFeatureFlagProvider()
        mockFlags.enabledFlags = []
        let viewModel = BookingViewModel(featureFlags: mockFlags)
        
        // Act
        viewModel.prepareBookingFlow()
        
        // Assert
        XCTAssertFalse(viewModel.isOfflineModeAvailable)
    }
}

class MockFeatureFlagProvider: FeatureFlagProvider {
    var enabledFlags: Set<FeatureFlag> = []
    var values: [FeatureFlag: Any] = [:]
    
    func isEnabled(_ flag: FeatureFlag) -> Bool {
        return enabledFlags.contains(flag)
    }
    
    func getValue<T>(_ flag: FeatureFlag) -> T? {
        return values[flag] as? T
    }
}
```

### UI Testing

```swift
class BookingFlowUITests: XCTestCase {
    func testExperimentalBookingFlow() {
        // Set up app with experimental booking flow
        let app = XCUIApplication()
        app.launchArguments = ["--uitesting", "--feature-bookingFlowVariant=experimental"]
        app.launch()
        
        // Test the experimental flow
        app.tabBars.buttons["Book"].tap()
        XCTAssertTrue(app.buttons["Quick Book"].exists)
    }
    
    func testStandardBookingFlow() {
        // Set up app with standard booking flow
        let app = XCUIApplication()
        app.launchArguments = ["--uitesting", "--feature-bookingFlowVariant=standard"]
        app.launch()
        
        // Test the standard flow
        app.tabBars.buttons["Book"].tap()
        XCTAssertTrue(app.buttons["Select Date"].exists)
    }
}
```

### Debug Menu

The app includes a hidden debug menu for testing feature flags:

1. Go to the Profile screen
2. Tap the version number 10 times
3. Enter the developer password
4. Access the Feature Flags debug menu

## Feature Flag Lifecycle

### Adding a New Feature Flag

1. Define the flag in the `FeatureFlag` enum
2. Add default values in `setupDefaults()`
3. Update the remote configuration in Firebase console
4. Document the flag in this document

### Removing a Feature Flag

1. When a feature is fully rolled out, mark the flag as deprecated
2. After ensuring stability, remove conditional code paths
3. Remove the flag from the enum and defaults
4. Remove the flag from remote configuration

## Rollout Strategies

### Percentage-Based Rollout

For gradual feature rollouts:

1. Start with a small percentage (1-5%)
2. Monitor analytics and crash reports
3. Gradually increase percentage if no issues are found
4. Complete rollout when stability is confirmed

### Targeted Rollouts

For specific user segments:

1. Define user segments in Firebase
2. Configure conditions for flag activation
3. Monitor adoption and feedback from each segment
4. Adjust targeting based on feedback

### A/B Testing

For testing feature variations:

1. Define variants (A, B, etc.)
2. Assign users randomly to variants
3. Track conversion metrics for each variant
4. Select winning variant based on data

## Monitoring and Analytics

### Key Metrics to Track

- Feature flag status changes
- Feature usage based on flag state
- Error rates correlated with flags
- Performance metrics by flag configuration

### Dashboard Integration

The feature flag system integrates with:

- Firebase Analytics
- Mixpanel
- Crash reporting tools
- Custom admin dashboard

## Emergency Procedures

### Disabling Problematic Features

If a feature causes critical issues:

1. Access the Firebase Remote Config console
2. Set the problematic feature flag to `false`
3. Publish changes immediately
4. Verify the change has propagated
5. Monitor for resolution

### Rollback Process

For more severe issues:

1. Deploy a hotfix if necessary
2. Update feature flags to previous stable configuration
3. Force remote config refresh in the app
4. Notify the team of the rollback

## Governance

### Feature Flag Review Process

1. Regular review of active feature flags
2. Cleanup of deprecated flags
3. Documentation updates
4. Performance impact assessment

### Approval Process

New feature flags require:

1. Product manager approval
2. Technical review
3. Documentation update
4. Rollout plan
5. Success metrics definition

## Best Practices

1. Keep the number of active feature flags manageable
2. Clean up flags after features are fully rolled out
3. Use descriptive names for flags
4. Document all flags and their purpose
5. Test all code paths with flags on and off
6. Don't nest feature flags more than two levels deep
7. Consider performance impact of flag evaluation
8. Use feature flags for both frontend and backend features
