# Haevn App CI/CD Pipeline

This document describes the Continuous Integration and Continuous Deployment (CI/CD) pipeline for the Haevn iOS application, including workflow configurations, automation tools, and best practices.

## Pipeline Overview

The Haevn app CI/CD pipeline automates the build, test, and deployment processes to ensure consistent, high-quality releases. The pipeline is implemented using GitHub Actions and fastlane.

```
┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐
│   Code    │────▶│   Build   │────▶│   Test    │────▶│  Deploy   │────▶│  Monitor  │
│  Commit   │     │           │     │           │     │           │     │           │
└───────────┘     └───────────┘     └───────────┘     └───────────┘     └───────────┘
```

## GitHub Actions Workflows

### Main Workflow (`ci.yml`)

This workflow runs on every pull request to `develop` and `main` branches, as well as on direct pushes to these branches.

```yaml
name: Haevn CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  lint:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install SwiftLint
        run: brew install swiftlint
      - name: Run SwiftLint
        run: swiftlint --strict

  build-and-test:
    needs: lint
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '2.7'
          bundler-cache: true
      - name: Install dependencies
        run: |
          gem install cocoapods
          pod install
      - name: Build and test
        run: fastlane test
      - name: Upload test results
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: fastlane/test_output

  deploy-to-testflight:
    needs: build-and-test
    if: github.event_name == 'push' && github.ref == 'refs/heads/develop'
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '2.7'
          bundler-cache: true
      - name: Deploy to TestFlight
        run: fastlane beta
        env:
          MATCH_PASSWORD: ${{ secrets.MATCH_PASSWORD }}
          FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD: ${{ secrets.FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD }}
```

### Release Workflow (`release.yml`)

This workflow runs when a release branch is created or when a tag is pushed.

```yaml
name: Haevn Release

on:
  push:
    branches:
      - 'release/*'
    tags:
      - 'v*'

jobs:
  build-and-release:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '2.7'
          bundler-cache: true
      - name: Deploy to App Store
        run: fastlane release
        env:
          MATCH_PASSWORD: ${{ secrets.MATCH_PASSWORD }}
          FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD: ${{ secrets.FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD }}
```

### Nightly Build Workflow (`nightly.yml`)

This workflow runs every night to build and test the app with the latest dependencies.

```yaml
name: Nightly Build

on:
  schedule:
    - cron: '0 2 * * *'  # Runs at 2 AM UTC daily

jobs:
  nightly-build:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '2.7'
          bundler-cache: true
      - name: Update dependencies
        run: |
          gem install cocoapods
          pod update
      - name: Build and test
        run: fastlane nightly
      - name: Upload build
        uses: actions/upload-artifact@v3
        with:
          name: nightly-build
          path: fastlane/builds
```

## Fastlane Configuration

The CI/CD pipeline uses fastlane to automate the build and deployment processes. The main lanes are defined in the `Fastfile`:

### Test Lane

```ruby
desc "Run tests"
lane :test do
  scan(
    workspace: "Haevn.xcworkspace",
    scheme: "Haevn Tests",
    devices: ["iPhone 14 Pro"],
    clean: true,
    code_coverage: true,
    output_types: "html,junit",
    output_directory: "fastlane/test_output"
  )
end
```

### Beta Lane

```ruby
desc "Deploy a new beta build to TestFlight"
lane :beta do
  ensure_git_status_clean
  
  # Increment build number
  increment_build_number(
    build_number: latest_testflight_build_number + 1
  )
  
  # Match certificates and provisioning profiles
  match(
    type: "appstore",
    readonly: true
  )
  
  # Build the app
  build_app(
    workspace: "Haevn.xcworkspace",
    scheme: "Haevn Release",
    export_method: "app-store",
    export_options: {
      provisioningProfiles: {
        "com.haevn.app" => "match AppStore com.haevn.app"
      }
    },
    output_directory: "fastlane/builds"
  )
  
  # Upload to TestFlight
  upload_to_testflight(
    skip_waiting_for_build_processing: true,
    distribute_external: false,
    changelog: git_changelog
  )
  
  # Notify team
  slack(
    message: "New TestFlight build available!",
    success: true,
    slack_url: ENV["SLACK_URL"]
  )
end
```

### Release Lane

```ruby
desc "Deploy a new version to the App Store"
lane :release do
  ensure_git_status_clean
  
  # Match certificates and provisioning profiles
  match(
    type: "appstore",
    readonly: true
  )
  
  # Build the app
  build_app(
    workspace: "Haevn.xcworkspace",
    scheme: "Haevn Release",
    export_method: "app-store",
    export_options: {
      provisioningProfiles: {
        "com.haevn.app" => "match AppStore com.haevn.app"
      }
    },
    output_directory: "fastlane/builds"
  )
  
  # Upload to App Store
  upload_to_app_store(
    force: true,
    skip_metadata: false,
    skip_screenshots: false,
    submit_for_review: true,
    automatic_release: true,
    submission_information: {
      add_id_info_uses_idfa: false
    }
  )
  
  # Tag the release
  add_git_tag(
    tag: "v#{get_version_number}"
  )
  
  # Notify team
  slack(
    message: "New App Store submission complete!",
    success: true,
    slack_url: ENV["SLACK_URL"]
  )
end
```

### Nightly Lane

```ruby
desc "Build a nightly version for internal testing"
lane :nightly do
  # Increment build number with timestamp
  increment_build_number(
    build_number: "#{Time.now.strftime('%Y%m%d%H%M')}"
  )
  
  # Match certificates and provisioning profiles
  match(
    type: "development",
    readonly: true
  )
  
  # Run tests
  test
  
  # Build the app
  build_app(
    workspace: "Haevn.xcworkspace",
    scheme: "Haevn Debug",
    export_method: "development",
    output_directory: "fastlane/builds"
  )
  
  # Notify team
  slack(
    message: "Nightly build completed!",
    success: true,
    slack_url: ENV["SLACK_URL"]
  )
end
```

## Certificate and Provisioning Profile Management

We use fastlane match to manage certificates and provisioning profiles:

```ruby
desc "Sync certificates and provisioning profiles"
lane :certificates do
  match(type: "development", readonly: false)
  match(type: "appstore", readonly: false)
end
```

The certificates and provisioning profiles are stored in a private Git repository, which ensures that all team members and CI systems use the same signing identities.

## Environment Variables

The CI/CD pipeline uses the following environment variables:

| Variable | Description | Used In |
|----------|-------------|---------|
| `MATCH_PASSWORD` | Password for the match certificate repository | GitHub Actions |
| `FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD` | App-specific password for Apple ID | GitHub Actions |
| `SLACK_URL` | Webhook URL for Slack notifications | Fastlane |
| `FIREBASE_CLI_TOKEN` | Token for Firebase distribution | Fastlane |
| `APPSTORE_API_KEY_ID` | App Store Connect API Key ID | Fastlane |
| `APPSTORE_API_KEY_ISSUER_ID` | App Store Connect API Key Issuer ID | Fastlane |
| `APPSTORE_API_KEY_CONTENT` | App Store Connect API Key content | Fastlane |

These variables are stored as GitHub Secrets and are not exposed in logs or to pull requests from forks.

## Workflow Triggers

| Event | Workflow | Actions |
|-------|----------|---------|
| Pull Request to `develop` | `ci.yml` | Lint, Build, Test |
| Push to `develop` | `ci.yml` | Lint, Build, Test, Deploy to TestFlight (internal) |
| Push to `release/*` | `release.yml` | Build, Test, Deploy to TestFlight (external) |
| Push tag `v*` | `release.yml` | Build, Test, Deploy to App Store |
| Scheduled (nightly) | `nightly.yml` | Update dependencies, Build, Test |

## Pipeline Stages

### 1. Code Quality

- SwiftLint for code style enforcement
- SwiftFormat for consistent formatting
- Danger for PR feedback
- Dependency vulnerability scanning

### 2. Build

- Clean build to ensure reproducibility
- Incremental builds for faster CI
- Artifact generation (IPA, dSYM)
- Build metadata collection

### 3. Test

- Unit tests with XCTest
- UI tests with XCUITest
- Code coverage reporting
- Test result collection and reporting

### 4. Deploy

- TestFlight distribution for internal testing
- TestFlight distribution for external testing
- App Store submission
- Firebase App Distribution for specific builds

### 5. Monitor

- Crash reporting with Firebase Crashlytics
- Performance monitoring
- User analytics
- Feedback collection

## Monitoring and Notifications

The pipeline includes monitoring and notification systems:

- Slack notifications for build status
- Email notifications for critical failures
- Dashboard for build history and status
- Automated issue creation for test failures

## Best Practices

### Security

- Secrets are stored as GitHub Secrets
- Certificates are managed securely with match
- Code signing is verified during the build process
- Dependencies are scanned for vulnerabilities

### Performance

- Caching of dependencies to speed up builds
- Parallel execution of tests
- Incremental builds when possible
- Build time monitoring and optimization

### Reliability

- Retry mechanisms for flaky tests
- Timeout handling for long-running processes
- Fallback mechanisms for critical failures
- Regular maintenance of the pipeline

## Appendix: Pipeline Diagram

```
┌─────────────┐
│  Developer  │
│   Commits   │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│    Pull     │────▶│    Lint     │
│   Request   │     │             │
└──────┬──────┘     └──────┬──────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│   Merge     │────▶│    Build    │
│  to Branch  │     │             │
└──────┬──────┘     └──────┬──────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│   Branch    │     │    Test     │
│   Policy    │     │             │
└──────┬──────┘     └──────┬──────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│  Automated  │     │   Deploy    │
│   Release   │────▶│             │
└─────────────┘     └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Monitor   │
                    │             │
                    └─────────────┘
```

## Related Documentation

- [BUILD_INSTRUCTIONS.md](BUILD_INSTRUCTIONS.md): Detailed build instructions
- [BUILD_PROCESS.md](BUILD_PROCESS.md): Overall build process
- [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md): Development workflow
- [TESTING_STRATEGY.md](TESTING_STRATEGY.md): Testing approach
