# Haevn Developer Onboarding Guide

Welcome to the Haevn iOS app development team! This guide will help you get set up with the development environment, understand the project structure, and start contributing effectively.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- macOS 12.0 or later
- Xcode 14.0 or later
- Swift 5.7 or later
- CocoaPods 1.11.0 or later
- Git 2.30.0 or later
- Homebrew (recommended for installing dependencies)

### Required Accounts

You'll need access to the following services:

- GitHub organization access
- Firebase console access
- App Store Connect (for release managers)
- TestFlight distribution
- Figma design files
- Slack workspace

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

# Open the workspace
open Haevn.xcworkspace
```

### 3. Set Up Configuration Files

```bash
# Copy the example configuration file
cp Config/Configuration.example.xcconfig Config/Configuration.debug.xcconfig
cp Config/Configuration.example.xcconfig Config/Configuration.release.xcconfig

# Edit the configuration files with your local settings
open Config/Configuration.debug.xcconfig
```

Update the configuration files with the necessary API keys and endpoints provided by your team lead.

### 4. Set Up Development Certificates

1. Open Xcode preferences
2. Navigate to Accounts tab
3. Add your Apple Developer account
4. Select the Haevn team
5. Click "Manage Certificates" and create a development certificate

## Project Structure

The Haevn app follows a modular architecture with the following main directories:

```
Haevn/
├── App/                  # App entry point and configuration
├── Features/             # Feature modules
│   ├── Authentication/   # User authentication
│   ├── Booking/          # Session booking
│   ├── FlowState/        # Video integration
│   ├── Crews/            # Social features
│   ├── Retail/           # In-app store
│   └── Profile/          # User profile
├── Core/                 # Core functionality
│   ├── Networking/       # API client
│   ├── Storage/          # Local storage
│   ├── Authentication/   # Auth services
│   └── Analytics/        # Analytics tracking
├── UI/                   # UI components
│   ├── Components/       # Reusable UI components
│   ├── Styles/           # Typography, colors, etc.
│   └── Extensions/       # UI extensions
├── Utilities/            # Helper functions
├── Resources/            # Assets, strings, etc.
└── Tests/                # Unit and UI tests
```

### Key Files

- `App/AppDelegate.swift`: App lifecycle management
- `App/SceneDelegate.swift`: UI scene management
- `App/AppCoordinator.swift`: Main navigation flow
- `Core/DependencyInjection/Container.swift`: Dependency injection setup
- `Features/*/Coordinator.swift`: Feature-specific navigation
- `UI/Components/HaevnUI.swift`: Design system components

## Development Workflow

### 1. Create a Feature Branch

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create a feature branch
git checkout -b feature/HAEVN-123-feature-name
```

### 2. Implement Your Changes

Follow the [STYLE_GUIDE.md](STYLE_GUIDE.md) for coding standards and patterns.

### 3. Run Tests

```bash
# Run unit tests
xcodebuild test -workspace Haevn.xcworkspace -scheme Haevn -destination 'platform=iOS Simulator,name=iPhone 14 Pro'

# Or use the Xcode UI to run tests
# Cmd+U in Xcode
```

### 4. Create a Pull Request

1. Push your branch to GitHub
2. Create a pull request to the `develop` branch
3. Fill out the PR template with details about your changes
4. Request reviews from team members

## Common Tasks

### Adding a New Feature

1. Create a new directory in `Features/`
2. Implement the feature using MVVM architecture
3. Create a coordinator for navigation
4. Register dependencies in the container
5. Add unit tests in `Tests/`

### Updating the Design System

1. Modify files in `UI/Styles/`
2. Update components in `UI/Components/`
3. Run the design system showcase app to verify changes
4. Update documentation if necessary

### Working with Feature Flags

See [FEATURE_FLAGS.md](FEATURE_FLAGS.md) for details on:
- How to add new feature flags
- Testing with feature flags
- Feature flag best practices

### Debugging

- Use the Feature Flag Debug Menu (tap version number 10 times in Profile)
- Check logs in the Debug Console (Cmd+Shift+Y)
- Use Instruments for performance profiling (Cmd+I)

## Testing

See [TESTING_STRATEGY.md](TESTING_STRATEGY.md) for comprehensive testing guidelines.

Quick testing tips:
- Write unit tests for all business logic
- Use the test doubles provided in `Tests/Doubles/`
- Run tests before creating a PR

## Deployment

### Building for TestFlight

```bash
# Update version and build number
./Scripts/bump_version.sh minor

# Archive and upload
xcodebuild -workspace Haevn.xcworkspace -scheme Haevn -configuration Release archive -archivePath ./build/Haevn.xcarchive
xcodebuild -exportArchive -archivePath ./build/Haevn.xcarchive -exportOptionsPlist ExportOptions.plist -exportPath ./build
```

### Release Process

1. Create a release branch from `develop`
2. Bump version numbers
3. Submit to TestFlight for internal testing
4. Fix any critical issues
5. Submit for App Store review

## Resources

### Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md): System architecture details
- [API_SPEC.md](API_SPEC.md): API documentation
- [STYLE_GUIDE.md](STYLE_GUIDE.md): Coding standards
- [TESTING_STRATEGY.md](TESTING_STRATEGY.md): Testing approach
- [FEATURE_FLAGS.md](FEATURE_FLAGS.md): Feature flag system

### Learning Resources

- [SwiftUI Documentation](https://developer.apple.com/documentation/swiftui)
- [Combine Documentation](https://developer.apple.com/documentation/combine)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)

### Team Communication

- Slack: #haevn-ios-dev channel for day-to-day communication
- JIRA: Task tracking and sprint planning
- GitHub: Code reviews and technical discussions
- Google Drive: Shared documents and resources

### Working with the Bttr. Design Team

The Bttr. Design Team is our dedicated design partner responsible for all design aspects of the Haevn app. As a new developer, you should:

1. **Introduce yourself** in the `#haevn-design` Slack channel
2. **Request access** to the Haevn Figma workspace
3. **Review** the [DESIGN_COLLABORATION.md](DESIGN_COLLABORATION.md) document for detailed guidelines on the design-development workflow
4. **Attend** the weekly design sync meeting (Wednesdays at 10:00 AM PST)
5. **Understand** the design system components and how they map to code implementation

The Bttr. Design Team is an invaluable resource for ensuring UI consistency and quality. When implementing UI features, always refer to the design specifications and reach out to the design team with any questions or clarifications.

## First Tasks

Here are some suggested first tasks to help you get familiar with the codebase:

1. **Environment Setup**: Complete the setup process and run the app locally
2. **Code Exploration**: Review the architecture documentation and explore the codebase
3. **Small Bug Fix**: Pick a small bug from the backlog to fix
4. **Add a Unit Test**: Add tests for an existing feature
5. **UI Component**: Make a small enhancement to an existing UI component

## Getting Help

- Reach out in the #haevn-ios-dev Slack channel
- Ask your assigned onboarding buddy
- Weekly team meetings on Wednesdays at 10:00 AM
- Engineering office hours on Fridays from 2:00-4:00 PM

## Contribution Guidelines

- Follow the Git workflow outlined in [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md)
- Write meaningful commit messages following conventional commits format
- Keep PRs focused and reasonably sized
- Document public APIs and complex logic
- Add tests for new functionality
- Update documentation when necessary

Welcome to the team! We're excited to have you contribute to the Haevn app.
