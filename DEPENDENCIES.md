# Haevn App Dependencies

This document provides a comprehensive overview of all external dependencies used in the Haevn iOS application, including third-party libraries, external services, licensing information, and update procedures.

## Core Dependencies

### Swift Package Manager Dependencies

| Package | Version | Purpose | License | Repository |
|---------|---------|---------|---------|------------|
| Alamofire | 5.6.2 | Networking | MIT | [GitHub](https://github.com/Alamofire/Alamofire) |
| SwiftUI-Introspect | 0.2.3 | UI customization | MIT | [GitHub](https://github.com/siteline/SwiftUI-Introspect) |
| Kingfisher | 7.6.1 | Image loading and caching | MIT | [GitHub](https://github.com/onevcat/Kingfisher) |
| Firebase | 10.4.0 | Analytics, remote config | Apache 2.0 | [GitHub](https://github.com/firebase/firebase-ios-sdk) |
| SwiftDate | 7.0.0 | Date manipulation | MIT | [GitHub](https://github.com/malcommac/SwiftDate) |
| Lottie | 4.1.3 | Animation rendering | Apache 2.0 | [GitHub](https://github.com/airbnb/lottie-ios) |
| SnapKit | 5.6.0 | Programmatic constraints | MIT | [GitHub](https://github.com/SnapKit/SnapKit) |
| SwiftKeychainWrapper | 4.0.1 | Keychain access | MIT | [GitHub](https://github.com/jrendel/SwiftKeychainWrapper) |
| Swinject | 2.8.3 | Dependency injection | MIT | [GitHub](https://github.com/Swinject/Swinject) |
| SwiftLint | 0.50.3 | Code linting | MIT | [GitHub](https://github.com/realm/SwiftLint) |

### CocoaPods Dependencies

| Pod | Version | Purpose | License | Repository |
|-----|---------|---------|---------|------------|
| Stripe | 23.3.4 | Payment processing | MIT | [GitHub](https://github.com/stripe/stripe-ios) |
| OneSignal | 3.12.4 | Push notifications | MIT | [GitHub](https://github.com/OneSignal/OneSignal-iOS-SDK) |
| Mixpanel | 4.1.1 | Analytics | Apache 2.0 | [GitHub](https://github.com/mixpanel/mixpanel-swift) |
| GoogleMaps | 7.2.0 | Maps integration | Proprietary | [Website](https://developers.google.com/maps/documentation/ios-sdk) |
| AVPlayer-NowPlayingInfo | 0.3.1 | Media metadata | MIT | [GitHub](https://github.com/mickeyl/AVPlayer-NowPlayingInfo) |

## External Services

### API Services

| Service | Purpose | Documentation | Authentication Method |
|---------|---------|---------------|------------------------|
| Haevn Backend API | Core app functionality | [API_SPEC.md](API_SPEC.md) | JWT |
| FlowState API | Video processing and delivery | [FlowState Docs](https://flowstate.com/docs) | API Key |
| WakeSys/Vivaticket | Booking engine | [WakeSys API](https://wakesys.com/api) | OAuth 2.0 |
| Stripe API | Payment processing | [Stripe Docs](https://stripe.com/docs/api) | API Key |
| Google Places API | Location services | [Google Places Docs](https://developers.google.com/places/web-service/intro) | API Key |

### Cloud Services

| Service | Purpose | Console URL | Authentication Method |
|---------|---------|-------------|------------------------|
| Firebase | Analytics, remote config, crash reporting | [Firebase Console](https://console.firebase.google.com) | Google Account |
| AWS S3 | Media storage | [AWS Console](https://aws.amazon.com/console/) | IAM Credentials |
| OneSignal | Push notifications | [OneSignal Dashboard](https://onesignal.com) | API Key |
| Mixpanel | User analytics | [Mixpanel Dashboard](https://mixpanel.com) | API Key |
| App Center | Beta distribution | [App Center Portal](https://appcenter.ms) | Microsoft Account |

## License Management

### License Summary

| License Type | Count | Requirements |
|-------------|-------|--------------|
| MIT | 12 | Attribution |
| Apache 2.0 | 4 | Attribution, state changes |
| BSD | 2 | Attribution |
| Proprietary | 1 | API key, usage limits |

### License Compliance

- All open-source licenses are tracked in the `ACKNOWLEDGEMENTS.md` file
- License texts are included in the app's "About" section
- Proprietary licenses are managed by the legal team
- Annual license audit is performed by the engineering team

## Dependency Management Strategy

### Version Control

- Dependencies are locked to specific versions to ensure build stability
- Major version updates require team review and testing
- Security updates are prioritized and applied promptly
- Dependency updates are scheduled monthly

### Adding New Dependencies

Before adding a new dependency, consider:

1. Is it actively maintained?
2. Is the license compatible with our project?
3. What is the impact on app size?
4. Are there any security concerns?
5. Can we implement the functionality ourselves?

Process for adding a dependency:

1. Create a proposal in the #engineering Slack channel
2. Get approval from at least two senior engineers
3. Document the dependency in this file
4. Update the `ACKNOWLEDGEMENTS.md` file

## Update Procedures

### Regular Updates

Monthly dependency updates:

1. Create a `dependency/update-YYYY-MM` branch
2. Update dependencies to latest compatible versions
3. Run all tests and verify functionality
4. Create a PR for team review

### Security Updates

For critical security updates:

1. Create a `hotfix/dependency-CVE-XXXX` branch
2. Update the affected dependency
3. Run security scans and tests
4. Create a PR for expedited review
5. Deploy to production ASAP

### Breaking Changes

When a dependency has breaking changes:

1. Create a `dependency/major-update-NAME` branch
2. Implement necessary code changes
3. Update tests and documentation
4. Create a PR with detailed changelog
5. Schedule for the next release cycle

## Dependency Details

### Networking

#### Alamofire (5.6.2)

Used for all HTTP networking in the app.

Key features used:
- Request/response interceptors
- Automatic retry mechanism
- Response validation
- Certificate pinning

Integration points:
- `Core/Networking/APIClient.swift`
- `Core/Networking/RequestInterceptor.swift`

#### Firebase (10.4.0)

Used for analytics, remote config, and crash reporting.

Key features used:
- Remote Config for feature flags
- Analytics for user behavior tracking
- Crashlytics for crash reporting

Integration points:
- `App/AppDelegate.swift` (initialization)
- `Core/Analytics/AnalyticsManager.swift`
- `Core/Config/RemoteConfigManager.swift`

### UI Components

#### Kingfisher (7.6.1)

Used for image loading, caching, and processing.

Key features used:
- Asynchronous image downloading
- Memory and disk caching
- Image processing (resizing, rounding)
- Placeholder and error handling

Integration points:
- `UI/Extensions/Image+Kingfisher.swift`
- `UI/Components/AvatarView.swift`

#### Lottie (4.1.3)

Used for complex animations.

Key features used:
- JSON-based animation rendering
- Animation playback control
- Dynamic animation properties

Integration points:
- `UI/Components/LottieView.swift`
- `Features/Onboarding/AnimatedIntroView.swift`

### Data Management

#### SwiftDate (7.0.0)

Used for date manipulation and formatting.

Key features used:
- Date arithmetic
- Time zone handling
- Relative date formatting
- Date parsing

Integration points:
- `Core/Extensions/Date+Formatting.swift`
- `Features/Booking/CalendarViewModel.swift`

#### SwiftKeychainWrapper (4.0.1)

Used for secure storage of sensitive data.

Key features used:
- Secure storage of API tokens
- Encrypted user credentials
- Biometric authentication integration

Integration points:
- `Core/Security/SecureStorage.swift`
- `Core/Authentication/TokenManager.swift`

### Architecture

#### Swinject (2.8.3)

Used for dependency injection.

Key features used:
- Container registration
- Factory pattern implementation
- Circular dependency resolution
- Scope management (singleton, transient)

Integration points:
- `Core/DependencyInjection/Container.swift`
- `App/AppCoordinator.swift`

## External Service Integration Details

### Stripe Integration

The app uses Stripe for payment processing with the following components:

- Stripe SDK for payment UI
- Customer API for saved payment methods
- PaymentIntent API for transaction processing
- Apple Pay integration

Integration points:
- `Features/Payments/StripeService.swift`
- `Features/Booking/CheckoutViewModel.swift`

Configuration:
- Publishable key stored in configuration files
- Secret key used only on backend
- Webhook endpoints for payment events

### FlowState Video Integration

The FlowState API is used for surf session video processing:

- Video upload and processing
- Multi-angle video synchronization
- Performance metrics extraction
- Video streaming

Integration points:
- `Features/FlowState/VideoService.swift`
- `Features/FlowState/PlayerViewModel.swift`

Configuration:
- API keys stored in secure configuration
- Webhook endpoints for video processing events

## Dependency Monitoring

### Security Monitoring

- Weekly automated security scans
- Dependabot alerts for security vulnerabilities
- Manual review of security bulletins

### Performance Monitoring

- App size impact tracked for each dependency
- Startup time monitoring
- Memory usage profiling
- Network request overhead analysis

## Offline Support

The following dependencies support offline functionality:

- Kingfisher: Image caching
- Core Data: Local data persistence
- Firebase: Analytics queuing
- SwiftKeychainWrapper: Offline authentication

## Troubleshooting Common Issues

### Alamofire Network Issues

If experiencing network connectivity problems:

```swift
// Check for certificate pinning issues
let session = Session(
    serverTrustManager: ServerTrustManager(
        evaluators: [
            "api.haevn.com": DisabledTrustEvaluator()
        ]
    )
)
```

### Firebase Configuration

If Firebase fails to initialize:

1. Verify GoogleService-Info.plist is included in the target
2. Check bundle ID matches Firebase project
3. Ensure proper initialization in AppDelegate

```swift
// Proper Firebase initialization
FirebaseApp.configure()
```

### Stripe Integration Issues

For payment processing problems:

1. Check Stripe API key validity
2. Verify webhook endpoint configuration
3. Test with Stripe test mode

## Future Considerations

### Planned Updates

- Migrate from CocoaPods to Swift Package Manager
- Evaluate SwiftUI Composable Architecture
- Consider replacing Alamofire with native URLSession wrapper
- Explore server-driven UI frameworks

### Dependency Reduction Strategy

- Identify opportunities to replace dependencies with native implementations
- Consolidate analytics providers
- Evaluate impact of removing dependencies on app size and performance
